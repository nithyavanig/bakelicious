const SignUp = () => {
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
          />
        </div>
        <div className="login-con-item">
          <input
            type="password"
            className="login-txt-input"
            placeholder="Password"
            required
            maxLength="25"
          />
        </div>
        <div className="login-con-item">
          <input
            type="password"
            className="login-txt-input"
            placeholder="Re-enter Password"
            required
            maxLength="25"
          />
        </div>

        <div className="login-con-item">
          <input type="button" className="login-con-btn" value="Register" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
