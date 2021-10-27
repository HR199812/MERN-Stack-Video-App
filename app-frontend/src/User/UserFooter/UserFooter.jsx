import react from 'react';
import { useHistory } from 'react-router-dom';


function ApplicationFooter() {

    const history = useHistory();

    const ShowAboutUs = () => {
        history.push('/about-us');
    }
    const ShowHome = () => {
        history.push('/');
    }
    const ShowContactUs = () => {
        history.push('/contact-us');
    }
    const ShowLoginPage = () => {
        history.push('/login');
    }
    return (
        <>
            <footer>


                <div class="sm-handle">

                    <a href="" class="sm-button">

                        <i class="fa fa-instagram">	</i>

                    </a>

                    <a href="" class="sm-button">

                        <i class="fa fa-linkedin">	</i>

                    </a>

                    <a href="" class="sm-button">

                        <i class="fa fa-facebook-f">	</i>

                    </a>

                    <a href="" class="sm-button">

                        <i class="fa fa-twitter">	</i>

                    </a>

                    <a href="" class="sm-button">

                        <i class="fa fa-github">	</i>

                    </a>

                </div>

                <p class="copyright">&copy; Copyright 2021 | <a href="https://instagram.com/ronakgiriraj">Patent Aide</a></p>
                <p class="copyright">Developed By | A&#38;H</p>
            </footer>

        </>
    );
}


export default ApplicationFooter;