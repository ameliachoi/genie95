import { Modal } from '@react95/core';
import React, { createContext, useState, useContext } from 'react';
import DraggableWrapper from './DraggableWrapper';
import ModalManager from '../components/ModalManager';

// context 생성
const ModalContext = createContext();

// context provider 생성
export const ModalProvider = ({ children }) => {
    const [modals, setModals] = useState({});

    // openModal 함수 정의
    function openModal(modalId, props = {}) {
        setModals((prev) => ({ ...prev, [modalId]: { isOpen: true, ...props }}));
    };

    // closeModal 함수 정의
    function closeModal(modalId) {
        setModals((prev) => ({ ...prev, [modalId]: { isOpen: false } }));
    };

    const value = {
        modals,
        openModal,
        closeModal,
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
            {/* 모달 랜더링 */}
            {ModalContext && (
                <DraggableWrapper>
                    {ModalManager}
                </DraggableWrapper>
            )}
        </ModalContext.Provider>
    );
};

// context를 쉽게 사용할 수 있는 custom hook
export function useModal() {
    return useContext(ModalContext);
};