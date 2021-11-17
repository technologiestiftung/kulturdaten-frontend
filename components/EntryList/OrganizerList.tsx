import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useContext, useEffect, useMemo, useState } from 'react';
import { EntryListPlaceholder, StyledEntryListBody } from '.';
import { Categories, useCategories } from '../../config/categories';
import { OrganizerList as OrganizerListCall } from '../../lib/api';
import {
  Organizer,
  OrganizerSubjectTranslation,
  OrganizerTranslation,
  OrganizerTypeTranslation,
} from '../../lib/api/types/organizer';
import { Order, useList, useOrganizerTypeList } from '../../lib/categories';
import { useT } from '../../lib/i18n';
import { Routes, routes, useLanguage, useLocale } from '../../lib/routing';
import { getTranslation } from '../../lib/translations';
import { usePseudoUID } from '../../lib/uid';
import { NavigationContext } from '../navigation/NavigationContext';
import { Select } from '../select';
import { EntryListHead } from './EntryListHead';
import { EntryListPagination } from './EntryListPagination';
import { EntryCardGrid } from './EntryCard';
import { RadioSwitch } from '../RadioSwitch';
import { EntryListContext, FiltersActions } from './EntryListContext';
import { Table, TableProps } from '../table';
import { StatusFlag } from '../Status/StatusFlag';
import { DateFormat, useDate } from '../../lib/date';
import { StyledTableLinkText, TableLink } from '../table/TableLink';
import { EntryListFiltersBox, StyledFilters } from './EntryListFiltersBox';
import { mq } from '../globals/Constants';
import { Breakpoint } from '../../lib/WindowService';

const StyledOrganizerList = styled.div`
  flex-grow: 1;
  min-height: 100%;
  background: var(--white);

  ${mq(Breakpoint.mid)} {
    border: 1px solid var(--grey-400);
    border-radius: 0.75rem;
    overflow: hidden;
  }
`;

const StyledEntryListTable = styled.div`
  padding: 0 0 1.5rem;
`;

interface ListLinkProps {
  children: React.ReactNode;
}

export interface OrganizerListProps {
  expanded: boolean;
  expandable?: boolean;
  enableUltraWideLayout?: boolean;
  customEntryOnClick?: (categoryName: Categories, entryId: string) => void;
  activeEntryId?: string;
  title?: string;
}

