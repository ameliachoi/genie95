import React from 'react';

import { Video, Frame, List, Modal, TitleBar } from '@react95/core';
import { Mplayer13 } from '@react95/icons';

const VideoModal = ({ onClose }) => {
    return (
            <Video
            w='320px'
            src="/Friends.mp4"
            autoPlay
            controls
            closeModal={onClose}
            titleBarOptions={<TitleBar.Close key="close" onClick={onClose}/>}
            dragOptions={{
                defaultPosition: {
                    x: 100,
                    y: 100
                }
            }}
            style={{
                left: "50%",
                top: "15%",
                width: 500,
                height: 400,
                marginBottom: 4
            }}
            />
    );
};

export default VideoModal;