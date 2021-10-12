import { useState } from 'react';
import './AddVideo.css';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

toast.configure();

function AddVideo() {


    const [fieldValue, setFieldValue] = useState({
        videoName: '',
        videoReleaseData: '',
        videoLanguage: '',
        videoThumbNail: '',
        videoVideo: '',
        videoSource: ''
    });

    const ChangeEvent = (e) => {

        let value = e.target.value;
        let name = e.target.name;

        setFieldValue((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }

    const AddVideo = (e) => {

        e.preventDefault();


        const videoData = {
            videoName: fieldValue.videoName,
            videoReleaseData: fieldValue.videoReleaseData,
            videoLanguage: fieldValue.videoLanguage,
            videoSource: fieldValue.videoSource,
            videoVideoURL: fieldValue.videoVideoURL
        }


        try {
            axios.post('http://localhost:5001/videos/add', videoData)
                .then(res => {
                    toast.success(res.data, { position: toast.POSITION.BOTTOM_RIGHT });
                })
                .catch(err => {
                    toast.error(err, { position: toast.POSITION.BOTTOM_RIGHT });
                });
        }
        catch (error) {

        }

    }
    return (
        <div>
            <NavBar />
            <div className='AddVideoContainer'>
                <div className='AddVideoForm'>
                    <div>
                        <p>Trailer Name:</p>
                        <input value={fieldValue.videoName} name="videoName" type="text" placeholder="video name" onChange={ChangeEvent} />
                    </div>
                    <div>
                        <p>Year of Release:</p>
                        <input type="date" value={fieldValue.videoReleaseData} name="videoReleaseData" onChange={ChangeEvent} />
                    </div>
                    <div>
                        <p>Language:</p>
                        <input type="text" placeholder="video language" value={fieldValue.videoLanguage} name="videoLanguage" onChange={ChangeEvent} />
                    </div>
                    <div>
                        <p>Source:</p>
                        <input type="text" placeholder="video source" value={fieldValue.videoSource} name="videoSource" onChange={ChangeEvent} />
                    </div>
                    <div>
                        <p>Add Trailer URL:</p>
                        <textarea value={fieldValue.videoVideoURL} name="videoVideoURL" onChange={ChangeEvent} />
                    </div>
                    <div className='ButtonDiv'>
                        <button onClick={AddVideo}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddVideo;