import React, { useContext, useState } from 'react';
import { TaskBar } from '@react95/core';
import { createGlobalStyle } from 'styled-components';

import Desktop from './components/Desktop';
import CustomTaskbar from './components/Taskbar';
import { ModalProvider } from './context/ModalContext';
import ModalManager from './components/ModalManager';

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;

function App() {
  return (
      <ModalProvider>
        <BodyFontSizeOverride />
        <Desktop />
        <CustomTaskbar />
        <ModalManager />
      </ModalProvider>
  );
};

export default App;