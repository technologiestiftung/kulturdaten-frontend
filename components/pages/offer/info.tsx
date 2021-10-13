import { CategoryEntryPage, useEntry } from '../../../lib/categories';
import { useT } from '../../../lib/i18n';
import { EntryFormHead } from '../../EntryForm/EntryFormHead';
import {
  EntryFormContainer,
  EntryFormContainerColumns,
  EntryFormWrapper,
} from '../../EntryForm/wrappers';
import { useNameForm } from '../helpers/form/Name';
import { FormContainer, FormGrid, FormItem, FormItemWidth } from '../helpers/formComponents';
import { Location } from '../../../lib/api/types/location';
import { Offer, OfferTranslation } from '../../../lib/api/types/offer';
import { Language, languageTranslationKeys } from '../../../config/locales';
import { OfferShow } from '../../../lib/api/routes/offer/show';
import { useEntryHeader } from '../helpers/useEntryHeader';
import { EntryPicker } from '../../EntryPicker';
import { OrganizerList } from '../../EntryList/OrganizerList';
import { Breakpoint, useBreakpointOrWider, WindowContext } from '../../../lib/WindowService';
import { getTranslation } from '../../../lib/translations';
import { useLanguage } from '../../../lib/routing';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Categories } from '../../../config/categories';
import { LocationList } from '../../EntryList/LocationList';
import { Save } from '../../EntryForm/Save';
import { useSaveDate } from '../helpers/useSaveDate';
import { useDescriptionForm } from '../helpers/form/Description';
import { EntryFormHook } from '../helpers/form';
import { useApiCall } from '../../../lib/api';
import { OfferUpdate } from '../../../lib/api/routes/offer/update';
import { Organizer } from '../../../lib/api/types/organizer';
import { Checkbox } from '../../checkbox';
import { usePseudoUID } from '../../../lib/uid';
import { Input, InputType } from '../../input';
import { contentLanguages } from '../../../config/locales';
import { useLinksForm } from '../helpers/form/Links';

const useRoomForm: EntryFormHook = ({ category, query }) => {
  const { entry, mutate } = useEntry<Offer, OfferShow>(category, query);
  const [translations, setTranslations] = useState<OfferTranslation[]>();
  const call = useApiCall();
  const t = useT();

  const [translationsFromApi, setTranslationsFromApi] = useState<OfferTranslation[]>();

  const initialTranslations = useMemo(
    () => entry?.data?.relations?.translations,
    [entry?.data?.relations?.translations]
  );

  const pristine = useMemo(
    () => JSON.stringify(translations) === JSON.stringify(translationsFromApi),
    [translations, translationsFromApi]
  );

  useEffect(() => {
    if (JSON.stringify(initialTranslations) !== JSON.stringify(translationsFromApi)) {
      setTranslationsFromApi(initialTranslations);
      setTranslations(initialTranslations);
    }
  }, [initialTranslations, translationsFromApi]);

  const renderedForm = (
    <FormContainer>
      <EntryFormHead title={t('categories.offer.form.locationInfo') as string} />
      <FormGrid>
        {contentLanguages.map((language: Language, index) => {
          const currentTranslation = translations
            ? getTranslation<OfferTranslation>(language, translations, false)
            : undefined;

          return (
            <FormItem width={FormItemWidth.half} key={index}>
              <Input
                label={`${t('date.roomInfo')} ${t(languageTranslationKeys[language])}`}
                value={currentTranslation?.attributes?.roomDescription || ''}
                type={InputType.text}
                onChange={(e) => {
                  const updatedTranslation = {
                    ...currentTranslation,
                    attributes: {
                      ...currentTranslation?.attributes,
                      language,
                      roomDescription: e.target.value,
                    },
                  };

                  const filteredTranslations =
                    translations?.filter(
                      (translation) => translation.attributes?.language !== language
                    ) || [];

                  setTranslations([...filteredTranslations, updatedTranslation]);
                }}
              />
            </FormItem>
          );
        })}
      </FormGrid>
    </FormContainer>
  );

  return {
    renderedForm,
    submit: async () => {
      if (!pristine) {
        try {
          const resp = await call<OfferUpdate>(category.api.update.factory, {
            id: entry.data.id,
            entry: {
              relations: {
                translations: translations.map((translation) => translation.attributes),
              },
            },
          });

          if (resp.status === 200) {
            mutate();
          }
        } catch (e) {
          console.error(e);
        }
      }
    },
    pristine,
    reset: () => undefined,
    valid: true,
    hint: false,
  };
};

