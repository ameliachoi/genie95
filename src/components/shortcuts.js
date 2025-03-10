import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '@react95/core';
import { Notepad2, User5, Cdplayer107 } from '@react95/icons';
import { startWebamp } from '../context/startWebamp';

const StyledShortcuts = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    align-items: center;
`

function Shortcuts({ openModal }) { // props로 받아야함
        return (
            <div>
                <StyledShortcuts>
                    <Button icon={<Notepad2 variant='32x32_4'/>} onClick={() => openModal("NotepadModal", { contentType: "About" })} />
                    <div>About</div>
                </StyledShortcuts>
                <StyledShortcuts>
                    <Button
                    key={<Cdplayer107 variant='32x32_4'/>}
                    onClick={() => startWebamp()} />
                    <div>Media</div>
                </StyledShortcuts>
                <StyledShortcuts>
                    <Button icon={<Cdplayer107 variant='32x32_4'/>} onClick={() => openModal('VideoModal')} />
                    <div>Friends.avi</div>
                </StyledShortcuts>
            </div>
        );
};

export default Shortcuts;
