import React from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components';

import CustomTaskbar from './components/taskbar'
import Desktop from './components/desktop'

// const BodyFontSizeOverride = createGlobalStyle`
//   body {
//     font-size: 15px
//   }
// `;

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Desktop />
    <CustomTaskbar />
  </ThemeProvider>
);

export default App;