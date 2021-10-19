import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { toast } from 'react-toastify';
import axios from 'axios';
import '../Login/Login.css';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import parsePhoneNumber from 'libphonenumber-js'


function Register() {

    const history = useHistory();

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phonenumber: '',
    });

    const [phoneNumber, setPhoneNumber] = useState('');

    const ShowLoginPage = () => {
        history.push('/');
    }

    const Create = () => {
        user.phonenumber = parsePhoneNumber(phoneNumber).formatInternational();
        alert(user.phonenumber);
    }

    const inputValueChange = (e) => {

        setUser((preValue) => {
            return {
                ...preValue,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <>
            <div className="LoginRegisterContainer">
                <div className="login-page" >
                    <div className="form" >
                        <form className="register-form">
                            <input type="text" onChange={inputValueChange} value={user.name} name="name" placeholder="Name" />
                            <input type="E-Mail" onChange={inputValueChange} value={user.email} name="email" placeholder="e-mail" />
                            <input type="text" onChange={inputValueChange} value={user.username} name="username" placeholder="User-Name" />
                            <input type="password" onChange={inputValueChange} value={user.password} name="password" placeholder="Password" />
                            <input type="password" onChange={inputValueChange} value={user.confirmPassword} name="confirmPassword" placeholder="Confirm-Password" />
                            <PhoneInput
                                placeholder="Enter phone number"
                                defaultCountry="IN"
                                value={phoneNumber}
                                onChange={setPhoneNumber} />

                            <span>
                                {/* <select name="countrycode" id="countrycodeselect">
                                </select>
                                <input id="countrycodeinput" onChange={inputValueChange} value={user.phonenumber} name="phonenumber" type="phone" placeholder="Phone Number" /> */}
                            </span>
                            <button onClick={() => Create}>create</button>
                            <p className="message">Already registered? <span onClick={ShowLoginPage}>Sign In</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;