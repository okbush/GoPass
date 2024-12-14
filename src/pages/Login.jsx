import React from 'react';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome to <span className="brand-name">GoPass</span> 👋</h1>
        <p>Please login here</p>
        <form className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="example@email.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="**********" />
          </div>
          <div className="form-options">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
