import React, { useEffect, useMemo, useState } from 'react';
import { Categories } from '../../../../config/categories';
import { ApiCall, useApiCall } from '../../../../lib/api';
import { Address } from '../../../../lib/api/types/address';
import { CategoryEntry, PublishedStatus } from '../../../../lib/api/types/general';
import { useDistrictList, useEntry, useMutateList } from '../../../../lib/categories';
import { useT } from '../../../../lib/i18n';
import { usePseudoUID } from '../../../../lib/uid';
import { useOrganizerId } from '../../../../lib/useOrganizer';
import { EntryFormHead } from '../../../EntryForm/EntryFormHead';
import { Input, InputType } from '../../../input';
import { Select, SelectSize } from '../../../select';
import { EntryFormHook, EntryFormHookProps } from '../form';
import { FormGrid, FormItem, FormItemWidth, FormWrapper } from '../formComponents';

const Berlin = 'berlin';

interface AddressFormHookProps extends EntryFormHookProps {
  customRequired?: boolean;
  district?: boolean;
}

export const useAddressForm: EntryFormHook<AddressFormHookProps> = ({
  category,
  query,
  loaded,
  tooltip,
  customRequired,
  title,
  district,
  id,
}) => {
  const uid = usePseudoUID();
  const { entry, mutate } = useEntry<
    {
      data: {
        relations: {
          address: Address;
        } & CategoryEntry['data']['relations'];
      } & CategoryEntry['data'];
    } & CategoryEntry,
    ApiCall
  >(category, query);
  const call = useApiCall();

  const initialAddress = useMemo(
    () => entry?.data?.relations?.address,
    [entry?.data?.relations?.address]
  );

  const organizerId = useOrganizerId();
  const [address, setAddress] = useState<Address>(initialAddress);
  const [addressFromApi, setAddressFromApi] = useState<Address>(initialAddress);
  const districtList = useDistrictList();
  const mutateList = useMutateList(
    category,
    category.name === Categories.location
      ? [['organizer', organizerId]]
      : category.name === Categories.offer
      ? [['organizers', organizerId]]
      : undefined
  );

  const required = useMemo(
    () =>
      typeof customRequired !== 'undefined'
        ? customRequired
        : entry?.data?.attributes?.status === PublishedStatus.published,
    [entry?.data?.attributes?.status, customRequired]
  );

  const softRequired = useMemo(
    () => (typeof customRequired !== 'undefined' ? customRequired : true),
    [customRequired]
  );

  const isInBerlin = useMemo(
    () => address?.attributes?.city?.trim().toLowerCase() === Berlin,
    [address?.attributes?.city]
  );

  useEffect(() => {
    if (JSON.stringify(initialAddress) !== JSON.stringify(addressFromApi)) {
      setAddress(initialAddress);
      setAddressFromApi(initialAddress);
    }
  }, [addressFromApi, initialAddress]);

  const pristine = useMemo(
    () => JSON.stringify(address) === JSON.stringify(addressFromApi),
    [address, addressFromApi]
  );

  const t = useT();

  const valid = useMemo(
    () =>
      !loaded ||
      !required ||
      (address?.attributes?.street1?.length > 0 &&
        address?.attributes?.zipCode?.length > 0 &&
        (district ? address?.attributes?.district?.length > 0 : true) &&
        address?.attributes?.city?.length > 0),
    [
      loaded,
      address?.attributes?.city?.length,
      address?.attributes?.street1?.length,
      address?.attributes?.district?.length,
      address?.attributes?.zipCode?.length,
      required,
      district,
    ]
  );

  const fulfilled = useMemo(
    () =>
      !softRequired ||
      (address?.attributes?.street1?.length > 0 &&
        address?.attributes?.zipCode?.length > 0 &&
        (district ? address?.attributes?.district?.length > 0 : true) &&
        address?.attributes?.city?.length > 0),
    [
      softRequired,
      address?.attributes?.city?.length,
      address?.attributes?.street1?.length,
      address?.attributes?.district?.length,
      address?.attributes?.zipCode?.length,
      district,
    ]
  );

  return {
    renderedForm: (
      <form
        onSubmit={async (e) => {
          e.preventDefault();
        }}
      >
        <FormWrapper
          requirement={
            softRequired
              ? {
                  fulfilled,
                }
              : undefined
          }
        >
          <EntryFormHead
            title={`${title || (t('forms.address') as string)}`}
            tooltip={tooltip}
            id={id}
          />
          <FormGrid>
            <FormItem width={FormItemWidth.half}>
              <Input
                label={t('forms.street1') as string}
                type={InputType.text}
                value={address?.attributes?.street1 || ''}
                onChange={(e) => {
                  setAddress({
                    ...address,
                    attributes: {
                      ...address?.attributes,
                      street1: e.target.value,
                    },
                  });
                }}
                required={required}
                softRequired={softRequired}
              />
            </FormItem>
            <FormItem width={FormItemWidth.half}>
              <Input
                label={t('forms.street2') as string}
                type={InputType.text}
                value={address?.attributes?.street2 || ''}
                onChange={(e) => {
                  setAddress({
                    ...address,
                    attributes: {
                      ...address?.attributes,
                      street2: e.target.value,
                    },
                  });
                }}
              />
            </FormItem>
            <FormItem width={FormItemWidth.quarter}>
              <Input
                label={t('forms.zipCode') as string}
                type={InputType.text}
                value={address?.attributes?.zipCode || ''}
                onChange={(e) => {
                  setAddress({
                    ...address,
                    attributes: {
                      ...address?.attributes,
                      zipCode: e.target.value,
                    },
                  });
                }}
                required={required}
                softRequired={softRequired}
              />
            </FormItem>
            <FormItem width={FormItemWidth.quarter} alignSelf="flex-end">
              <Input
                label={t('forms.city') as string}
                type={InputType.text}
                value={address?.attributes?.city || ''}
                onChange={(e) => {
                  setAddress({
                    ...address,
                    attributes: {
                      ...address?.attributes,
                      city: e.target.value,
                      district:
                        e.target.value.trim().toLowerCase() !== Berlin
                          ? ' '
                          : address?.attributes?.district,
                    },
                  });
                }}
                required={required}
                softRequired={softRequired}
              />
            </FormItem>
            {district && (
              <>
                <FormItem width={FormItemWidth.half} alignSelf="flex-end">
                  <Select
                    value={
                      address?.attributes?.district?.length > 1
                        ? address?.attributes?.district
                        : 'undefined'
                    }
                    id={`${uid}-district`}
                    label={t('categories.location.form.district') as string}
                    size={SelectSize.big}
                    required={required}
                    disabled={!isInBerlin && address?.attributes?.city !== Berlin}
                    onChange={(e) => {
                      setAddress({
                        ...address,
                        attributes: {
                          ...address?.attributes,
                          district: e.target.value !== 'undefined' ? e.target.value : ' ',
                        },
                      });
                    }}
                  >
                    <option value="undefined">
                      {t('categories.location.form.districtPlaceholder')}
                    </option>
                    {districtList?.map((district, index) => (
                      <option value={district.attributes.name} key={index}>
                        {district.attributes.name}
                      </option>
                    ))}
                  </Select>
                </FormItem>
              </>
            )}
          </FormGrid>
        </FormWrapper>
      </form>
    ),
    submit: async () => {
      if (valid && !pristine) {
        try {
          const resp = await call(category.api.update.factory, {
            id: entry.data.id,
            entry: {
              relations: {
                address,
              },
            },
          });

          if (resp.status === 200) {
            mutate();

            if (category.name === Categories.location) {
              mutateList();
            }
          }
        } catch (e) {
          console.error(e);
        }
      }
    },
    pristine,
    reset: () => {
      setAddress(initialAddress);
    },
    valid,
    requirementFulfillment: {
      requirementKey: 'address',
      fulfilled,
    },
  };
};
