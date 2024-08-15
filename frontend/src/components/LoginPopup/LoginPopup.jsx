import React from "react";
import "./LoginPopup.css";
import { useState } from "react";
import { assets } from "../../assets/assets";
const LoginPopup = ({setShowLogin}) => {
    const [loginState,setLoginState]=useState("Sign Up")
    return <div className="login-popup ">
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{loginState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>

            <div className="login-popup-inputs">

                {loginState==="Sign Up"?<input type="text" placeholder="Name" required/>:<></>}
                <input type="text" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                {loginState==="Sign Up"?<input type="password" placeholder="Confirm Password" required/>:<></>}
                {loginState==="Sign Up"?<input type="text" placeholder="Phone Number" required/>:<></>}
                <button>{loginState==="Sign Up"?"Create Account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing I afree to the terms of use & privacy policy.</p>
                </div>
                {loginState==="Login"?<p>Create a new account? <span onClick={()=>setLoginState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setLoginState("Login")}>Login here</span></p>}
            </div>
        </form>
    </div>;
};

export default LoginPopup;
