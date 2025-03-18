import React, { useState, useEffect } from 'react';

const DraggableWrapper = ({ children }) => {
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className='draggable-wrapper'
        >
            <div
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                cursor: 'grabbing'
            }}
            >
                {/* <div
                onMouseDown={handleMouseDown}
                >
                    Drag Me
                </div> */}
            {children}
            </div>
        </div>  
    );
};

export default DraggableWrapper;