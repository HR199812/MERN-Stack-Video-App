import react from 'react';
import './NavBar.css';
import ViewAllVideos from '../ViewAllVideos/ViewAllVideos';
import AddVideo from '../AddVideo/AddVideo';
import { useHistory } from 'react-router-dom';

function NavBar() {


    const history = useHistory();

    const ShowAllVideos = () => {
        history.push('/');
    }
    const ShowAddNew = () => {
        history.push('/add-new');
    }

    return (
        <nav className="NavBar">
            <h1 className="ncb" onClick={ShowAllVideos}>Video App</h1>
            <ul>
                <li><span className="viedoAppSpan" onClick={ShowAllVideos}>Show All</span></li>
                <li><span className="viedoAppSpan" onClick={ShowAddNew}>Add New</span></li>
            </ul>
        </nav>
    );
}

export default NavBar;