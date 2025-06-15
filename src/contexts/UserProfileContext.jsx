import React, { createContext, useState, useContext } from 'react';

const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: '',
    dietaryRestrictions: [],
    preferredCuisines: [],
    fitnessGoal: ''
  });

  return (
    <UserProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => useContext(UserProfileContext);
