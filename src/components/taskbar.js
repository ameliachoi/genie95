import React, { useState, useContext } from 'react';
import { TaskBar as React95Taskbar, List, TitleBar, Modal } from '@react95/core';
import { Awfxcg321304, Cdplayer107, Notepad2, User, User5 } from '@react95/icons';
import styled from 'styled-components';
import { useModal } from '../context/ModalContext';
import Player from './Player';

const StyledListContainer = styled.div`
    width: 150px;
`;

const CustomTaskbar = () => {
    const { openModal } = useModal();
    const [ showPlayer, setShowPlayer ] = useState(false); // player 상태 관리        

    return (
        <>
                <React95Taskbar 
                    list={
                    <StyledListContainer>
                        <List>
                            <List.Item icon={<Awfxcg321304 variant='32x32_4' />}>
                                <List>
                                    <List.Item width={'150px'} onClick={() => window.open("https://www.linkedin.com/in/jin-choi-3974a8166/", "_blank")}>
                                        LinkedIn
                                    </List.Item>
                                    <List.Item width={'150px'} onClick={() => window.open("https://github.com/ameliachoi", "_blank")}>
                                        GitHub
                                    </List.Item>                                
                                    <List.Item width={'150px'} onClick={() => window.open("https://genie-world.com/", "_blank")}>
                                        Blog
                                    </List.Item>  
                                </List>
                                Contact
                            </List.Item>
                            <List.Item icon={<Cdplayer107 variant='32x32_4' />} onClick={() => setShowPlayer(true)}>
                                Media
                            </List.Item>                    
                            <List.Item icon={<Notepad2 variant='32x32_4' />} onClick={() => openModal("NotepadModal", { contentType: "Resume" })}>
                                Resume
                            </List.Item>
                            <List.Item icon={<User variant='32x32_4' />} onClick={() => openModal("GenieModal")}>
                                Genie
                            </List.Item>                
                            <List.Divider />
                            <List.Item icon={<User5 variant='32x32_4' />} onClick={() => {
                                console.log("About list.Item clicked!"); // 클릭 확인 로그
                                openModal('NotepadModal', { contentType: "About" });
                            }}>
                                About
                            </List.Item>                    
                        </List>
                    </StyledListContainer>
                    }
                />

                {/* player 컴포넌트 추가 */}
                {showPlayer && <Player />};
        </>
    );
};

export default CustomTaskbar;