import react from 'react';
import './NavBar.css';
import ViewAllVideos from '../ViewAllVideos/ViewAllVideos';
import AddVideo from '../AddVideo/AddVideo';
import { useHistory } from 'react-router-dom';

function NavBar() {


    const history = useHistory();

    const ShowAllVideos = () => {
        history.push('/user/all-videos');
    }
    const ShowAddNew = () => {
        history.push('/user/add-new');
    }
    const Logout = () => {
        localStorage.clear();
        history.push('/');
    }

    return (
        <nav className="NavBar">
            <h1 className="ncb" onClick={ShowAllVideos}>Video App</h1>
            <ul>
                <li><span className="viedoAppSpan" onClick={ShowAllVideos}>Show All</span></li>
                <li><span className="viedoAppSpan" onClick={ShowAddNew}>Add New</span></li>
                <li><span className="viedoAppSpan" onClick={Logout}>Logout</span></li>
            </ul>
        </nav>
    );
}

export default NavBar;