import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import './ViewAllVideos.css';
import axios from 'axios';
import moment from 'moment';

function ViewAllVideos() {
    const [videosArr, SetVideosArr] = useState([]);

    const loadDataFromAPI = async () => {
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
                    {

                        videosArr.map((video, index) => {
                            return (
                                <div className='Card'>
                                    <video controls >
                                        <source src={video.VideoVideoURL} />
                                    </video>
                                    <h4>{video.VideoName}</h4><br />
                                    <h5>{video.VideoLanguage}</h5><br />
                                    <h5>{moment(video.VideoReleaseDate).format('DD MMM, YYYY')}</h5><br />
                                    <h5>{video.VideoSource}</h5>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ViewAllVideos;