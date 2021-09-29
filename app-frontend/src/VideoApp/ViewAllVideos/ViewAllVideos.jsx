import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './ViewAllVideos.css';
import axios from 'axios';

function ViewAllVideos() {
    const [videosArr, SetVideosArr] = useState({});
    const [videosArrCopy, SetVideosArrCopy] = useState({});
    return (
        <div>
            <NavBar />
            <div className='ViewAllVideosContainer'>
                <div className='CardsContainer'>
                    <div className='Card'>
                        Check 1
                        <p>asd</p>
                        <p>asd</p>
                    </div>
                    <div className='Card'>
                        Check 1
                        <p>asd</p>
                        <p>asd</p>
                        <p>asd</p>
                        <p>asd</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewAllVideos;