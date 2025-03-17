import React, { useContext, useState, useEffect } from 'react';
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

const App = () => {
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);

  const playSound = () => {
    if (!isAudioPlayed) {
      const audio = new Audio('/startup-sound.mp3');
      audio.play();
      setIsAudioPlayed(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', playSound);
    return () => document.removeEventListener('click', playSound);
  }, [isAudioPlayed]);
  
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