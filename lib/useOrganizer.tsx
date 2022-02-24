import { useContext, useEffect, useState } from 'react';
import getConfig from 'next/config';
import { defaultOrganizerId, NavigationContext } from '../components/navigation/NavigationContext';
import { useCategories } from '../config/categories';
import { OrganizerShow } from './api/routes/organizer/show';
import { Organizer } from './api/types/organizer';
import { useEntry } from './categories';
import { Cookie, deleteCookie, getCookie, setCookie } from './cookies';
import { routes, useLocale } from './routing';
import { useAdminMode } from '../components/Admin/AdminContext';
import { useUser } from '../components/user/useUser';

const publicRuntimeConfig = getConfig ? getConfig()?.publicRuntimeConfig : undefined;
const activeOrganizerCookieName =
  (publicRuntimeConfig?.activeOrganizerCookieName as string) || 'ACTIVE_ORGANIZER_ID';

export const useOrganizerId = (): string => {
  const { activeOrganizerId, setActiveOrganizerId } = useContext(NavigationContext);
  const locale = useLocale();
  const { adminModeActive, activeOrganizerId: adminActiveOrganizerId } = useAdminMode();

  useEffect(() => {
    const organizerIdFromCookie = getCookie(activeOrganizerCookieName)?.value;

    if (organizerIdFromCookie && activeOrganizerId === defaultOrganizerId) {
      setActiveOrganizerId(organizerIdFromCookie);
    }
  }, [activeOrganizerId, locale, setActiveOrganizerId]);

  return adminModeActive ? adminActiveOrganizerId : activeOrganizerId;
};

export const useSetOrganizerId = (): ((organizerId: string) => void) => {
  const locale = useLocale();
  const { setActiveOrganizerId } = useContext(NavigationContext);

  return (organizerId): void => {
    if (organizerId === undefined || organizerId === defaultOrganizerId) {
      deleteCookie({
        name: activeOrganizerCookieName,
        path: routes.index({ locale }),
      } as Cookie);

      setActiveOrganizerId(defaultOrganizerId);
    } else {
      setCookie({
        'name': activeOrganizerCookieName,
        'value': organizerId,
        'path': routes.index({ locale }),
        'max-age': 1209600,
      });

      setActiveOrganizerId(organizerId);
    }
  };
};

export const useOrganizer = (): Organizer & { error?: Error } => {
  const organizerId = useOrganizerId();
  const categories = useCategories();
  const { isLoggedIn } = useUser();
  const [hasError, setHasError] = useState(false);
  const [result, setResult] = useState<Organizer>();

  const { entry } = useEntry<Organizer, OrganizerShow>(
    isLoggedIn ? categories?.organizer : undefined,
    isLoggedIn
      ? {
          organizer: organizerId,
        }
      : undefined,
    !hasError
  );

  useEffect(() => {
    if ((entry as unknown as { error: Error })?.error) {
      setHasError(true);
      setResult({ error: 'no organizer defined' } as unknown as Organizer);
    } else {
      setResult(entry as Organizer);
    }
  }, [entry]);

  return result;
};

export const useHandleActiveOrganizer = () => {
  const { user, isLoggedIn } = useUser();
  const activeOrganizerId = useOrganizerId();
  const setActiveOrganizerId = useSetOrganizerId();

  useEffect(() => {
    const userOrganizerIds = user?.relations?.organizers?.map(
      (role) => role.relations?.organizer?.id
    );

    if (isLoggedIn) {
      if (
        activeOrganizerId &&
        userOrganizerIds?.length > 0 &&
        !userOrganizerIds.includes(activeOrganizerId)
      ) {
        setActiveOrganizerId(userOrganizerIds[0]);
      } else if (userOrganizerIds?.length === 0 && activeOrganizerId !== defaultOrganizerId) {
        setActiveOrganizerId(defaultOrganizerId);
      }
    }
  }, [activeOrganizerId, isLoggedIn, setActiveOrganizerId, user?.relations?.organizers]);
};
