import {useState} from 'react';
import { useHistory } from 'react-router-dom';
function sendotp() {

    const history = useHistory();

    const [email, setEmail] = useState('');

    const CheckEmail = (e) => {

        e.preventDefault();
        
    }
    return (
        <>
            <div className="LoginRegisterContainer">
                <div className="login-page" >
                    <div className="form" >
                        <form className="login-form">

                            <input name="email" type="text" placeholder="Enter E-Mail" />

                            <button onClick={CheckEmail}>Send OTP</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default sendotp;