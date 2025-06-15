import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/comonents.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>MealMaster</h1>
    <div className="nav-links">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/meal-planner">Meal Planner</Link>
      <Link to="/grocery-list">Grocery List</Link>
    </div>
  </nav>
);

export default Navbar;
