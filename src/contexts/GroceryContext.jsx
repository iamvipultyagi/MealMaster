import React, { createContext, useState, useContext } from 'react';

const GroceryContext = createContext();

export const GroceryProvider = ({ children }) => {
  const [groceryList, setGroceryList] = useState([]);

  return (
    <GroceryContext.Provider value={{ groceryList, setGroceryList }}>
      {children}
    </GroceryContext.Provider>
  );
};

export const useGrocery = () => useContext(GroceryContext);
