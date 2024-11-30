import React, { useState } from 'react';

import './LoginSignup.css';


const LoginSignup = () => {

    const [action,setAction]=useState("Login");
  return (
    <div className='container'>
      <div className="Header">
        <div className="text">Sign Up</div>
        <div className="underLine"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>: <div className="input">

<img src=" "alt=""/>
<img src="" alt="" />
<input type="text" placeholder="Email Id"/>

</div>}   
        

        <div className="input">
          <img src="" alt="" />

          <input type="password"placeholder="password"/>

        </div>
      </div>
      
      <div className="forgetpassword"> Login Password
        <span>Click</span>
      </div>
      <div className="submit-container">
      <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
