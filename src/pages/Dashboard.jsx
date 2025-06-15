import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebaseConfig';
import { signOut } from 'firebase/auth';
import '..styles/dashboard.css';

const Dashboard = () => {
  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = '/';
  };

  return (
    <div className="dashboard">
      <h1>Welcome to MealMaster!</h1>
      <p>Plan your meals, track nutrition, and stay healthy 🚀</p>

      <div className="dashboard-links">
        <Link to="/profile-setup" className="dashboard-button">Complete Your Profile</Link>
        <Link to="/meal-planner" className="dashboard-button">Go to Meal Planner</Link>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
