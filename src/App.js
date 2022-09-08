import {Routes, Route} from "react-router-dom";
import Main from "./Main";
import Portfolio from "./Portfolio";

export default function App() {
    return (
        <div className='bg-[#191919] overflow-auto'>
            <Routes>
                <Route path="" element={<Main/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
            </Routes>
        </div>
    );
}