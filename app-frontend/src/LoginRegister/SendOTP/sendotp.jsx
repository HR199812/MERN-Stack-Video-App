function sendotp() {
    return (
        <>
            <div className="LoginRegisterContainer">
                <div className="login-page" >
                    <div className="form" >
                        <form className="login-form">

                            <input name="email" type="text" placeholder="Enter E-Mail" />

                            <button>Send OTP</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default sendotp;