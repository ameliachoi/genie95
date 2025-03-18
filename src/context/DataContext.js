import React, { createContext, useContext } from 'react';

const DataContext = createContext({
    About: (
        <>
        <div>
            <h1>About</h1>
            <p>
                Hi! I've been working customer-faced manager with over 4 years of experience in Ad-tech field, transiting from a non-technical background to mastering complex systems.
            </p>
            <p>
                My career journey reflects a climber's spirit - constantly challenging myself to learn quickly, solve problems. and reach new height.
            </p>
            <p>
                I'm specializing in troubleshooting and resolving various problem to help customers and partners optimizie digital marketing campaigns and effective usage of MMP(Mobile Measurement Platform).
            </p>
            <p>
                The most powerful tool that I can use is SQL and Python for data analyzing. I started to develop websites with HTML/CSS, React and Linux web server build.
            </p>
            <p>
                I usually read books, take a walk with my daughter, play ukulele/drums and go swimming in my free time.
            </p>
        </div>
        </>
    ),
    Resume: (
        <>
        <div>
            <h1>Resume</h1>
            <div>
            <p>
                <h2>Work Experience</h2>
                <h3>Associate Support Engineer at AppsFlyer</h3>
                <p>JUL 2024 - PRESENT</p>
                <ul>
                    <li>Provided technical support to clients in AppsFlyer, resolving data discrepancy and UI/functional issues</li>
                    <li>Conducted thorough analysis of networking (HTTP requests & responses) and validated SDK implementation</li> 
                    <li>Collaborated with cross-functional teams to ensure seamless client experience and drive product improvements</li>   
                </ul>
            </p>
            </div>
            <div>
            <p>
                <h3>Partner Solutions Manager at AppsFlyer</h3>
                <p>AUG 2022 - JUL 2024</p>
                <ul>
                    <li>Supported Ad-tech partners with setting up AppsFlyer for marketing campaigns, shared fraud detection insights, and provided localized guidelines for the Korean market</li>
                    <li>Helped partners integrate their accounts with AppsFlyer platform in a dedicated manner</li> 
                    <li>Troubleshoot and address inquiries effectively for ad networks, SRNs, analytic providers, and agencies</li>   
                </ul>
            </p>
            </div>
            <div>
            <p>
                <h3>Customer Service Manager at WISETRACKER</h3>
                <p>APR 2021 - AUG 2022</p>
                <ul>
                    <li>Provided in-depth assistance to customers navigating the dashboard, including mobile app taxonomy & data visualization reports.</li>
                    <li>Planned and executed digital marketing strategies, managing multiple advertisement campaigns.</li>
                    <li>Published branded content articles on Ad-tech and mobile app tracking.</li>
                </ul>
            </p>
            </div>
            <hr />
            <div>
            <p>
                <h2>Education</h2>
                <h3>Bachelor in Korean Studies</h3>
                <h4>Hankuk University of Foreign Studies</h4>
                <p>MAR 2014 - AUG 2018  |  3.49/4.5 GPA</p>
            </p>
            </div>
        </div>
        </>
    )
});

export const DataProvider = ({ children }) => {
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;