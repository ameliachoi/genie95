import React from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';

import Desktop from './components/desktop';
import CustomTaskbar from './components/taskbar'
import { ModalProvider } from './contexts/ModalContext';

const App = () => {
  return (
    <ModalProvider>
      <CustomTaskbar />
    </ModalProvider>
  );
};

export default App;