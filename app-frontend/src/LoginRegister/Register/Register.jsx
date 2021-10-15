import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { toast } from 'react-toastify';
import axios from 'axios';
import '../Login/Login.css';
// import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const history = useHistory();

    const ShowLoginPage = () => {
        history.push('/');
    }
    return (
        <>
            return (
            <>

                <div className="login-page" >
                    <div className="form" >
                        <form className="register-form">
                            <button>create</button>
                            <p className="message">Already registered? <span onClick={ShowLoginPage}>Sign In</span></p>
                        </form>
                    </div>
                </div>
            </>

            );
        </>
    )
}
export default Register;