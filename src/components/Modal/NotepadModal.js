import React from 'react';
import { Frame, List, ButtonModal, TitleBar, Button, Modal } from '@react95/core';
import DataContext from '../../context/DataContext.js';
import { Notepad1 } from '@react95/icons';

const NotepadModal = ({ onClose, contentType }) => {
    const content = DataContext[contentType];

    console.log("content Type:", contentType);
    console.log("content:", content);

    return (
        <Modal
            icon={<Notepad1 variant='16x16_4'/>}
            title='Notepad'
            closeModal={onClose}
            titleBarOptions={<TitleBar.Close key="close" onClick={onClose}/>}
            style={{
                left: "50%",
                top: "15%",
                width: 450,
            }}
        >
            <Frame
                bg='white'
                boxShadow='in'
                height='100%'
                padding={20}
                style={{
                    
                }}
            >
                {content ? content: <p>No content available</p>}
            </Frame>
        </Modal>
    );
};

export default NotepadModal;