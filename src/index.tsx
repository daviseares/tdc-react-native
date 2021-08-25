import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HomeScreen } from './screens';
import theme from './theme';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}
