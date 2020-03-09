/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    roundness: 2,
    primary: 'chocolate',
    accent: 'white',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
