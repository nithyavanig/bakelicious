import React, { useState } from "react";
import "../../styles/login.css";
import { FbIcon, TwitIcon, GoogleIcon } from "../../styles/icons/Icons.jsx";

const Login = () => {
  const [uName, setUName] = useState("");
  const [pwd, setPwd] = useState("");
  // const [remUser, setRemUser] = useState(false);

  const updateUserName = (event) => setUName(event.target.value);
  const updatePwd = (event) => setPwd(event.target.value);
  const handleSubmit = () => {
    // AuthService.authenticate(uName, pwd)
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-con-item">
          <input
            type="text"
            className="login-txt-input"
            placeholder="Username"
            required
            maxLength="10"
            onChange={updateUserName}
          />
        </div>
        <div className="login-con-item">
          <input
            type="password"
            className="login-txt-input"
            placeholder="Password"
            required
            maxLength="25"
            onChange={updatePwd}
          />
        </div>
        <div className="login-con-item">
          <input
            type="checkbox"
            value="remmemberUser"
            className="login-con-checkbox"
          />
          <div className="label-cred">
            <span className="login-con-label-for-pwd">Remember Me</span>
            <span className="login-con-label-for-pwd">Forgot Password</span>
          </div>
        </div>
        <div className="login-con-item">
          <input type="button" className="login-con-btn" value="Login" />
        </div>
        <div className="login-con-label-subtext">Or Login using</div>
        <div className="login-con-fb-tw-goo-icons">
          <FbIcon />
          <GoogleIcon />
          <TwitIcon />
        </div>
      </div>
      <div className="sign-up-container">
        <span className="login-con-label-subtext">Or Sign up using</span>
        <input
          type="button"
          className="sign-up-btn"
          value="SIGN UP"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
