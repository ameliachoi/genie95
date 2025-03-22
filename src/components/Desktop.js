import React, { useState, useContext, useEffect, Fragment } from 'react';
import Shortcuts from './Shortcuts';
import { useModal } from '../context/ModalContext'; 
import { Button, TitleBar } from '@react95/core';

import ModalManager from './ModalManager';
import Player from './Player';
import NotepadModal from './Modal/NotepadModal';
import DataContext from '../context/DataContext';

import '../styles/Desktop.css';


function Desktop({ onClose, contentType }) {
    const { openModal, closeModal } = useModal();
    const isMobile = window.innerWidth < 850; // 모바일 기기 UI
    const [notepadOpened, toggleNotepad] = useState(false);

    useEffect(
        () => {
            toggleNotepad(!isMobile);
        }, [isMobile]);

    const closeNotepad = () => {
        toggleNotepad(false);
    };

    const openNotepad = () => {
        toggleNotepad(true);
    };

    return (
        <Fragment>
            <Shortcuts openModal={openModal}/> {/* 바탕하면 바로가기에서 Notepad 실행*/}
            {
                notepadOpened && (
                    <NotepadModal 
                        closeModal={closeModal} 
                        contentType={'About'}
                        titleBarOptions={<TitleBar.Close key="close" onClick={closeModal}/>}
                        isMobile={isMobile} />
                )
            }
        </Fragment>
    );
};

export default Desktop;