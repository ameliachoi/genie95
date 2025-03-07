import React, { useContext, useState } from 'react';
import { TaskBar } from '@react95/core';
import { createGlobalStyle } from 'styled-components';

import Desktop from './components/desktop';
import CustomTaskbar from './components/taskbar';
import Notepad from './components/notepad';
import DataContext, { DataProvider } from './contexts/DataContext';
import GenieModal from './components/contents/Genie';
import Video from './components/contents/Video'
import Shortcuts from './components/shortcuts';

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;

function App() {
  const [modalData, setModalData] = useState(null); //modal data 전역변수 설정
  const data = useContext(DataContext); // useContext를 사용해서 data 가져오기
  
  const openModal = (id) => { // openModal 함수 정의
    console.log(`openModal called with id: ${id}`);

    if (id === 'genie') {
      setModalData('genie');
      return;
    }

    if (id === 'video') {
      setModalData('video');
      return;
    }

    if (!data || typeof data.getItem !== "function") {
      console.error("data is undefined or getItem is not a function!");
      return;
    }

    const fileData = data.getItem(id);
    console.log("fileData:", fileData); // 데이터 확인

    if (!fileData) {
      console.error(`File data not found for id:${id}`);
      return;
    }

    setModalData(fileData);
  };

const closeModal = () => {
  setModalData(null);
};

  return (
    <DataProvider>
      <BodyFontSizeOverride />
      <Desktop />
      {/* <Shortcuts openModal={openModal} /> */}
      <CustomTaskbar openModal={openModal} /> {/* openModal을 props로 전달 */}
      {modalData && (modalData === 'about' || modalData === 'resume') && (<Notepad selectedItem={modalData} closeModal={closeModal}/>)}
      {modalData === 'genie' && <GenieModal closeModal={closeModal}/>}
      {modalData === 'video' && <Video closeModal={closeModal}/>}
    </DataProvider>
  );
};

export default App;