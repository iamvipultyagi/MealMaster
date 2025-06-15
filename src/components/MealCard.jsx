import React from 'react';
import '../styles/comonents.css';
const MealCard = ({ title, onClick }) => (
  <div className="meal-card" onClick={onClick}>
    <h4>{title}</h4>
  </div>
);

export default MealCard;
