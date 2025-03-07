import React from 'react';
import { Frame, List, Modal, TitleBar } from '@react95/core';
import { Mplayer13 } from '@react95/icons';

const VideoModal = ({ closeModal }) => {
    return (
        <Modal
        icon={<Mplayer13 variant='16x16_4'/>}
        title='Friends.avi'
        closeModal={closeModal}
        titleBarOptions={<TitleBar.Close key="close" onClick={closeModal}/>}
        style={{
            left: "50%",
            top: "15%",
            width: 500,
            height: 400
        }}
        >
            <video width='320px' src={'/assets/friends.mp4'} name="Friends.avi"></video>
        </Modal>
    );
};

export default VideoModal;