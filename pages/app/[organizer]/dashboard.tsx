import { NextPage } from 'next';
import Link from 'next/link';
import styled from '@emotion/styled';

import { routes, useLanguage, useLocale } from '../../../lib/routing';
import { useUser } from '../../../components/user/useUser';
import { AppWrapper } from '../../../components/wrappers/AppWrapper';
import { useT } from '../../../lib/i18n';
import { useOrganizer, useOrganizerId } from '../../../lib/useOrganizer';
import { getTranslation } from '../../../lib/translations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const StyledUl = styled.ul`
  list-style: disc inside;
  padding: 1rem;
`;

const StyledLi = styled.li`
  padding-bottom: 1rem;
`;

const StyledTestContent = styled.div`
  width: 100%;
  display: grid;
  padding: 0.75rem;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.5rem;
  column-gap: 1.5rem;
`;

const StyledTestContentBox = styled.div`
  height: 20rem;
  width: 100%;
  border: 1px solid var(--grey-400);
  padding: 1.5rem;
  font-weight: 700;
  border-radius: 0.75rem;
`;

const DashboardPage: NextPage = () => {
  useUser();
  const locale = useLocale();
  const t = useT();
  const language = useLanguage();
  const organizerId = useOrganizerId();
  const organizer = useOrganizer();
  const router = useRouter();
  const currentTranslation = getTranslation(language, organizer?.data?.relations?.translations);

  useEffect(() => {
    if (organizerId !== 'default' && router?.query?.organizer !== organizerId) {
      router.replace(routes.dashboard({ locale, query: { organizer: organizerId } }));
    }
  }, [locale, organizerId, router]);

  return (
    <AppWrapper>
      Dashboard for {currentTranslation?.attributes.name}
      <StyledUl>
        <StyledLi>
          <Link href={routes.userProfile({ locale })}>
            <a>Link: {t('menu.user.items.profile')}</a>
          </Link>
        </StyledLi>
      </StyledUl>
      <StyledTestContent>
        {[...Array(10)].map((i, index) => (
          <StyledTestContentBox key={index}>{t('test.content')}</StyledTestContentBox>
        ))}
      </StyledTestContent>
    </AppWrapper>
  );
};

export default DashboardPage;