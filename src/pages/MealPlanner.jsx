import React, { useState } from 'react';
import "../styles/Mealplanner.css";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const MealPlanner = () => {
  const [weeklyPlan, setWeeklyPlan] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = { breakfast: "", lunch: "", dinner: "" };
      return acc;
    }, {})
  );

  const handleChange = (day, mealType, value) => {
    setWeeklyPlan((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: value
      }
    }));
  };

  const handleSave = () => {
    console.log("Saved Plan:", weeklyPlan);
    alert("Meal plan saved (to console for now)");
  };

  return (
    <div className="planner-container">
      <h2>Weekly Meal Planner</h2>
      <div className="planner-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="planner-day">
            <h3>{day}</h3>
            <div className="meal-block">
              <label>Breakfast</label>
              <input type="text" value={weeklyPlan[day].breakfast} onChange={(e) => handleChange(day, 'breakfast', e.target.value)} />
            </div>
            <div className="meal-block">
              <label>Lunch</label>
              <input type="text" value={weeklyPlan[day].lunch} onChange={(e) => handleChange(day, 'lunch', e.target.value)} />
            </div>
            <div className="meal-block">
              <label>Dinner</label>
              <input type="text" value={weeklyPlan[day].dinner} onChange={(e) => handleChange(day, 'dinner', e.target.value)} />
            </div>
          </div>
        ))}
      </div>
      <button className="save-btn" onClick={handleSave}>Save Plan</button>
    </div>
  );
};

export default MealPlanner;
