import React, { useContext, useState } from 'react';
import { Frame, List, ButtonModal, TitleBar, Button, Modal, Alert } from '@react95/core';
import DataContext from '../../context/DataContext';
import { Notepad1 } from '@react95/icons';
import { Resizable } from 'react-resizable';

const NotepadModal = ({ onClose, contentType }) => {
    const data = useContext(DataContext);
    const content = data[contentType] || <p>No content available</p>;

    // alert 상태 관리
    const [showAlert, setShowAlert] = useState(false);
    const [withSound, setWithSound] = useState(false);

    // alert handler
    const handleOpenAlert = () => {
        setShowAlert(true);
    }
    const handleCloseAlert = () => {
        setShowAlert(false);
    }

    return (
        <Modal
            icon={<Notepad1 variant='16x16_4'/>}
            title={`Notepad - ${contentType}.txt`}
            closeModal={onClose}
            titleBarOptions={<TitleBar.Close key="close" onClick={onClose}/>}
            buttons={[{ value: 'Close', onClick: onClose }]}
            style={{
                left: "50%",
                top: "15%",
                width: "30%",
                height: "70%"
            }}
            menu={[
                { name: 'File',
                list: <List>
                    <List.Item onClick={() => {
                        onClose(true);
                    }}>Exit</List.Item>
                </List>},

                { name: 'Edit',
                list: <List>
                    <List.Item onClick={handleOpenAlert}>Copy</List.Item>
                </List>}
            ]}
        >
            {showAlert && (
                <Alert 
                title='Warning' 
                message='You cannot allow to copy text from this application.'
                defaultPostion='center'
                titleBarOptions={<TitleBar.Close key="close" onClick={handleCloseAlert}/>}
                hasSound={withSound}
                buttons={[{ value: 'OK', onClick: onClose }]}
                />
            )}
                        
            <Resizable
                width={450}
                height={600}
                minConstraints={[450, 600]}
                maxConstraints={[450, 600]}
                handleSize={[10, 10]}
            >
            <Frame
                bg='white'
                boxShadow='in'
                width='100%'
                height='100%'
                padding={20}
                style={{
                    padding: '20px',
                    overflowY: 'auto',
                }}
            >
                    {content}
                </Frame>
            </Resizable>
        </Modal>
    );
};

export default NotepadModal;