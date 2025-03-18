import React from 'react';
import { useModal } from '../context/ModalContext';
import GenieModal from './Modal/GenieModal';
import NotepadModal from './Modal/NotepadModal';
import VideoModal from './Modal/VideoModal';
import PaintModal from './Modal/PaintModal';

const ModalManager = () => {
    const { modals, closeModal } = useModal();

    return (
        <>
            {modals.NotepadModal?.isOpen && (
                <NotepadModal
                    onClose={() => closeModal('NotepadModal')}
                    contentType={modals.NotepadModal.contentType} // 모달 내용 전달
                />
            )}
            {modals.GenieModal?.isOpen && <GenieModal onClose={() => closeModal('GenieModal')} />}
            {modals.VideoModal?.isOpen && <VideoModal onClose={() => closeModal('VideoModal')} />}
            {modals.PaintModal?.isOpen && <PaintModal onClose={() => closeModal('PaintModal')} />}
        </>
    );
};

export default ModalManager;