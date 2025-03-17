import React, { useState, useEffect, createContext } from 'react';
import clippy from 'clippyts';

let agent = null;

const availableAgents = [
    'Rocky',
    'Rover',
    'Clippy',
    'Genie'
];

const talks = [
    'New to our site? Check out the About section.',
    'Can I help you find anything?',
    "We're always here to help you.",
    "Stuck on something? Don't worry, we've got resources to help you.",
    "I love the way you are doing that!",
    "Have a nice day, pal!",
    "I'm sorry, I didn't catch that well.",
    "Want to get involved? Check out the Contact section."
];

const ClippyContext = React.createContext({ speak: () => {} });

export const ClippyProvider = ({ children }) => {
    const [speakFunction, setSpeakFunction] = useState(() => () => {}); // useState 추가
    useEffect(() => {
        const agentName = 
        availableAgents[Math.floor(Math.random() * availableAgents.length)];

        if (!agent) {
            clippy.load({
                name: agentName,
                success: loadedAgent => {
                    agent = loadedAgent;

                    agent.show();
                    agent.play('Wave');

                    const msg = talks[Math.floor(Math.random() * talks.length)];
                    agent.speak(msg);

                    agent._el.addEventListener('click', () => {
                        const msg = talks[Math.floor(Math.random() * talks.length)];
                        agent.speak(msg, true);
                    });

                    setSpeakFunction(() => (msg, animate = false) => {
                        agent.speak(msg);
                        if (animate) {
                            agent.animate();
                        }
                    });
                }
            });
        }
    }, []);


    return (
        <ClippyContext.Provider value={{ speak: speakFunction }}>
            {typeof children === 'function' ? children({ speak: speakFunction }) : children}
        </ClippyContext.Provider>
    );
};

export default ClippyContext;