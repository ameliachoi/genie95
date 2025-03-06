import React from 'react';

function About({ content }) {
    const { paragraphs } = content;

    return (
        <div>
            <h2>About</h2>
            {
                paragraphs.map((p, i) => (
                    <p key={i}>{p}</p> // 배열을 map()으로 반복 렌더링
                ))
            }
        </div>
    );
};

export default About;