const usePricingForm: EntryFormHook = ({ category, query }) => {
  const { entry, mutate } = useEntry<Offer, OfferShow>(category, query);
  const [attributes, setAttributes] = useState<Offer['data']['attributes']>();
  const call = useApiCall();
  const t = useT();
  const uid = usePseudoUID();

  const [attributesFromApi, setAttributesFromApi] = useState<Offer['data']['attributes']>();

  const initialAttributes = useMemo(() => entry?.data?.attributes, [entry?.data?.attributes]);

  const pristine = useMemo(
    () => JSON.stringify(attributes) === JSON.stringify(attributesFromApi),
    [attributes, attributesFromApi]
  );

  useEffect(() => {
    if (JSON.stringify(initialAttributes) !== JSON.stringify(attributesFromApi)) {
      setAttributesFromApi(initialAttributes);
      setAttributes(initialAttributes);
    }
  }, [initialAttributes, attributesFromApi]);

  const renderedForm = (
    <FormContainer>
      <EntryFormHead title={t('categories.offer.form.pricing.title') as string} />
      <FormGrid>
        <FormItem width={FormItemWidth.half}>
          <Checkbox
            label={t('categories.offer.form.pricing.hasFee') as string}
            checked={attributes?.hasFee}
            onChange={(e) => setAttributes({ ...attributes, hasFee: e.target.checked })}
            id={`${uid}-hasfee`}
          />
        </FormItem>
        <FormItem width={FormItemWidth.half}>
          <Checkbox
            label={t('categories.offer.form.pricing.needsRegistration') as string}
            checked={attributes?.needsRegistration}
            onChange={(e) => setAttributes({ ...attributes, needsRegistration: e.target.checked })}
            id={`${uid}-needsregistration`}
          />
        </FormItem>
        <FormItem width={FormItemWidth.full}>
          <Input
            type={InputType.url}
            label={t('categories.offer.form.pricing.ticketUrl') as string}
            value={attributes?.ticketUrl}
            onChange={(e) => setAttributes({ ...attributes, ticketUrl: e.target.value })}
          />
        </FormItem>
      </FormGrid>
    </FormContainer>
  );

  return {
    renderedForm,
    submit: async () => {
      if (!pristine) {
        try {
          const resp = await call<OfferUpdate>(category.api.update.factory, {
            id: entry.data.id,
            entry: {
              attributes,
            },
          });

          if (resp.status === 200) {
            mutate();
          }
        } catch (e) {
          console.error(e);
        }
      }
    },
    pristine,
    reset: () => undefined,
    valid: true,
    hint: false,
  };
};

