import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, TitleBar } from '@react95/core';

function App() {
  return (
    <ThemeProvider theme={themes.default}>
      <GlobalStyle />
      <window style={{ width: 300 }}>
        <TitleBar>
          <span>Genie 95</span>
        </TitleBar>
        
          <Button>Click me!</Button>  
      </window>
=    </ThemeProvider>
  );
}

export default App;
