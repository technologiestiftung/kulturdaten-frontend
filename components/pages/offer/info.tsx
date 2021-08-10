import { Language } from '../../../config/locale';
import { CategoryEntryPage } from '../../../lib/categories';
import { useT } from '../../../lib/i18n';
import { Button, ButtonColor } from '../../button';
import { EntryFormHead } from '../../EntryForm/EntryFormHead';
import { EntryFormContainer, EntryFormWrapper } from '../../EntryForm/wrappers';
import { useName } from '../helpers/form/Name';
import { FormGrid, FormItem, FormItemWidth } from '../helpers/formComponents';
import { EntryFormProps } from '../helpers/form';
import { Offer, OfferTranslation } from '../../../lib/api/types/offer';
import { OfferShow } from '../../../lib/api/routes/offer/show';
import { OfferTranslationCreate } from '../../../lib/api/routes/offer/translation/create';

const NameForm: React.FC<EntryFormProps> = ({ category, query }: EntryFormProps) => {
  const t = useT();

  const {
    form: setNameGerman,
    onSubmit: onSubmitGerman,
    pristine: pristineGerman,
    reset: resetGerman,
  } = useName<Offer, OfferShow, OfferTranslation, OfferTranslationCreate>({
    category,
    query,
    language: Language.de,
    label: t('categories.location.form.nameGerman') as string,
  });

  const {
    form: setNameEnglish,
    onSubmit: onSubmitEnglish,
    pristine: pristineEnglish,
    reset: resetEnglish,
  } = useName<Offer, OfferShow, OfferTranslation, OfferTranslationCreate>({
    category,
    query,
    language: Language.en,
    label: t('categories.location.form.nameEnglish') as string,
  });

  return (
    <div>
      <EntryFormHead
        title={t('categories.location.form.name') as string}
        actions={[
          <Button
            key={0}
            onClick={() => {
              resetGerman();
              resetEnglish();
            }}
            disabled={pristineEnglish && pristineGerman}
            icon="XOctagon"
            color={ButtonColor.yellow}
          >
            {t('categories.location.form.editCancel')}
          </Button>,
          <Button
            key={1}
            icon="CheckSquare"
            color={ButtonColor.green}
            onClick={() => {
              onSubmitEnglish();
              onSubmitGerman();
            }}
            disabled={pristineEnglish && pristineGerman}
          >
            {t('categories.location.form.save')}
          </Button>,
        ]}
      />
      <FormGrid>
        <FormItem width={FormItemWidth.half}>{setNameGerman}</FormItem>
        <FormItem width={FormItemWidth.half}>{setNameEnglish}</FormItem>
      </FormGrid>
    </div>
  );
};

// const StyledDescriptionForm = styled.div`
//   padding: 0 0 1.5rem;
// `;

// const DescriptionForm: React.FC<EntryFormProps> = ({ category, query }: EntryFormProps) => {
//   const t = useT();

//   return (
//     <StyledDescriptionForm>
//       <EntryFormHead title={t('categories.organizer.form.description') as string} />
//       <Description
//         category={category}
//         query={query}
//         language={Language.de}
//         title={t('categories.organizer.form.descriptionGerman') as string}
//       />
//       <Description
//         category={category}
//         query={query}
//         language={Language.en}
//         title={t('categories.organizer.form.descriptionEnglish') as string}
//       />
//     </StyledDescriptionForm>
//   );
// };

// const LinksForm: React.FC<EntryFormProps> = ({ category, query }: EntryFormProps) => {
//   const t = useT();
//   const call = useApiCall();
//   const { entry, mutate } = useEntry<Organizer, OrganizerShow>(category, query);
//   const mutateList = useMutateList(category);

//   const initialLinks = useMemo(
//     () => entry?.data?.relations?.links?.map((link) => link.attributes?.url),
//     [entry?.data?.relations?.links]
//   );

//   const [links, setLinks] = useState<string[]>(initialLinks);

//   const [linksFromApi, setLinksFromApi] = useState<string[]>();

//   const pristine = useMemo(
//     () =>
//       links === initialLinks ||
//       (Array.isArray(links) &&
//         Array.isArray(initialLinks) &&
//         links.length === initialLinks.length &&
//         links.reduce((allLinksEqual, link, index) => {
//           if (link !== initialLinks[index]) {
//             return false;
//           }
//           return allLinksEqual;
//         }, true)),
//     [links, initialLinks]
//   );

//   const { renderedLinkList, init } = useLinkList({
//     links: links || [],
//     onChange: (updatedLinks) => {
//       setLinks(updatedLinks);
//     },
//     maxLinks: 20,
//   });

//   useEffect(() => {
//     if (initialLinks !== linksFromApi) {
//       setLinksFromApi(initialLinks);
//       setLinks(initialLinks);
//       init(initialLinks);
//     }
//   }, [init, linksFromApi, initialLinks]);

