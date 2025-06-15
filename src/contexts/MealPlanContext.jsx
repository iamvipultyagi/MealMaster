import React, { createContext, useState, useContext } from 'react';

const MealPlanContext = createContext();

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const defaultPlan = days.reduce((acc, day) => {
  acc[day] = { breakfast: '', lunch: '', dinner: '' };
  return acc;
}, {});

export const MealPlanProvider = ({ children }) => {
  const [mealPlan, setMealPlan] = useState(defaultPlan);

  return (
    <MealPlanContext.Provider value={{ mealPlan, setMealPlan }}>
      {children}
    </MealPlanContext.Provider>
  );
};

export const useMealPlan = () => useContext(MealPlanContext);
