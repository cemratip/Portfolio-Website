import { useNavigate } from "react-router-dom";
import './main.css';
import cv from './Cem Ratip CV.pdf';

export default function Main() {
    const navigate = useNavigate();

    return (
        <div className='min-h-screen flex flex-col space-y-7 justify-center items-center'>
            <p className='message anim-typewriter'>Hi, I'm Cem. Welcome to my portfolio.</p>
            <div className='space-x-4'>
                <button className='viewBtn'><a href={cv}>View CV</a></button>
                <button className='viewBtn' onClick={()=>navigate('/portfolio')}>View Portfolio</button>
            </div>
        </div>
    );
}