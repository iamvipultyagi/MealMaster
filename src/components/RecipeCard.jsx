import React from 'react';
import '../styles/comonents.css';

const RecipeCard = ({ recipe, onSelect }) => (
  <div className="recipe-card" onClick={() => onSelect(recipe)}>
    <h4>{recipe.name}</h4>
    <p>{recipe.calories} kcal</p>
  </div>
);

export default RecipeCard;
