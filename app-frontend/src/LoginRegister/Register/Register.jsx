import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../Login/Login.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import parsePhoneNumber from 'libphonenumber-js'
import { isValidPhoneNumber } from 'react-phone-number-input';

toast.configure();

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

    const Create = (e) => {

        e.preventDefault();

        const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        const passwordPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

        if (isValidPhoneNumber(phoneNumber)) {

            user.phonenumber = parsePhoneNumber(phoneNumber).formatInternational();
        }
        else {
            toast.error("Please enter valid phone number of length 10.", { position: toast.POSITION.BOTTOM_RIGHT });
        }

        if (!emailPattern.test(user.email)) {

            toast.error("Please enter valid email address.", { position: toast.POSITION.BOTTOM_RIGHT });

        }
        else if (!passwordPattern.test(user.password)) {

            toast.error("Please enter password according to the requirement.", { position: toast.POSITION.BOTTOM_RIGHT });

        }
        else if (user.name === '' || user.password === '' || user.email === '' ||
            user.confirmPassword === '' || user.username === '' || user.phonenumber === ''
        ) {
            toast.error("All the fields are required.", { position: toast.POSITION.BOTTOM_RIGHT });
        }
        else {
            
            if(user.password === user.confirmPassword){
                console.log(user);
            }
            else{
                toast.error("Password do not match.", { position: toast.POSITION.BOTTOM_RIGHT });
            }
        }
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
                            <button onClick={Create}>create</button>
                            <p className="message">Already registered? <span onClick={ShowLoginPage}>Sign In</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;