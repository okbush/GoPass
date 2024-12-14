// Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-right">
        <div className="login-box">
          <h1>Welcome to GoPass</h1>
          <p>Please login here</p>
          <form className="login-form">
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="example@email.com" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <p className="switch-page">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
