import React from 'react';
import '../styles/comonents.css';
const DayColumn = ({ day, meals, onChange }) => {
  return (
    <div className="day-column">
      <h3>{day}</h3>
      {["breakfast", "lunch", "dinner"].map((meal) => (
        <div className="meal-entry" key={meal}>
          <label>{meal}</label>
          <input
            type="text"
            value={meals[meal]}
            onChange={(e) => onChange(day, meal, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default DayColumn;
