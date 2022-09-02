import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Menu from './Menu';

const Login = () => {

    const [popupStyle, showPopup] = useState("hide")
    const [username, setusername] = useState("");
    const [password, setpassword] = useState(""); 

    const users = ["admin", "admin123"];

    const authenticate = (e) => {
        e.preventDefault()
        
        if (username===users[0] && password===users[1]) {
            navigate("/Menu");
        } else popup();
      };

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    let navigate = useNavigate();
    console.log(username);
    return (
        <div className="main">
            <div className="cover">
                <h1 className="login-page">Login Page</h1>
<<<<<<< HEAD
                <input className="L_input" type="text" placeholder="Username"  />
                <input className="L_input" type="password" placeholder="Password" />

                <div className="login-btn" onClick={() => popup()}> Login </div>
=======
                <input className="L_input" type="text" placeholder="Username" value={username} onChange={(event)=>setusername(event.target.value)}/>
                
                <input className="L_input" type="password" placeholder="Password" value={password} onChange={(event)=>setpassword(event.target.value)}/>

                <div className="login-btn" onClick={authenticate}> Login </div>
>>>>>>> 8cdf5aa9b2689daf8a92d1f6c9e8a4f8ac710e5e

                <div className={popupStyle}>
                    <h2>Login Failed</h2>
                    <p>Username or password incorrect</p>
                </div>

            </div>
        </div>
    )
}

export default Login;