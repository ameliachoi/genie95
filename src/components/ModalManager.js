import React from 'react';
import { useModal } from '../context/ModalContext';
import GenieModal from './Modal/GenieModal';
import NotepadModal from './Modal/NotepadModal';
import VideoModal from './Modal/VideoModal';

const ModalManager = () => {
    const { modals, closeModal } = useModal();

    return (
        <>
            {modals.NotepadModal?.isOpen && <NotepadModal onClose={() => closeModal('NotepadModal')} />}
            {modals.GenieModal?.isOpen && <GenieModal onClose={() => closeModal('GenieModal')} />}
            {modals.VideoModal?.isOpen && <VideoModal onClose={() => closeModal('VideoModal')} />}
        </>
    );
};

export default ModalManager;