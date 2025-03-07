import React, { createContext } from "react";

const DataContext = createContext(null); // react의 Context 생성

export const DataProvider = ({ children }) => {
    const data = {
        items: [
            {
                id: 'about',
                name: 'about.txt',
                icon: 'info_bubble',
                content: {
                    paragraphs: [
                        "Hi! I've been working customer-faced manager with over 4 years of experience in Ad-tech field, transiting from a non-technical background to mastering complex systems.",
                        "My career journey reflects a climber's spirit - constantly challenging myself to learn quickly, solve problems. and reach new height.",
                        "I'm specializing in troubleshooting and resolving various problem to help customers and partners optimizie digital marketing campaigns and effective usage of MMP(Mobile Measurement Platform).",
                        "The most powerful tool that I can use is SQL and Python for data analyzing. I started to develop websites with HTML/CSS, React and Linux web server build.",
                        "I usually read books, take a walk with my daughter, play ukulele/drums and go swimming in my free time.",
                    ]
                }
            },
            {
                id: 'resume',
                name: 'resume.txt',
                icon: 'notepad_2',
                content: {
                    resumeLink: "https://drive.google.com/file/d/1xG8HNu2eWoQ0xrQzyMBtvEoauS0SsnQQ/view?usp=sharing",
                    workExperience: [
                        {
                            jobTitle: 'Associate Support Engineer',
                            company: 'AppsFlyer',
                            location: 'Seoul, South Korea',
                            period: 'JUL 2024 - PRESENT',
                            accomplishment: [
                                'Provided technical support to clients in AppsFlyer, resolving data discrepancy and UI/functional issues',
                                'Conducted thorough analysis of networking (HTTP requests & responses) and validated SDK implementation',
                                'Collaborated with cross-functional teams to ensure seamless client experience and drive product improvements',
                            ],
                        },
                        {
                            jobTitle: 'Partner Solutions Manager',
                            company: 'AppsFlyer',
                            location: 'Seoul, South Korea',
                            period: 'AUG 2022 - JUL 2024',
                            accomplishment: [
                                'Supported Ad-tech partners with setting up AppsFlyer for marketing campaigns, shared fraud detection insights, and provided localized guidelines for the Korean market.',
                                'Helped partners integrate their accounts with AppsFlyer platform in a dedicated manner.',
                                'Troubleshoot and address inquiries effectively for ad networks, SRNs, analytic providers, and agencies',
                            ],
                        },
                        {
                            jobTitle: 'Customer Service Manager',
                            company: 'WISETRACKER',
                            location: 'Seoul, South Korea',
                            period: 'APR 2021 - JUL 2022',
                            accomplishment: [
                                'Provided in-depth assistance to customers navigating the dashboard, including mobile app taxonomy & data visualization reports.',
                                'Planned and executed digital marketing strategies, managing multiple advertisement campaigns.',
                                'Published branded content articles on Ad-tech and mobile app tracking.',
                            ],
                        },
                    ],
                    education: [
                        {
                            credit: 'Bachelor in Korean Studies',
                            place: 'Hankuk University of Foreign Studies',
                            gpa: '3.49/4.5 GPA',
                            period: 'MAR 2014 - AUG 2018'
                        }
                    ]
                }
            }
        ], // items 정의

        getItems: () => {
            return data.items.map(({ id, name, icon }) => ({ id, name, icon}));
        },
        
        getItem: (id) => {
            return data.items.find((x) => x.id === id) || null ;
        },
    };

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;