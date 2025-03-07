import React, { useState, useContext, useEffect } from 'react';
import Notepad from './Modal/NotepadModal';
import Shortcuts from './Shortcuts';
import DataContext from '../context/DataContext';
import Player from './Modal/PlayerModal';

function Desktop() {

    const isMobile = window.innerWidth < 850; // 모바일 기기 UI

    const data = useContext(DataContext);
    const [selectedItem, setSelectedItem] = useState(null);
    const [notepadOpened, toggleNotepad] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(
        () => {
            const files = data.getItems();
            setItems(files);
            setSelectedItem(files[0]);
            toggleNotepad(!isMobile);
        }, [data, isMobile]);

    const closeNotepad = () => {
        toggleNotepad(false);
    };

    const openNotepad = () => {
        setSelectedItem(item);
        toggleNotepad(true);
    };

    return (
        <React.Fragment>
            <Shortcuts openNotepad={openNotepad} /> {/* 바탕하면 바로가기에서 Notepad 실행*/}
            {
                notepadOpened && (
                    <Notepad closeNotepad={closeNotepad} selectedItem={selectedItem} isMobile={isMobile} />
                )
            }
        </React.Fragment>
    );
};

export default Desktop;