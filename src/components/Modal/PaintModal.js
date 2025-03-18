import React from 'react';
import { Frame, List, Modal, TitleBar } from '@react95/core';
import { Mspaint } from '@react95/icons';

const PaintModal = ({ onClose }) => {
    return (
        <Modal
        icon={<Mspaint variant='16x16_4'/>}
        title='Paint'
        closeModal={onClose}
        titleBarOptions={<TitleBar.Close key="close" onClick={onClose}/>}
        dragOptions={{
            defaultPosition: {
                x: 100,
                y: 100
            }
        }}
        style={{
            width: "70%",
            height: "70%",
            left: '0',
            top: '0',
            position: 'fixed'
        }}
        >
            <Frame
            style={{
                width: '100%',
                height: '100%',
                padding: 0
            }}
            >
                <iframe
                src="https://jspaint.app"
                width="100%"
                height="100%"
                ></iframe>
            </Frame>
        </Modal>
    )
};

export default PaintModal;