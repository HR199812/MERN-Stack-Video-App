import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import AppFooter from '../AppHomeFooter/AppHomeFooter';

toast.configure();

function Login() {

    const history = useHistory();

    const serverString = 'http://localhost:5001/';

    const [userLogin, setUserLogin] = useState(
        {
            username: '',
            userpass: ''
        }
    );


    const showRegistrationPage = () => {
        history.push('/register');
    }
    const showForgotPassswordPage = () => {
        history.push('/sendotp');
    }

    // Function to set value of username and password
    let UpdateLoginFields = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setUserLogin((preValue) => {

            console.log(preValue);

            return {
                ...preValue,
                [name]: value

            }
        });
    }


    let LoginUser = (event) => {
        event.preventDefault();

        if (userLogin.username === '' || userLogin.userpass === '') {
            toast.error('Both The Fields are required', { position: toast.POSITION.BOTTOM_RIGHT });
        }
        else {
            const user = { email: userLogin.username, password: userLogin.userpass };

            console.log(user);
            try {
                axios.post(`${serverString}users/login`, user)
                    .then(res => {
                        console.log(res);
                        if (res.data !== 'Invalid Credentials') {
                            console.log(res.data);

                            const userIdKey = 'UserId';
                            const UserNameKey = 'UserName';
                            const userToken = 'UserToken';
                            localStorage.setItem(userIdKey, res.data.user.id);
                            localStorage.setItem(UserNameKey, res.data.user.username);
                            localStorage.setItem(userToken, res.data.token);

                            toast.success('Login Successful', { position: toast.POSITION.BOTTOM_RIGHT });

                            history.push({
                                pathname: `/user/all-videos`
                            });

                        }
                        else {
                            toast.error(res.data, { position: toast.POSITION.BOTTOM_RIGHT });
                        }
                    }).catch(error => toast.error(`${error}`, { position: toast.POSITION.BOTTOM_RIGHT }));
            } catch (err) {
                toast.error(err, { position: toast.POSITION.BOTTOM_RIGHT })
            }
        }
    }

    return (
        <>
            <div className="LoginRegisterContainer">
                <div className="login-page" >
                    <div className="form" >
                        <form className="login-form">

                            <input name="username" type="text" placeholder="username"
                                onChange={UpdateLoginFields}
                                value={userLogin.username} />

                            <input name="userpass" type="password" placeholder="password"
                                onChange={UpdateLoginFields}
                                value={userLogin.userpass} />

                            <button onClick={LoginUser}>login</button>
                            <p className="message"><span onClick={showForgotPassswordPage}>Forgot Password?</span></p>
                            <p className="message">Not registered? <span onClick={showRegistrationPage}>Create an account</span></p>
                        </form>
                    </div>
                </div>
            </div>
            <AppFooter />
        </>

    );
}

export default Login;