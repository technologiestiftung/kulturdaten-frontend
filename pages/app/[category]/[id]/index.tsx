import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCategory } from '../../../../lib/categories';
import { AppWrapper } from '../../../../components/wrappers/AppWrapper';
import { TitleBar } from '../../../../components/navigation/TitleBar';

const EntryIndexPage: NextPage = () => {
  const router = useRouter();
  const category = useCategory();

  if (category) {
    return React.createElement(category?.pages.show, { category, query: router?.query });
  }

  const title = 'TBD';

  return <AppWrapper titleBar={<TitleBar title={title} />}>TBD</AppWrapper>;
};

export default EntryIndexPage;