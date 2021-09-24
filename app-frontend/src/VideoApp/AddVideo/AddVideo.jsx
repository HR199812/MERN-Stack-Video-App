import react from 'react';
import './AddVideo.css';
import NavBar from '../NavBar/NavBar';
import TextField from '@material-ui/core/TextField';


function AddVideo() {
    return (
        <div>
            <NavBar />
            <div className='AddVideoContainer'>
                <div className='AddVideoForm'>
                    <div>
                        <p>Movie Name:</p>
                        <input type="text" placeholder="movie name" />
                    </div>
                    <div>
                        <p>Year of Release:</p>
                        <input type="date" />
                    </div>
                    <div>
                        <p>Language:</p>
                        <input type="text" placeholder="movie name" />
                    </div>
                    <div>
                        <p>Upload Thumbnail:</p>
                        <input type="file" placeholder="movie name" />
                    </div>
                    <div>
                        <p>Upload Video fIle:</p>
                        <input type="file" placeholder="movie name" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddVideo;