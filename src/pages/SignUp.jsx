import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-left">
        <img
          src="/path-to-your-background-image.jpg"
          alt="Event background"
          className="background-image"
        />
      </div>
      <div className="signup-right">
        <div className="signup-box">
          <h1>
            Create New Account
          </h1>
          <p>Please enter details</p>
          <form className="signup-form">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-options">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the <a href="/terms">Terms & Conditions</a>
              </label>
            </div>
            <button type="submit" className="signup-button">Signup</button>
          </form>
          <p className="switch-page">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
