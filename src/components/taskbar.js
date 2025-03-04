import React, { useState, useContext } from 'react';
import DataContext from '../contexts/dataContext';
import { Taskbar as React95Taskbar, List, TitleBar, Modal } from '@react95/core';
import { Awfxcg321304, Cdplayer107 } from '@react95/icons';
import styled from 'styled-components';

// const Link = styled.a`
//     text-decoration: none;
//     color: inherit;
// `

const CustomTaskbar = () => {
        
        // taskbar 모달 실행 방식
        const [first, toggleFirst] = useState(false);
        const [second, toggleSecond] = useState(false);
        const closeFirst = () => toggleFirst(false);
        const closeSecond = () => toggleSecond(false);
        return (
            <>
                {first && (
                    <Modal 
                        icon={<Awfxcg321304 variant="16x16_4" />}
                        title="Contact"
                        titleBarOptions={[<TitleBar.Close key="close" onClick={closeFirst} />]}
                        width="300px"
                        height="200px"
                    >
                        <p>연락처 정보</p>
                    </Modal>
                )}
                {second && (
                    <Modal 
                        icon={<Cdplayer107 variant="16x16_4" />}
                        title="Media"
                        titleBarOptions={[<TitleBar.Close key="close" onClick={closeSecond} />]}
                        width="300px"
                        height="200px"
                        dragOptions={{ defaultPosition: { x: 50, y: 50 } }}
                    >
                        <p>미디어 플레이어</p>
                    </Modal>
                )}

            <React95Taskbar
                list={
                <List>
                    <List.Item icon={<Cdplayer107 variant='32x32_4' />} onClick={() => toggleSecond(true)}>
                        Media
                    </List.Item>
                    <List.Item icon={<Awfxcg321304 variant='32x32_4' />} onClick={() => toggleFirst(true)}>
                        Contact
                    </List.Item>
                    <List.Divider />
                </List>
            }
        />
        </>
    );
};

export default CustomTaskbar;