import React, { useState } from 'react';
import './profile.css';

const ProfileSetup = () => {
  const [diet, setDiet] = useState('');
  const [allergies, setAllergies] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later: Save to Firestore
    alert(`Saved Profile:
    Diet: ${diet}
    Allergies: ${allergies}
    Goal: ${goal}`);
  };

  return (
    <div className="profile-setup-container">
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Dietary Preference</label>
        <select value={diet} onChange={(e) => setDiet(e.target.value)} required>
          <option value="">Select</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="keto">Keto</option>
          <option value="none">None</option>
        </select>

        <label>Allergies</label>
        <input type="text" value={allergies} onChange={(e) => setAllergies(e.target.value)} placeholder="e.g. peanuts, dairy" />

        <label>Fitness Goal</label>
        <select value={goal} onChange={(e) => setGoal(e.target.value)} required>
          <option value="">Select</option>
          <option value="weight-loss">Weight Loss</option>
          <option value="muscle-gain">Muscle Gain</option>
          <option value="maintenance">Maintenance</option>
        </select>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileSetup;
