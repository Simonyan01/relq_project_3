import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    let navigate = useNavigate();
    return (
        <div className="main">
            <div className="cover">
                <h1 className="login-page">Login Page</h1>
                <input className="L_input" type="text" placeholder="Username" />
                <input className="L_input" type="password" placeholder="Password" />

                <div className="login-btn" onClick={() => { navigate("/Menu") }}  > Login </div>

                <div className={popupStyle}>
                    <h3>Login Failed</h3>
                    <p>Username or password incorrect</p>
                </div>

            </div>
        </div>
    )
}

export default Login;