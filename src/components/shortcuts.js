import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '@react95/core';
import { Notepad2, User5, Cdplayer107, Mplayer13, Mspaint } from '@react95/icons';
import { startWebamp } from '../context/startWebamp';
import ModalManager from './ModalManager';

const StyledShortcuts = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    align-items: center;
`

const StyledShortcuts2 = styled.div`
    margin-left: 92px;
    margin-right: 20px;
    align-items: center;
`

const Shortcuts = ({ openModal }) => { // props로 받아야함
        return (
            <div>
                <StyledShortcuts>
                    <div onClick={() => openModal("NotepadModal", { contentType: "About" })}>
                        <Notepad2 variant='32x32_4' style={{ marginLeft: 32, marginTop: 20}}/>
                    </div>
                    <p
                    style={{
                        fontSize: '12px',
                        marginTop: '5px',
                        width: 100,
                        textAlign: 'center',
                        color: 'white'
                    }}
                    >About</p>
                </StyledShortcuts> 
                {/* <StyledShortcuts>
                    <div onClick={() => startWebamp()}>
                    <Cdplayer107 variant='32x32_4' style={{ marginLeft: 32, marginTop: 20}}/>
                    </div>
                    <p
                    style={{
                        fontSize: '12px',
                        marginTop: '5px',
                        width: 100,
                        textAlign: 'center',
                        color: 'white'
                    }}
                    >Media</p>
                </StyledShortcuts> */}
                <StyledShortcuts>
                    <div onClick={() => openModal("VideoModal")}>
                        <Mplayer13 variant='32x32_4' style={{ marginLeft: 32, marginTop: 20}}/>
                    </div>
                    <p
                    style={{
                        fontSize: '12px',
                        marginTop: '5px',
                        width: 100,
                        textAlign: 'center',
                        color: 'white'
                    }}
                    >Friends.avi</p>
                </StyledShortcuts>
                <StyledShortcuts>
                    <div onClick={() => openModal("PaintModal")}>
                        <Mspaint variant='32x32_4' style={{ marginLeft: 32, marginTop: 20}}/>
                    </div>
                    <p
                    style={{
                        fontSize: '12px',
                        marginTop: '5px',
                        width: 100,
                        textAlign: 'center',
                        color: 'white'
                    }}
                    >Paint</p>
                </StyledShortcuts>
            </div>
        );
}; 

export default Shortcuts;
