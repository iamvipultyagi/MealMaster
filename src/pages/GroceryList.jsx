import React, { useEffect } from 'react';
import { useGrocery } from '../contexts/GroceryContext';

const GroceryList = () => {
  const { groceryList, setGroceryList } = useGrocery();

  useEffect(() => {
    // Simulate generating list from meal plan
    setGroceryList(["Eggs", "Chicken", "Rice", "Spinach"]);
  }, []);

  return (
    <div className="page grocery-list">
      <h2>Your Grocery List</h2>
      <ul>
        {groceryList.map((item, index) => (
          <li key={index}><input type="checkbox" /> {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;