import React, { useEffect, useState, useContext } from 'react';
import DataContext from '../../contexts/DataContext';
import About from './About';
import Resume from './Resume';

function ContentFactory({ id }) {
    const data = useContext(DataContext);
    console.log("ContentFactory - data:", data); // debug - data값 확인

    const [item, setItem] = useState(null);

    useEffect(() => {
        if (!data || typeof data.getItem !== 'function') {
            console.error("data is undefined or getItem is not a function!");
            return;
        }
        
        const file = data.getItem(id);
        console.log(`getItem(${id}) returned:`, file);

        if (file) {
            setTimeout(() => {
                setItem(file); // 상태 업데이트를 비동기적으로 실행하도록 설정
            }, 0); // 0ms 지연을 두고 실행
        } else {
            console.error(`No file found for id: ${id}`);
        }
    }, [id, data]);

    if (item == null) {
        return <div>Loading ...</div>;
    }

    switch (item.id) {
        case 'about':
            return <About content={item.content} />;
        case 'resume':
            return <Resume content={item.content} />;
        default:
            return (<div>File not found!</div>);
    };
};

export default ContentFactory;