import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Dashboard from './pages/Dashboard';
import ProfileSetup from './features/auth/ProfileSetup';
import MealPlanner from './pages/MealPlanner';

// Inside <Routes>


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/meal-planner" element={<MealPlanner />} />
      <Route path="/profile-setup" element={<ProfileSetup />} />
    </Routes>
  );
}

export default App;
