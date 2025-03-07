import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '@react95/core';
import { User5, Cdplayer107 } from '@react95/icons';
import { startWebamp } from '../context/startWebamp';

const StyledShortcuts = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    align-items: center;
`

const Shortcuts = ({ openModal }) => { // props로 받아야함
        return (
            <div>
                <StyledShortcuts>
                    <Button onClick={() => openModal('about')}>
                    <div>About</div>
                    </Button>
                </StyledShortcuts>
                <StyledShortcuts>
                    <Button
                    key={<Cdplayer107 variant='32x32_4'/>}
                    onClick={() => startWebamp()}
                />
                    <div>Media</div>
                </StyledShortcuts>
                <StyledShortcuts>
                    <Button
                    onClick={() => openModal('video')}>
                        <div>Friends.avi</div>
                    </Button>
                </StyledShortcuts>
            </div>
        );
};

export default Shortcuts;
