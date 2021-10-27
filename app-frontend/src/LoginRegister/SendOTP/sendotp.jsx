import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppFooter from '../AppHomeFooter/AppHomeFooter';

toast.configure();

function SendOTP() {

    const history = useHistory();

    const [email, setEmail] = useState('');

    const serverString = 'http://localhost:5001/';

    const SetEmailValue = (e) => {

        setEmail(e.target.value);
    }

    const CheckEmail = (e) => {

        e.preventDefault();

        try {
            axios.post(`${serverString}resetpass/sendotp`, { email }).then(res => {
                console.log(res);
                if (res.data.message) {
                    toast.error(res.data.message, { position: toast.POSITION.BOTTOM_RIGHT });
                }
                else {
                    history.push('/resetpassword');
                    toast.success(res.data, { position: toast.POSITION.BOTTOM_RIGHT });
                }
            }).catch(err => {

            });
        } catch (err) {

        }
    }
    return (
        <>
            <div className="LoginRegisterContainer">
                <div className="login-page" >
                    <div className="form" >
                        <form className="login-form">

                            <input name="email" type="text" name="email" value={email} onChange={SetEmailValue} placeholder="Enter E-Mail" />

                            <button onClick={CheckEmail}>Send OTP</button>
                        </form>
                    </div>
                </div>
            </div>
            <AppFooter />
        </>
    )
}

export default SendOTP;