import React from 'react';
import { useModal } from '../context/ModalContext';
import GenieModal from './Modal/GenieModal';
import VideoModal from './Modal/VideoModal';
import NotepadModal from './Modal/NotepadModal';
import PlayerModal from './Modal/PlayerModal';

const ModalManager = () => {
    const { modals, closeModal } = useModal();

    return (
        <>
            {modals.NotepadModal?.isOpen && <NotepadModal onClose={() => closeModal('NotepadModal')} />}
            {modals.GenieModal?.isOpen && <GenieModal onClose={() => closeModal('GenieModal')} />}
            {modals.PlayerModal?.isOpen && <PlayerModal onClose={() => closeModal('PlayerModal')} />}
            {modals.VideoModal?.isOpen && <VideoModal onClose={() => closeModal('VideoModal')} />}
        </>
    );
};

export default ModalManager;