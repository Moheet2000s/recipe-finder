// src/components/RecipeCard.js
import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-lg m-2 p-5 w-full sm:w-1/2 lg:w-1/3">
      <img
        src={recipe.image}
        alt={recipe.label}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-semibold mt-2">{recipe.label}</h3>
      <p className="mt-2">{recipe.source}</p>
      <a
        href={recipe.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 block"
      >
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
