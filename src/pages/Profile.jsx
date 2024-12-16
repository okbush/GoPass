import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../styles/Profile.css'; // Import your CSS for styling

const Profile = () => {
  const { token, logout } = useAuth(); // Get the token and logout function from context
  const [user, setUser] = useState(null); // State to hold user data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate(); // Use navigate for redirection

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Send token in Authorization header
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
          setName(data.name); // Ensure these keys match your API response
          setEmail(data.email);
          setPhoneNumber(data.phoneNumber);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('An error occurred while fetching user data:', error);
      }
    };

    fetchUserData(); // Call the function to fetch user data
  }, [token]);

  // Handle form submission to update user details
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Send token in Authorization header
        },
        body: JSON.stringify({ name, email, phoneNumber }),
      });

      if (response.ok) {
        alert('Profile updated successfully!');
        const updatedUser = await response.json(); // Fetch updated user data
        setUser(updatedUser);
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('An error occurred while updating the profile:', error);
    }
  };

  // Handle logout
  const handleLogout = () => {
    logout(); // Call the logout function from context
    navigate('/login'); // Redirect to login page
  };

  if (!user) {
    return <div>Loading user data...</div>; // Show loading message while fetching user data
  }

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <img src={user.profilePicture} alt="Profile" className="profile-picture" />
      <form onSubmit={handleUpdate} className="profile-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button type="submit" className="update-button">Update Profile</button>
      </form>
      <button onClick={handleLogout} className="logout-button">Log Out</button>
    </div>
  );
};

export default Profile;