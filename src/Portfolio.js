import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Project from './Project';
import androidstudio from './icons/androidstudio.png';
import awsec2 from './icons/awsec2.png';
import awslambda from './icons/awslambda.png';
import awsrds from './icons/awsrds.png';
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
    const getAllProjectsLink = process.env.REACT_APP_GETALLPROJECTSURL;
    const projects = [];

    const skillsDict = {
        'androidstudio': androidstudio,
        'awsec2': awsec2,
        'awslambda': awslambda,
        'awsrds': awsrds,
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
            })
        // eslint-disable-next-line
    }, [getAllProjectsLink])

    return (
        <div className='min-h-screen flex flex-col items-center pt-48 space-y-36'>
            <p className='message anim-typewriter-small-portfolio md:anim-typewriter-portfolio lg:anim-typewriter-portfolio'>Portfolio</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-11'>
                {projectsList}
            </div>
        </div>
    );
}