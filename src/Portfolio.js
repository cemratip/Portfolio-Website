import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Project from './Project';
import androidstudio from './icons/androidstudio.png';
import awsec2 from './icons/awsec2.png';
import awslambda from './icons/awslambda.png';
import awsrds from './icons/awsrds.png';
import awss3 from './icons/awss3.png';
import csharp from './icons/csharp.png';
import css from './icons/css.png';
import html from './icons/html.png';
import java from './icons/java.png';
import js from './icons/js.png';
import mysql from './icons/mysql.png';
import nest from './icons/nest.png';
import nodejs from './icons/nodejs.png';
import python from './icons/python.png';
import react from './icons/react.png';
import reactnative from './icons/reactnative.png';
import tailwind from './icons/tailwind.png';
import unity from './icons/unity.png';

export default function Portfolio() {
    const [projectsList, setProjectsList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const getAllProjectsLink = process.env.REACT_APP_GETALLPROJECTSURL;
    const projects = [];

    const skillsDict = {
        'androidstudio': androidstudio,
        'awsec2': awsec2,
        'awslambda': awslambda,
        'awsrds': awsrds,
        'awss3': awss3,
        'csharp': csharp,
        'css': css,
        'html': html,
        'java': java,
        'js': js,
        'mysql': mysql,
        'nest': nest,
        'nodejs': nodejs,
        'python': python,
        'react': react,
        'reactnative': reactnative,
        'tailwind': tailwind,
        'unity': unity,
    }

    useEffect(() => {
        axios.get(getAllProjectsLink)
            .then(response => {
                for (let i = 0; i < response.data.length; i++) {
                    const name = response.data[i].name;
                    const skills = response.data[i].skills;
                    const links = response.data[i].links;
                    const skillIcons = [];
                    const thirdPartyButtons = [];

                    for (let i = 0; i < skills.length; i++) {
                        const image = skillsDict[skills[i].replaceAll(' ','').toLowerCase()];
                        skillIcons.push(<img src={image} alt=''/>);
                    }

                    for (let x = 0; x < links.length; x++) {
                        const thirdParty = Object.keys(links[x]);
                        const thirdPartyLink = Object.values(links[x]);
                        // eslint-disable-next-line
                        thirdPartyButtons.push(<a className='border-2 border-[#EA4C89] bg-[#EA4C89] text-white rounded-md p-2' href={thirdPartyLink} target='_blank'>{thirdParty}</a>);
                    }

                    const details = {
                        name: name,
                        skillIcons: skillIcons,
                        thirdPartyButtons: thirdPartyButtons,
                    }

                    projects.push(
                        <Project props={details}/>
                    );
                }
            })
            .then(() => {
                setProjectsList(projects);
                setLoaded(true);
            })
        // eslint-disable-next-line
    }, [getAllProjectsLink])

    return (
        <div className='min-h-screen flex flex-col items-center pt-48 space-y-36'>
            <p className='message anim-typewriter-portfolio'>Portfolio</p>
            {!loaded &&
                <div className="container">
                    <svg className="machine" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 645 526">
                        <defs/>
                        <g>
                            <path x="-173,694" y="-173,694" className="large-shadow"
                                  d="M645 194v-21l-29-4c-1-10-3-19-6-28l25-14 -8-19 -28 7c-5-8-10-16-16-24L602 68l-15-15 -23 17c-7-6-15-11-24-16l7-28 -19-8 -14 25c-9-3-18-5-28-6L482 10h-21l-4 29c-10 1-19 3-28 6l-14-25 -19 8 7 28c-8 5-16 10-24 16l-23-17L341 68l17 23c-6 7-11 15-16 24l-28-7 -8 19 25 14c-3 9-5 18-6 28l-29 4v21l29 4c1 10 3 19 6 28l-25 14 8 19 28-7c5 8 10 16 16 24l-17 23 15 15 23-17c7 6 15 11 24 16l-7 28 19 8 14-25c9 3 18 5 28 6l4 29h21l4-29c10-1 19-3 28-6l14 25 19-8 -7-28c8-5 16-10 24-16l23 17 15-15 -17-23c6-7 11-15 16-24l28 7 8-19 -25-14c3-9 5-18 6-28L645 194zM471 294c-61 0-110-49-110-110S411 74 471 74s110 49 110 110S532 294 471 294z"/>
                        </g>
                        <g>
                            <path x="-136,996" y="-136,996" className="medium-shadow"
                                  d="M402 400v-21l-28-4c-1-10-4-19-7-28l23-17 -11-18L352 323c-6-8-13-14-20-20l11-26 -18-11 -17 23c-9-4-18-6-28-7l-4-28h-21l-4 28c-10 1-19 4-28 7l-17-23 -18 11 11 26c-8 6-14 13-20 20l-26-11 -11 18 23 17c-4 9-6 18-7 28l-28 4v21l28 4c1 10 4 19 7 28l-23 17 11 18 26-11c6 8 13 14 20 20l-11 26 18 11 17-23c9 4 18 6 28 7l4 28h21l4-28c10-1 19-4 28-7l17 23 18-11 -11-26c8-6 14-13 20-20l26 11 11-18 -23-17c4-9 6-18 7-28L402 400zM265 463c-41 0-74-33-74-74 0-41 33-74 74-74 41 0 74 33 74 74C338 430 305 463 265 463z"/>
                        </g>
                        <g>
                            <path x="-100,136" y="-100,136" className="small-shadow"
                                  d="M210 246v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H100l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L10 225v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L210 246zM110 272c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S131 272 110 272z"/>
                        </g>
                        <g>
                            <path x="-100,136" y="-100,136" className="small"
                                  d="M200 236v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H90l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L0 215v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L200 236zM100 262c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S121 262 100 262z"/>
                        </g>
                        <g>
                            <path x="-173,694" y="-173,694" className="large"
                                  d="M635 184v-21l-29-4c-1-10-3-19-6-28l25-14 -8-19 -28 7c-5-8-10-16-16-24L592 58l-15-15 -23 17c-7-6-15-11-24-16l7-28 -19-8 -14 25c-9-3-18-5-28-6L472 0h-21l-4 29c-10 1-19 3-28 6L405 9l-19 8 7 28c-8 5-16 10-24 16l-23-17L331 58l17 23c-6 7-11 15-16 24l-28-7 -8 19 25 14c-3 9-5 18-6 28l-29 4v21l29 4c1 10 3 19 6 28l-25 14 8 19 28-7c5 8 10 16 16 24l-17 23 15 15 23-17c7 6 15 11 24 16l-7 28 19 8 14-25c9 3 18 5 28 6l4 29h21l4-29c10-1 19-3 28-6l14 25 19-8 -7-28c8-5 16-10 24-16l23 17 15-15 -17-23c6-7 11-15 16-24l28 7 8-19 -25-14c3-9 5-18 6-28L635 184zM461 284c-61 0-110-49-110-110S401 64 461 64s110 49 110 110S522 284 461 284z"/>
                        </g>
                        <g>
                            <path x="-136,996" y="-136,996" className="medium"
                                  d="M392 390v-21l-28-4c-1-10-4-19-7-28l23-17 -11-18L342 313c-6-8-13-14-20-20l11-26 -18-11 -17 23c-9-4-18-6-28-7l-4-28h-21l-4 28c-10 1-19 4-28 7l-17-23 -18 11 11 26c-8 6-14 13-20 20l-26-11 -11 18 23 17c-4 9-6 18-7 28l-28 4v21l28 4c1 10 4 19 7 28l-23 17 11 18 26-11c6 8 13 14 20 20l-11 26 18 11 17-23c9 4 18 6 28 7l4 28h21l4-28c10-1 19-4 28-7l17 23 18-11 -11-26c8-6 14-13 20-20l26 11 11-18 -23-17c4-9 6-18 7-28L392 390zM255 453c-41 0-74-33-74-74 0-41 33-74 74-74 41 0 74 33 74 74C328 420 295 453 255 453z"/>
                        </g>
                    </svg>
                </div>
            }
            {loaded &&
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-11'>
                    {projectsList}
                </div>
            }
        </div>
    );
}