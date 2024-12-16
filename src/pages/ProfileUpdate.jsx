import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfileUpdate.css';

const ProfileUpdate = () => {
  const { token } = useAuth();
  const [userData, setUserData] = useState({
    Name: '',
    Email: '',
    PhoneNumber: '',
    ProfilePicture: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('http://localhost:5000/api/users/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      }
    };

    fetchUserData();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/users/update', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      alert('Profile updated successfully!');
      navigate('/profile'); // Redirect to profile page after update
    } else {
      alert('Failed to update profile.');
    }
  };

  return (
    <div className="profile-update-container">
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit} className="profile-update-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="Name" value={userData.Name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="Email" value={userData.Email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" name="PhoneNumber" value={userData.PhoneNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture URL:</label>
          <input type="text" id="profilePicture" name="ProfilePicture" value={userData.ProfilePicture} onChange={handleChange} />
        </div>
        <div className="button-group">
          <button type="submit" className="update-button">Update Profile</button>
          <button type="button" className="cancel-button" onClick={() => navigate('/profile')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdate;