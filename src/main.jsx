import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AuthProvider } from './contexts/AuthContext';
import { UserProfileProvider } from './contexts/UserProfileContext';
import { MealPlanProvider } from './contexts/MealPlanContext';
import { RecipeProvider } from './contexts/RecipeContext';
import { GroceryProvider } from './contexts/GroceryContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProfileProvider>
        <MealPlanProvider>
          <RecipeProvider>
            <GroceryProvider>
              <App />
            </GroceryProvider>
          </RecipeProvider>
        </MealPlanProvider>
      </UserProfileProvider>
    </AuthProvider>
  </React.StrictMode>
);
