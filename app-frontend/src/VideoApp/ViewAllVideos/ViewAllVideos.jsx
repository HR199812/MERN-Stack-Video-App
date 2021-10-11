import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import './ViewAllVideos.css';
import axios from 'axios';

function ViewAllVideos() {
    const [videosArr, SetVideosArr] = useState({});

    const loadDataFromAPI = async() =>{
        try {
            const videosData = await axios.get('http://localhost:5001/videos');
            console.log(videosData.data);
            SetVideosArr(videosData.data);
        }
        catch (err) {

        }
    }

    useEffect(() => {

        loadDataFromAPI();

    }, []);

    return (
        <div>
            <NavBar />
            <div className='ViewAllVideosContainer'>
                <div className='CardsContainer'>
                    {/* {

                        videosArr.map((video, index) => {
                            return (
                                <div className='Card'>
                                    <h3>{video.videoName}</h3>
                                    <p>{video.videoLanguage}</p>
                                    <p>{video.videoReleaseDate}</p>
                                    <p>{video.videoSource}</p>
                                </div>
                            );
                        })
                    } */}
                </div>
            </div>
        </div>
    );
}

export default ViewAllVideos;