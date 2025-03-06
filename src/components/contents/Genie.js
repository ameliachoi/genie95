import React from 'react';
import { Frame, List, Modal, TitleBar } from '@react95/core';
import { User } from '@react95/icons';

const GenieModal = ({ closeModal }) => {
    return (
        <Modal
        icon={<User variant='16x16_4'/>}
        title='Genie'
        closeModal={closeModal}
        titleBarOptions={<TitleBar.Close key="close" onClick={closeModal}/>}
        style={{
            left: "50%",
            top: "15%",
            width: 300,
            height: 300
        }}
        >
            <img src='/genie.jpg' alt='Genie' style={{ maxWidth: '100%', maxHeight: '100%'}} />
        </Modal>
    );
};

export default GenieModal;