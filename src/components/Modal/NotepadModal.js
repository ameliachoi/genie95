import React from 'react';
import { Frame, List, ButtonModal, TitleBar, Button, Modal } from '@react95/core';
import DataContext from '../../context/DataContext.js';
import { Notepad1 } from '@react95/icons';

const NotepadModal = ({ closeModal, contentType }) => {
    return (
        <Modal
            icon={<Notepad1 variant='16x16_4'/>}
            title='Notepad'
            closeModal={closeModal}
            titleBarOptions={<TitleBar.Close key="close" onClick={closeModal}/>}
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
            />
            <div> 
                {DataContext[contentType] || <p>No content available</p>}
            </div>
        </Modal>
    );
};

export default NotepadModal;