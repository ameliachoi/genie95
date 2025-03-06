import React from 'react';
import { Frame, List, Modal, TitleBar } from '@react95/core';
import ContentFactory from './contents/ContentFactory';
import { ListItem } from '@react95/core/ListItem';
import { Notepad1 } from '@react95/icons';

function Notepad({ selectedItem, closeModal }) {

    return (
        <Modal
            icon={<Notepad1 variant='16x16_4'/>}
            title={`Notepad - ${selectedItem.name}`}
            closeModal={closeModal}
            titleBarOptions={<TitleBar.Close key="close" onClick={closeModal}/>}
            buttons={[{ value: "Close", onClick: closeModal}]}
            style={{
                left: "50%",
                top: "15%",
                width: 450,
            }}
            menu={[
                { name: "File", list: 
                    <List width='200px'>
                        <List.Item onClick={closeModal}>Exit</List.Item>
                    </List>},
                { name: "Edit", List: []}
            ]}
        >
            <Frame
                bg='white'
                boxShadow='in'
                height='100%'
                padding={20}
                style={{
                    overflowY: 'auto',
                    maxHeight: '60vh',
                }}
            >
                <ContentFactory id={selectedItem.id} />
            </Frame>
        </Modal>
    );
}

export default Notepad;