const useOrganizerLocationForm: EntryFormHook = ({ category, query }, loaded) => {
  const { entry, mutate } = useEntry<Offer, OfferShow>(category, query);
  const [organizerId, setOrganizerId] = useState<string>();
  const [locationId, setLocationId] = useState<string>();
  const isMidOrWider = useBreakpointOrWider(Breakpoint.mid);
  const language = useLanguage();
  const call = useApiCall();
  const t = useT();
  const translation = getTranslation(language, entry?.data?.relations?.translations, true);

  const [organizerIdFromApi, setOrganizerIdFromApi] = useState<string>();
  const initialOrganizerId = useMemo(
    () => (entry?.data?.relations?.organizer as Organizer['data'])?.id,
    [entry?.data?.relations?.organizer]
  );

  const [locationIdFromApi, setLocationIdFromApi] = useState<string>();
  const initialLocationId = useMemo(
    () => (entry?.data?.relations?.location as Location['data'])?.id,
    [entry?.data?.relations?.location]
  );

  const pristine = useMemo(
    () => organizerId === organizerIdFromApi && locationId === locationIdFromApi,
    [organizerIdFromApi, organizerId, locationIdFromApi, locationId]
  );

  useEffect(() => {
    if (initialOrganizerId !== organizerIdFromApi) {
      setOrganizerIdFromApi(initialOrganizerId);
      setOrganizerId(initialOrganizerId);
    }
  }, [initialOrganizerId, organizerIdFromApi]);

  useEffect(() => {
    if (initialLocationId !== locationIdFromApi) {
      setLocationIdFromApi(initialLocationId);
      setLocationId(initialLocationId);
    }
  }, [initialLocationId, locationIdFromApi]);

  const renderedForm = (
    <EntryFormContainerColumns>
      <div>
        <EntryFormHead
          title={`${t('categories.offer.form.organizer.label')} (${t('forms.required')})`}
          hint={typeof organizerId === 'undefined'}
        />
        <FormGrid>
          <FormItem width={FormItemWidth.full}>
            <EntryPicker
              chooseText={t('categories.offer.form.organizer.choose') as string}
              editText={t('categories.offer.form.organizer.edit') as string}
              overlayTitle={
                t('categories.offer.form.organizer.title', {
                  name: translation?.attributes?.name,
                }) as string
              }
              value={organizerId}
              onChange={(value) => setOrganizerId(value)}
              categoryName={Categories.organizer}
              showHint={typeof organizerId === 'undefined'}
              list={
                <OrganizerList
                  expanded={isMidOrWider}
                  expandable={false}
                  enableUltraWideLayout={false}
                  activeEntryId={organizerId}
                />
              }
            />
          </FormItem>
        </FormGrid>
      </div>
      <div>
        <EntryFormHead
          title={t('categories.offer.form.location.label') as string}
          hint={typeof locationId === 'undefined'}
          showHintInline
        />
        <FormGrid>
          <FormItem width={FormItemWidth.full}>
            <EntryPicker
              chooseText={t('categories.offer.form.location.choose') as string}
              editText={t('categories.offer.form.location.edit') as string}
              overlayTitle={
                t('categories.offer.form.location.title', {
                  name: translation?.attributes?.name,
                }) as string
              }
              value={locationId}
              onChange={(value) => setLocationId(value)}
              categoryName={Categories.location}
              showHint={typeof locationId === 'undefined'}
              list={
                <LocationList
                  expanded={isMidOrWider}
                  expandable={false}
                  enableUltraWideLayout={false}
                  activeEntryId={locationId}
                />
              }
            />
          </FormItem>
        </FormGrid>
      </div>
    </EntryFormContainerColumns>
  );

  return {
    renderedForm,
    submit: async () => {
      if (!pristine) {
        try {
          const resp = await call<OfferUpdate>(category.api.update.factory, {
            id: entry.data.id,
            entry: {
              relations: {
                organizer: organizerId,
                location: locationId,
              },
            },
          });

          if (resp.status === 200) {
            mutate();
          }
        } catch (e) {
          console.error(e);
        }
      }
    },
    pristine,
    reset: () => undefined,
    valid: true,
    hint: false,
  };
};

