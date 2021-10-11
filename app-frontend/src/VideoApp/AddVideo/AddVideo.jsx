import { useState } from 'react';
import './AddVideo.css';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

function AddVideo() {


    const [thumbNail, setThumbNail] = useState();
    const [video, setVideo] = useState();

    const [fieldValue, setFieldValue] = useState({
        movieName: '',
        movieReleaseData: '',
        movieLanguage: '',
        movieThumbNail: '',
        movieVideo: ''
    });

    const ChangeEvent = (e) => {

        let value = e.target.value;
        let name = e.target.name;

        if (name === 'movieThumbNail') {
            setThumbNail(e.target.files[0]);
        }
        if (name === 'movieVideo') {
            setVideo(e.target.files[0]);
        }
        setFieldValue((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }

    const AddVideo = (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("MovieName", fieldValue.movieName);
        formData.append("MovieReleaseData", fieldValue.movieReleaseData);
        formData.append("MovieLanguage", fieldValue.movieLanguage);
        formData.append("MovieThumbNail", fieldValue.movieThumbNail.split('\\').pop().split(' ').join('_'));
        formData.append("MovieVideoFile", fieldValue.movieVideo.split('\\').pop().split(' ').join('_'));
        formData.append("file", thumbNail);
        formData.append("file", video);

        const videoData = {
            MovieName: fieldValue.movieName,
            MovieReleaseData: fieldValue.movieReleaseData,
            MovieLanguage: fieldValue.movieLanguage,
            MovieThumbNail: fieldValue.movieThumbNail,
            MovieVideoFile: fieldValue.movieVideo
        }


        for(var par of formData.entries()){
            console.log(par);
        }

        try{
            axios.post('http://localhost:5001/videos/add', formData)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
        catch(error){

        }

        // axios({
        //     method: 'post',
        //     url: 'http://localhost:5001/videos/add',
        //     data: formData
        // }).then(res => console.log(res))
        //     .catch(err => console.log(err));
        // console.log(fieldValue);
    }
    return (
        <div>
            <NavBar />
            <div className='AddVideoContainer'>
                <div className='AddVideoForm'>
                    <div>
                        <p>Movie Name:</p>
                        <input value={fieldValue.movieName} name="movieName" type="text" placeholder="movie name" onChange={ChangeEvent} />
                    </div>
                    <div>
                        <p>Year of Release:</p>
                        <input type="date" value={fieldValue.movieReleaseData} name="movieReleaseData" onChange={ChangeEvent} />
                    </div>
                    <div>
                        <p>Language:</p>
                        <input type="text" placeholder="movie language" value={fieldValue.movieLanguage} name="movieLanguage" onChange={ChangeEvent} />
                    </div>
                    <div>
                        <p>Upload Thumbnail:</p>
                        <input type="file" value={fieldValue.movieThumbNail} name="movieThumbNail" onChange={ChangeEvent} />
                    </div>
                    <div>
                        <p>Upload Video fIle:</p>
                        <input type="file" value={fieldValue.movieVideo} name="movieVideo" onChange={ChangeEvent} />
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