export const OrganizerList: React.FC<OrganizerListProps> = ({
  expanded,
  expandable = true,
  enableUltraWideLayout = true,
  customEntryOnClick,
  activeEntryId,
  title,
}: OrganizerListProps) => {
  const categories = useCategories();
  const [lastPage, setLastPage] = useState<number>();
  const [totalEntries, setTotalEntries] = useState<number>();
  const router = useRouter();
  const locale = useLocale();
  const language = useLanguage();
  const t = useT();
  const { setMenuExpanded } = useContext(NavigationContext);
  const {
    getCurrentPage,
    setCurrentPage,
    getSortKey,
    setSortKey,
    getOrder,
    setOrder,
    getFilters,
    getDispatchFilters,
    getFiltersBoxExpanded,
    setFiltersBoxExpanded,
    setLastEntryId,
  } = useContext(EntryListContext);
  const pseudoUID = usePseudoUID();

  const typeOptions = useOrganizerTypeList();

  const listName = Categories.organizer;
  const filters = useMemo(() => getFilters(listName), [getFilters, listName]);
  const currentPage = useMemo(() => getCurrentPage(listName), [getCurrentPage, listName]);
  const entriesPerPage = 20;
  const sortKey = useMemo(() => getSortKey(listName), [getSortKey, listName]);
  const order = useMemo(() => getOrder(listName), [getOrder, listName]);
  const filtersBoxExpanded = useMemo(
    () => getFiltersBoxExpanded(listName),
    [getFiltersBoxExpanded, listName]
  );
  const dispatchFilters = useMemo(
    () => getDispatchFilters(listName),
    [getDispatchFilters, listName]
  );

  const list = useList<OrganizerListCall, Organizer>(
    categories.organizer,
    currentPage,
    entriesPerPage,
    Object.entries(filters),
    { key: sortKey, order }
  );

  const activeFiltersCount = useMemo(
    () =>
      Object.values(filters)?.filter(
        (filter) => filter && filter[0] !== undefined && filter[0] !== ''
      ).length,
    [filters]
  );

  useEffect(() => {
    const lastPageFromApi = list?.meta?.pages?.lastPage;

    if (lastPageFromApi) {
      setLastPage(lastPageFromApi);
    }
  }, [list?.meta?.pages?.lastPage]);

  useEffect(() => {
    const totalEntriesFromApi = list?.meta?.pages?.total;

    if (totalEntriesFromApi) {
      setTotalEntries(totalEntriesFromApi);
    }
  }, [list?.meta?.pages?.total]);

  const date = useDate();

  const rows: TableProps['content'] = useMemo(
    () =>
      list?.data
        ? Object.values(Array.isArray(list.data) ? list.data : [list.data]).map(
            ({ attributes, relations, id }) => {
              const translations = relations?.translations;

              const currentTranslation = translations
                ? getTranslation<OrganizerTranslation>(language, translations)
                : undefined;

              const typeNames = relations?.types?.map((type) => {
                const typeTranslation = getTranslation<OrganizerTypeTranslation>(
                  language,
                  type.relations.translations
                );
                return typeTranslation?.attributes.name;
              });

              const subjectNames = relations?.subjects?.map((subject) => {
                const subjectTranslation = getTranslation<OrganizerSubjectTranslation>(
                  language,
                  subject.relations.translations
                );
                return subjectTranslation?.attributes.name;
              });

              const href = (sub?: string) =>
                routes[Routes.organizer]({
                  locale,
                  query: { organizer: id, sub },
                });

              const ListLink: React.FC<ListLinkProps> = ({ children }: ListLinkProps) => (
                <TableLink
                  onClick={() => {
                    setMenuExpanded(false);
                    setLastEntryId(Categories.organizer, id);

                    if (typeof customEntryOnClick === 'function') {
                      customEntryOnClick(Categories.organizer, id);
                    }
                  }}
                  href={typeof customEntryOnClick === 'undefined' ? href('info') : undefined}
                  isActive={router.asPath.includes(href()) || activeEntryId === id}
                >
                  {children}
                </TableLink>
              );

              return {
                contents: [
                  <StyledTableLinkText key={0}>
                    {currentTranslation?.attributes?.name}
                  </StyledTableLinkText>,
                  typeNames.join(', '),
                  subjectNames.join(', '),
                  <StatusFlag status={attributes?.status} key={1} />,
                  attributes?.updatedAt
                    ? date(new Date(attributes?.updatedAt), DateFormat.date)
                    : undefined,
                  attributes?.createdAt
                    ? date(new Date(attributes?.createdAt), DateFormat.date)
                    : undefined,
                ].slice(0, !expanded ? 2 : undefined),
                Wrapper: ListLink,
              };
            }
          )
        : undefined,
    [
      activeEntryId,
      list.data,
      language,
      date,
      expanded,
      locale,
      router.asPath,
      setMenuExpanded,
      setLastEntryId,
      customEntryOnClick,
    ]
  );

  return (
    <StyledOrganizerList>
      {title && (
        <EntryListHead
          title={title}
          expanded={expanded}
          setExpanded={setMenuExpanded}
          expandable={expandable}
        />
      )}
      <EntryListFiltersBox
        isCollapsed={filtersBoxExpanded}
        setIsCollapsed={(collapsed: boolean) => setFiltersBoxExpanded(listName, collapsed)}
        expanded={expanded}
        activeFiltersCount={activeFiltersCount}
      >
        <StyledFilters expanded={expanded}>
          <Select
            label={t('categories.organizer.filters.type.label') as string}
            id={`entry-filter-type-${pseudoUID}`}
            value={filters?.type}
            onChange={(e) => {
              setCurrentPage(listName, 1);
              dispatchFilters({
                type: FiltersActions.set,
                payload: { key: 'type', value: e.target.value !== '' ? e.target.value : undefined },
              });

              dispatchFilters({
                type: FiltersActions.set,
                payload: { key: 'subject', value: undefined },
              });
            }}
          >
            <option value="">{t('categories.organizer.filters.type.all')}</option>
            {typeOptions?.map(({ id, relations }, index) => {
              const typeTranslation = getTranslation<OrganizerTypeTranslation>(
                language,
                relations.translations
              );

              return (
                <option key={index} value={String(id)}>
                  {typeTranslation?.attributes?.name}
                </option>
              );
            })}
          </Select>
          <Select
            label={t('categories.organizer.filters.subject.label') as string}
            id={`entry-filter-subject-${pseudoUID}`}
            value={filters?.subject}
            disabled={!filters?.type}
            onChange={(e) => {
              setCurrentPage(listName, 1);
              dispatchFilters({
                type: FiltersActions.set,
                payload: {
                  key: 'subject',
                  value: e.target.value !== '' ? e.target.value : undefined,
                },
              });
            }}
          >
            <option value="">
              {!filters?.type
                ? t('categories.organizer.filters.subject.typeFirst')
                : t('categories.organizer.filters.subject.all')}
            </option>
            {typeOptions
              ?.filter((typeOption) => typeOption.id === parseInt(filters?.type, 10))
              .map(({ relations }) => {
                const subjects = relations?.subjects?.map(
                  ({ relations: subjectRelations, id: subjectId }, index) => {
                    const subjectTranslation = getTranslation<OrganizerSubjectTranslation>(
                      language,
                      subjectRelations?.translations
                    );
                    return (
                      <option key={index} value={String(subjectId)}>
                        {subjectTranslation?.attributes?.name}
                      </option>
                    );
                  }
                );

                return subjects;
              })}
          </Select>
          <Select
            label={t('categories.organizer.filters.status.label') as string}
            id={`entry-filter-status-${pseudoUID}`}
            value={filters?.status}
            onChange={(e) => {
              setCurrentPage(listName, 1);
              dispatchFilters({
                type: FiltersActions.set,
                payload: {
                  key: 'status',
                  value: e.target.value !== '' ? e.target.value : undefined,
                },
              });
            }}
          >
            <option value="">{t('categories.organizer.filters.status.all')}</option>
            <option value="published">{t('categories.organizer.filters.status.published')}</option>
            <option value="draft">{t('categories.organizer.filters.status.draft')}</option>
          </Select>
        </StyledFilters>

        {!expanded && (
          <StyledFilters expanded={expanded}>
            <Select
              id={`entry-sort-${pseudoUID}`}
              label={t('general.sort') as string}
              onChange={(e) => {
                setCurrentPage(listName, 1);
                setSortKey(listName, e.target.value);
              }}
              value={sortKey}
            >
              <option value="updatedAt">{t('categories.organizer.sort.updated')}</option>
              <option value="createdAt">{t('categories.organizer.sort.created')}</option>
              <option value="name">{t('categories.organizer.sort.name')}</option>
            </Select>
            <RadioSwitch
              value={order}
              name={`entry-order-${pseudoUID}`}
              onChange={(value) => {
                setCurrentPage(listName, 1);
                setOrder(listName, value as Order);
              }}
              options={[
                {
                  value: Order.ASC,
                  label: t('general.ascending') as string,
                  ariaLabel: t('general.ascendingAriaLabel') as string,
                  icon: 'ArrowUp',
                },
                {
                  value: Order.DESC,
                  label: t('general.descending') as string,
                  ariaLabel: t('general.descendingAriaLabel') as string,
                  icon: 'ArrowDown',
                },
              ]}
            />
          </StyledFilters>
        )}
      </EntryListFiltersBox>
      <StyledEntryListBody>
        <StyledEntryListTable>
          {rows && rows.length > 0 ? (
            <Table
              columns={[
                {
                  title: t('forms.name') as string,
                  bold: true,
                  width: 5,
                  sort: {
                    order,
                    onClick: () => {
                      if (sortKey === 'name') {
                        setOrder(listName, order === Order.ASC ? Order.DESC : Order.ASC);
                      }
                      setCurrentPage(listName, 1);
                      setSortKey(listName, 'name');
                    },
                    active: sortKey === 'name',
                  },
                },
                { title: t('forms.type') as string, width: 4 },
                { title: t('forms.subjects') as string, width: 4 },
                { title: t('statusBar.status') as string, width: 3 },
                {
                  title: t('categories.organizer.table.updated') as string,
                  width: 2,
                  sort: {
                    order,
                    onClick: () => {
                      if (sortKey === 'updatedAt') {
                        setOrder(listName, order === Order.ASC ? Order.DESC : Order.ASC);
                      }
                      setCurrentPage(listName, 1);
                      setSortKey(listName, 'updatedAt');
                    },
                    active: sortKey === 'updatedAt',
                  },
                },
                {
                  title: t('categories.organizer.table.created') as string,
                  width: 2,
                  sort: {
                    order,
                    onClick: () => {
                      if (sortKey === 'createdAt') {
                        setOrder(listName, order === Order.ASC ? Order.DESC : Order.ASC);
                      }
                      setCurrentPage(listName, 1);
                      setSortKey(listName, 'createdAt');
                    },
                    active: sortKey === 'createdAt',
                  },
                },
              ].slice(0, !expanded ? 2 : undefined)}
              content={rows}
              narrow={!expanded}
            />
          ) : rows && rows.length === 0 ? (
            <EntryCardGrid expanded={expanded} enableUltraWideLayout={enableUltraWideLayout}>
              <EntryListPlaceholder>
                {activeFiltersCount === 0
                  ? t('categories.organizer.list.nothing')
                  : t('categories.organizer.list.nothingFilter')}
              </EntryListPlaceholder>
            </EntryCardGrid>
          ) : (
            <EntryCardGrid expanded={expanded} enableUltraWideLayout={enableUltraWideLayout}>
              <EntryListPlaceholder>{t('categories.organizer.list.loading')}</EntryListPlaceholder>
            </EntryCardGrid>
          )}
        </StyledEntryListTable>

        {lastPage > 1 && (
          <EntryListPagination
            currentPage={currentPage}
            lastPage={lastPage}
            totalEntries={totalEntries}
            entriesPerPage={entriesPerPage}
            nextPage={() =>
              currentPage < lastPage ? setCurrentPage(listName, currentPage + 1) : undefined
            }
            previousPage={() =>
              currentPage > 1 ? setCurrentPage(listName, currentPage - 1) : undefined
            }
            goToPage={(index: number) =>
              index <= lastPage ? setCurrentPage(listName, index) : undefined
            }
            expanded={expanded}
          />
        )}
      </StyledEntryListBody>
    </StyledOrganizerList>
  );
};
