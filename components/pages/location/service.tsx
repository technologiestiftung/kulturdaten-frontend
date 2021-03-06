import { CategoryEntryPage, useEntry } from '../../../lib/categories';
import { useEntryHeader } from '../helpers/useEntryHeader';
import { EntryFormWrapper } from '../../EntryForm/wrappers';
import { locationService } from '../../../config/service';
import {
  genericFormActionInit,
  GenericFormState,
  useGenericFormStructure,
} from '../../GenericForm/useGenericFormStructure';
import { EntryFormHook } from '../helpers/form';
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { WindowContext } from '../../../lib/WindowService';
import { useSaveDate } from '../helpers/useSaveDate';
import { Location } from '../../../lib/api/types/location';
import { LocationShow } from '../../../lib/api/routes/location/show';
import { Save } from '../../EntryForm/Save';
import { ServiceField } from '../../../lib/api/types/service';
import { useApiCall } from '../../../lib/api';
import {
  LocationServiceUpdate,
  locationServiceUpdateFactory,
} from '../../../lib/api/routes/location/service/update';
import { useConfirmExit } from '../../../lib/useConfirmExit';
import { useT } from '../../../lib/i18n';
import { usePublish } from '../../Publish';

const useServiceForm: EntryFormHook = ({ category, query }) => {
  const { entry, mutate } = useEntry<Location, LocationShow>(category, query);
  const { renderedForm, state, dispatch } = useGenericFormStructure(locationService, {});
  const call = useApiCall();
  const formRef = useRef<HTMLFormElement>(null);
  const [valid, setValid] = useState(true);

  const initialServiceFields = useMemo(
    () => entry?.data?.relations?.service?.relations?.fields,
    [entry?.data?.relations?.service?.relations?.fields]
  );
  const [serviceFromApi, setServiceFromApi] = useState<ServiceField[]>([]);

  const serviceFieldsState = useMemo(
    () =>
      state
        ? Object.entries(state as GenericFormState).map<ServiceField>(([key, value]) => {
            const type =
              typeof value === 'number'
                ? 'number'
                : typeof value === 'string'
                ? 'string'
                : typeof value === 'boolean'
                ? 'boolean'
                : Array.isArray(value)
                ? 'string'
                : 'string';

            return {
              attributes: {
                type,
                key,
                value: String(value),
              },
            };
          })
        : [],
    [state]
  );

  useEffect(() => {
    if (
      initialServiceFields &&
      JSON.stringify(initialServiceFields) !== JSON.stringify(serviceFromApi)
    ) {
      setServiceFromApi(initialServiceFields);

      dispatch(
        genericFormActionInit(
          initialServiceFields.reduce((combined, field) => {
            return {
              ...combined,
              [field.attributes.key]: field.attributes.value,
            };
          }, {})
        )
      );
    }
  }, [serviceFromApi, dispatch, initialServiceFields]);

  useEffect(() => {
    if (serviceFieldsState) {
      setValid(formRef?.current ? formRef?.current?.checkValidity() : true);
    }
  }, [serviceFieldsState]);

  const pristine = useMemo(
    () =>
      JSON.stringify(
        serviceFromApi
          .map((field) => ({
            attributes: {
              key: field.attributes.key,
              value: field.attributes.value,
            },
          }))
          .sort((a, b) => {
            if (a.attributes.key > b.attributes.key) {
              return 1;
            } else if (a.attributes.key > b.attributes.key) {
              return -1;
            }
            return 0;
          })
      ) ===
      JSON.stringify(
        serviceFieldsState
          .map((field) => ({
            attributes: {
              key: field.attributes.key,
              value: field.attributes.value,
            },
          }))
          .sort((a, b) => {
            if (a.attributes.key > b.attributes.key) {
              return 1;
            } else if (a.attributes.key > b.attributes.key) {
              return -1;
            }
            return 0;
          })
      ),
    [serviceFieldsState, serviceFromApi]
  );

  return {
    renderedForm: (
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <EntryFormWrapper>{renderedForm}</EntryFormWrapper>
      </form>
    ),
    submit: async () => {
      if (valid && !pristine) {
        try {
          const resp = await call<LocationServiceUpdate>(locationServiceUpdateFactory, {
            id: entry.data.id,
            entry: {
              relations: {
                fields: serviceFieldsState,
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
    valid,
    reset: () => undefined,
    state,
  };
};

export const LocationServicePage: React.FC<CategoryEntryPage> = ({
  category,
  query,
}: CategoryEntryPage) => {
  const renderedEntryHeader = useEntryHeader({ category, query });
  const { entry } = useEntry<Location, LocationShow>(category, query);
  const [loaded, setLoaded] = useState(false);
  const { rendered } = useContext(WindowContext);
  const formattedDate = useSaveDate(entry);
  const t = useT();

  const { renderedForm, valid, submit, pristine, reset } = useServiceForm({
    category,
    query,
    loaded,
  });

  useEffect(() => {
    if (rendered && typeof entry !== 'undefined') {
      setTimeout(() => setLoaded(true), 150);
    }

    return () => {
      setLoaded(false);
    };
  }, [rendered, entry]);

  const message = t('save.confirmExit') as string;

  const shouldWarn = useMemo(
    () => !pristine && typeof entry?.data !== 'undefined',
    [pristine, entry?.data]
  );

  useConfirmExit(shouldWarn, message, () => {
    reset();
  });

  const onSave = useCallback(async () => {
    submit();
  }, [submit]);

  const { renderedPublish } = usePublish({
    category,
    query,
    onPublish: onSave,
  });

  return (
    <>
      {renderedPublish}
      {renderedEntryHeader}
      <div role="tabpanel">
        <div role="form">
          <Save
            onClick={onSave}
            date={formattedDate}
            active={!pristine}
            valid={loaded === false || valid}
          />

          {renderedForm}
        </div>
      </div>
    </>
  );
};
