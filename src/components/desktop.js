import React, { useState, useContext, useEffect } from 'react';
import NotepadModal from './Modal/NotepadModal';
import Shortcuts from './Shortcuts';
import DataContext from '../context/DataContext';
import { useModal } from '../context/ModalContext'; 
import { Button, TitleBar } from '@react95/core';
import ModalManager from './ModalManager';
import Player from './Player';
import ClippyContext, { ClippyProvider } from '../context/Clippy';
import '../styles/Desktop.css';


function Desktop({ onClose}) {
    const { openModal, closeModal } = useModal();
    const isMobile = window.innerWidth < 850; // 모바일 기기 UI
    const [notepadOpened, toggleNotepad] = useState(false);

    useEffect(
        () => {
            toggleNotepad(!isMobile);
        }, [isMobile]);


    const openNotepad = () => {
        openModal('NotepadModal', { contentType: 'About' });
        toggleNotepad(true);
    };

    const closeNotepad = () => {
        closeModal('NotepadModal');
        toggleNotepad(false);
    };

    const ClippyContent = () => {
        const { speak } = useContext(ClippyContext);
        return <Button onClick={() => speak('Hello, world!')}>Click me</Button>;
    };

    return (
        <React.Fragment>
            <Shortcuts openModal={openModal} /> {/* 바탕하면 바로가기에서 Notepad 실행*/}
            {
                notepadOpened && (
                    <NotepadModal 
                    closeModal={onClose} 
                    titleBarOptions={<TitleBar.Close key="close" onClick={onClose}/>}
                    isMobile={isMobile} />
                )
            }
            <ClippyProvider>
                <ClippyContent />
            </ClippyProvider>
        </React.Fragment>
    );
};

export default Desktop;