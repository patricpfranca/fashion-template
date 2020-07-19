import * as React from 'react';
import { ThemeProvider } from '@shopify/restyle';

import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from './src/Authentication';
import { LoadAssets, theme } from './src/components';

const assets = [...authenticationAssets];
const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
