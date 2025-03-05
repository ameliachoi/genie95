import React, { createContext, useState, useContext, Children } from "react";
import { Modal, TitleBar } from "@react95/core";
import { Awfxcg321304, Cdplayer107, Notepad2, User, User5 } from "@react95/icons";

// context 생성
const ModalContext = createContext();

// provider 컴포넌트 생성
export const ModalProvider = ({ children }) => {
    const [modals, setModals] = useState({
        media: false,
        contact: false,
        resume: false,
        genie: false,
        about: false
    });

    // 특정 모달 열기
    const openModal = (modalName) => {
        setModals((prev) => ({ ...prev, [modalName]: true }));
    };

    // 특정 모달 닫기
    const closeModal = (modalName) => {
        setModals((prev) => ({ ...prev, [modalName]: false}));
    };

    return (
        <ModalContext.Provider value={{ modals, openModal, closeModal }}>
            {children}

            {/* media modal */}
            {modals.media && (
                <Modal 
                icon={<Cdplayer107 variant="16x16_4" />}
                title="Media"
                titleBarOptions={[<TitleBar.Close key="close" onClick={() => closeModal("media")} />]}
                width="300px"
                height="200px"
                dragOptions={{ defaultPosition: { x: 50, y: 50 } }}
                >
                    <p>미디어 플레이어</p>
                </Modal>
            )}

            {/* contact modal */}
            {modals.contact && (
                <Modal
                icon={<Awfxcg321304 variant="16x16_4" />}
                title="Contact"
                titleBarOptions={[<TitleBar.Close key="close" onClick={() => closeModal("contact")} />]}
                width="300px"
                height="300px"
                >
                    <p>연락처 정보</p>
                </Modal>
            )}

            {/* resume modal */}
            {modals.resume && (
                <Modal
                icon={<Notepad2 variant="16x16_4" />}
                title="Resume"
                titleBarOptions={[<TitleBar.Close key="close" onClick={() => closeModal("resume")} />]}
                width="400px"
                height="800px"
                >
                    <p>Resume</p>
                </Modal>
            )}          

            {/* resume modal */}
            {modals.genie && (
                <Modal
                icon={<User variant="16x16_4" />}
                title="Genie"
                titleBarOptions={[<TitleBar.Close key="close" onClick={() => closeModal("genie")} />]}
                width="400px"
                height="400px"
                >
                    <p>Genie</p>
                </Modal>
            )}                 

            {/* about modal */}
            {modals.about && (
                <Modal
                icon={<User5 variant="16x16_4" />}
                title="About"
                titleBarOptions={[<TitleBar.Close key="close" onClick={() => closeModal("about")} />]}
                width="400px"
                height="800px"
                >
                    <p>About</p>
                </Modal>
            )}   

        </ModalContext.Provider>
    );
};

// 쉽게 사용하게 hook 제공
export const useModal = () => useContext(ModalContext);