//   return (
//     <StyledDescriptionForm>
//       <EntryFormHead
//         title={t('categories.organizer.form.links') as string}
//         actions={[
//           <Button
//             key={0}
//             onClick={(e) => {
//               e.stopPropagation();
//               e.preventDefault();
//               init(linksFromApi);
//             }}
//             icon="XOctagon"
//             color={ButtonColor.yellow}
//             disabled={pristine}
//           >
//             {t('categories.organizer.form.editCancel')}
//           </Button>,
//           <Button
//             key={1}
//             icon="CheckSquare"
//             color={ButtonColor.green}
//             disabled={pristine}
//             onClick={async (e) => {
//               e.preventDefault();

//               try {
//                 const resp = await call<OrganizerUpdate>(category.api.update.factory, {
//                   id: entry.data.id,
//                   organizer: {
//                     relations: {
//                       links,
//                     },
//                   },
//                 });

//                 if (resp.status === 200) {
//                   mutate();
//                   mutateList();
//                 }
//               } catch (e) {
//                 console.error(e);
//               }
//             }}
//           >
//             {t('categories.organizer.form.save')}
//           </Button>,
//         ]}
//       />
//       <FormGrid>
//         <FormItem width={FormItemWidth.full}>{renderedLinkList}</FormItem>
//       </FormGrid>
//     </StyledDescriptionForm>
//   );
// };

// const ContactForm: React.FC<EntryFormProps> = ({ category, query }: EntryFormProps) => {
//   const { entry, mutate } = useEntry<Organizer, OrganizerShow>(category, query);
//   const call = useApiCall();
//   const mutateList = useMutateList(category);

//   const initialAttributes = useMemo(() => entry?.data?.attributes, [entry?.data?.attributes]);

//   const [attributes, setAttributes] = useState<Organizer['data']['attributes']>(initialAttributes);
//   const [pristine, setPristine] = useState(true);

//   useEffect(() => {
//     if (pristine) {
//       setAttributes(initialAttributes);
//     }
//   }, [pristine, initialAttributes]);

//   const t = useT();

//   return (
//     <form
//       onSubmit={async (e) => {
//         e.preventDefault();

//         try {
//           const resp = await call<OrganizerUpdate>(category.api.update.factory, {
//             id: entry.data.id,
//             organizer: {
//               attributes: {
//                 email: attributes?.email,
//                 homepage: attributes?.homepage,
//                 phone: attributes?.phone,
//               },
//             },
//           });

//           if (resp.status === 200) {
//             mutate();
//             mutateList();
//             setTimeout(() => setPristine(true), 500);
//           }
//         } catch (e) {
//           console.error(e);
//         }
//       }}
//     >
//       <EntryFormHead
//         title={t('categories.organizer.form.contact') as string}
//         actions={[
//           <Button
//             key={0}
//             onClick={(e) => {
//               e.stopPropagation();
//               e.preventDefault();
//               setAttributes(initialAttributes);
//               setPristine(true);
//             }}
//             icon="XOctagon"
//             color={ButtonColor.yellow}
//             disabled={pristine}
//           >
//             {t('categories.organizer.form.editCancel')}
//           </Button>,
//           <Button
//             key={1}
//             type={ButtonType.submit}
//             icon="CheckSquare"
//             color={ButtonColor.green}
//             disabled={pristine}
//           >
//             {t('categories.organizer.form.save')}
//           </Button>,
//         ]}
//       />
//       <FormGrid>
//         <FormItem width={FormItemWidth.half}>
//           <Input
//             label={t('categories.organizer.form.email') as string}
//             type={InputType.email}
//             value={attributes?.email || ''}
//             onChange={(e) => {
//               setPristine(false);
//               setAttributes({
//                 ...attributes,
//                 email: e.target.value,
//               });
//             }}
//           />
//         </FormItem>
//         <FormItem width={FormItemWidth.half}>
//           <Input
//             label={t('categories.organizer.form.tel') as string}
//             type={InputType.tel}
//             value={attributes?.phone || ''}
//             onChange={(e) => {
//               setPristine(false);
//               setAttributes({
//                 ...attributes,
//                 phone: e.target.value,
//               });
//             }}
//           />
//         </FormItem>
//         <FormItem width={FormItemWidth.full}>
//           <Input
//             label={t('categories.organizer.form.website') as string}
//             type={InputType.url}
//             value={attributes?.homepage || ''}
//             onChange={(e) => {
//               setPristine(false);
//               setAttributes({
//                 ...attributes,
//                 homepage: e.target.value,
//               });
//             }}
//           />
//         </FormItem>
//       </FormGrid>
//     </form>
//   );
// };

export const OfferInfoPage: React.FC<CategoryEntryPage> = ({
  category,
  query,
}: CategoryEntryPage) => {
  return (
    <EntryFormWrapper>
      <EntryFormContainer>
        <NameForm category={category} query={query} />
      </EntryFormContainer>
    </EntryFormWrapper>
  );
};