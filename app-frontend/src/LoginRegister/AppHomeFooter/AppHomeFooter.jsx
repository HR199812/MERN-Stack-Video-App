import react from 'react';
import { useHistory } from 'react-router-dom';
import './AppHomeFooter.css';


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

                <div class="footer-links">

                    <div class="menu">

                        <div style={{ padding: '10px', marginLeft: '10px' }}>
                            <h4>About</h4>

                            <p style={{ textAlign: 'left' }}>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                                demonstrate the visual form of a document or a typeface without relying on meaningful
                                content. Lorem ipsum may be used as a placeholder before final copy is available. It is
                                also used to temporarily replace text in a process called greeking, which allows
                                designers to consider the form of a webpage or publication, without the meaning
                                of the text influencing the design.
                            </p>
                        </div>
                    </div>

                    <div class="menu">

                        <h4 class="menu-title">Resources</h4>

                        <a href="#" class="other-links">Home</a>

                        <a href="#" class="other-links">Contact Us</a>

                        <a href="#" class="other-links">About Us</a>

                        <a href="#" class="other-links">Sign-In</a>

                        <a href="#" class="other-links">FAQ</a>

                        <a href="#" class="other-links">Privacy Policy</a>


                        <a href="#" class="other-links">Terms of use</a>

                    </div>

                </div>

                <p class="copyright">&copy; Copyright 2021 | <a href="https://instagram.com/ronakgiriraj">Patent Aide</a></p>
                <p class="copyright">Developed By | A&#38;H</p>

            </footer>

        </>
    );
}


export default ApplicationFooter;