export const OfferInfoPage: React.FC<CategoryEntryPage> = ({
  category,
  query,
}: CategoryEntryPage) => {
  const renderedEntryHeader = useEntryHeader({ category, query });
  const { entry } = useEntry<Offer, OfferShow>(category, query);

  const [loaded, setLoaded] = useState(false);
  const [valid, setValid] = useState(true);
  const { rendered } = useContext(WindowContext);
  const formattedDate = useSaveDate(entry);

  useEffect(() => {
    if (rendered && typeof entry !== 'undefined') {
      setTimeout(() => setLoaded(true), 150);
    }

    return () => {
      setLoaded(false);
    };
  }, [rendered, entry]);

  const {
    renderedForm: organizerLocationForm,
    submit: organizerLocationSubmit,
    pristine: organizerLocationPristine,
    reset: organizerLocationReset,
    valid: organizerLocationValid,
    hint: organizerLocationHint,
  } = useOrganizerLocationForm(
    {
      category,
      query,
    },
    loaded,
    valid
  );

  const {
    renderedForm: nameForm,
    submit: nameSubmit,
    pristine: namePristine,
    reset: nameReset,
    valid: nameValid,
    hint: nameHint,
  } = useNameForm(
    {
      category,
      query,
    },
    loaded,
    valid
  );

  const {
    renderedForm: descriptionForm,
    submit: descriptionSubmit,
    pristine: descriptionPristine,
    reset: descriptionReset,
    valid: descriptionValid,
    hint: descriptionHint,
  } = useDescriptionForm(
    {
      category,
      query,
    },
    loaded,
    valid
  );

  const {
    renderedForm: pricingForm,
    submit: pricingSubmit,
    pristine: pricingPristine,
    reset: pricingReset,
    valid: pricingValid,
    hint: pricingHint,
  } = usePricingForm(
    {
      category,
      query,
    },
    loaded,
    valid
  );

  const {
    renderedForm: roomForm,
    submit: roomSubmit,
    pristine: roomPristine,
    reset: roomReset,
    valid: roomValid,
    hint: roomHint,
  } = useRoomForm(
    {
      category,
      query,
    },
    loaded,
    valid
  );

  const {
    renderedForm: linksForm,
    submit: linksSubmit,
    pristine: linksPristine,
    reset: linksReset,
    valid: linksValid,
    hint: linksHint,
  } = useLinksForm(
    {
      category,
      query,
    },
    loaded,
    valid
  );

  const pristine = useMemo(
    () =>
      ![
        namePristine,
        organizerLocationPristine,
        // addressPristine,
        // linksPristine,
        // contactPristine,
        descriptionPristine,
        pricingPristine,
        roomPristine,
        linksPristine,
      ].includes(false),
    [
      namePristine,
      descriptionPristine,
      organizerLocationPristine,
      pricingPristine,
      roomPristine,
      linksPristine,
    ]
  );

  const hint = useMemo(
    () => nameHint || descriptionHint || organizerLocationHint,
    [nameHint, descriptionHint, organizerLocationHint]
  );

  return (
    <>
      {renderedEntryHeader}
      <div role="tabpanel">
        <div role="form" aria-invalid={!valid}>
          <Save
            onClick={async () => {
              nameSubmit();
              descriptionSubmit();
              organizerLocationSubmit();
              pricingSubmit();
              roomSubmit();
              linksSubmit();
              // addressSubmit();
              // linksSubmit();
              // contactSubmit();
            }}
            date={formattedDate}
            active={!pristine}
            valid={loaded === false || valid}
            hint={loaded === true && hint}
          />
          <EntryFormWrapper>
            <EntryFormContainer>{nameForm}</EntryFormContainer>
            <EntryFormContainer>{organizerLocationForm}</EntryFormContainer>
            <EntryFormContainer>{roomForm}</EntryFormContainer>
            <EntryFormContainer>{descriptionForm}</EntryFormContainer>
            <EntryFormContainer>{pricingForm}</EntryFormContainer>
            <EntryFormContainer>{linksForm}</EntryFormContainer>
            <EntryFormContainer></EntryFormContainer>
          </EntryFormWrapper>
        </div>
      </div>
    </>
  );
};
