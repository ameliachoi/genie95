import React, { useState, useContext } from 'react';
import { TaskBar as React95Taskbar, List, TitleBar, Modal } from '@react95/core';
import { Awfxcg321304, Cdplayer107, Notepad2, User, User5 } from '@react95/icons';
import { useModal } from '../contexts/ModalContext';
import styled from 'styled-components';

const StyledListContainer = styled.div`
    width: 150px;
`;

const CustomTaskbar = () => {
        const { openModal } = useModal(); // 모달 컨드롤 함수 가져오기        

        return (
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
                        <List.Item icon={<Cdplayer107 variant='32x32_4' />} onClick={() => openModal("media")}>
                            Media
                        </List.Item>                    
                        <List.Item icon={<Notepad2 variant='32x32_4' />} onClick={() => openModal("resume")}>
                            Resume
                        </List.Item>
                        <List.Item icon={<User variant='32x32_4' />} onClick={() => openModal("genie")}>
                            Genie
                        </List.Item>                            
                        <List.Divider />
                        <List.Item icon={<User5 variant='32x32_4' />} onClick={() => openModal("about")}>
                            About
                        </List.Item>                    
                    </List>
                </StyledListContainer>
            }
        />
    );
};

export default CustomTaskbar;