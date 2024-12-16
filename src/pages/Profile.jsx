import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../styles/Profile.css'; // Import your CSS for styling

const Profile = () => {
  const { token, logout } = useAuth(); // Get the token and logout function from context
  const [user, setUser] = useState(null); // State to hold user data
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
        } else {
          console.error('Failed to fetch user data');
          if (response.status === 401) {
            logout(); // Log out the user if unauthorized
            navigate('/login'); // Redirect to login page
          }
        }
      } catch (error) {
        console.error('An error occurred while fetching user data:', error);
      }
    };

    fetchUserData(); // Call the function to fetch user data
  }, [token, logout, navigate]); // Add logout and navigate to dependencies

  if (!user) {
    return <div>Loading user data...</div>; // Show loading message while fetching user data
  }

  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <img src={user.ProfilePicture} alt="User  Profile" className="user-profile-picture" />
      <div className="user-profile-details">
        <p><strong>Name:</strong> {user.Name}</p>
        <p><strong>Email:</strong> {user.Email}</p>
        <p><strong>Phone Number:</strong> {user.PhoneNumber}</p>
      </div>
      <h2>Booked Events</h2>
      {user.bookedEvents.length > 0 ? (
        <ul className="booked-events-list">
          {user.bookedEvents.map(event => (
            <li key={event.EventID} className="booked-event-item">
              <strong>{event.EventName}</strong> - {event.BookingDate} ({event.Status})
            </li>
          ))}
        </ul>
      ) : (
        <p>No booked events found.</p>
      )}
      <div className="profile-action-buttons">
        <button className="logout-button" onClick={() => logout(navigate)}>Logout</button>
        <button className="update-profile-button" onClick={() => navigate('/profile/update')}>Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;