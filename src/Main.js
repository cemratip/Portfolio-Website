import { useNavigate } from "react-router-dom";
import './main.css';
import cv from './Cem Ratip CV.pdf';
import {useEffect, useState} from "react";

export default function Main() {
    const navigate = useNavigate();
    const [timeOfDay, setTimeOfDay] = useState('');

    useEffect(() => {
        const nowHours = new Date().getHours();
        if (nowHours >= 0 && nowHours < 12) {
            setTimeOfDay('morning');
        }
        else if (nowHours >= 12 && nowHours < 17) {
            setTimeOfDay('afternoon');
        }
        else {
            setTimeOfDay('evening');
        }
    }, [])

    return (
        <div className='min-h-screen flex flex-col space-y-7 justify-center items-center'>
            {timeOfDay==='morning' | timeOfDay==='evening' &&
                <p className='mainMessage anim-typewriter-morning-evening'>Good {timeOfDay}, I'm Cem.</p>
            }
            {timeOfDay==='afternoon' &&
                <p className='mainMessage anim-typewriter-afternoon'>Good {timeOfDay}, I'm Cem.</p>
            }
            <div className='space-x-4'>
                <button className='viewBtn'><a href={cv}>View CV</a></button>
                <button className='viewBtn' onClick={()=>navigate('/portfolio')}>View Portfolio</button>
            </div>
        </div>
    );
}