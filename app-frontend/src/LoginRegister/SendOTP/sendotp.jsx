import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
function SendOTP() {

    const history = useHistory();

    const [email, setEmail] = useState('');

    const SetEmailValue = (e) => {

        setEmail(e.target.value);
    }
    
    const CheckEmail = (e) => {

        e.preventDefault();
        alert(email);
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
        </>
    )
}

export default SendOTP;