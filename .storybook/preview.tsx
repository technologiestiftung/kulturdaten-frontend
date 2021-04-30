import { addDecorator } from '@storybook/react';
import { Global } from '../components/globals/Global';
import { CSSVars } from '../components/globals/Constants';
import { Typography } from '../components/globals/Typography';
import { Reset } from '../components/globals/Reset';
import { WindowContextProvider } from '../lib/WindowService';

addDecorator((story) => {
  return (
    <>
      <Reset />
      <CSSVars />
      <Global />
      <Typography />
      <WindowContextProvider>{story()}</WindowContextProvider>
    </>
  );
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
};