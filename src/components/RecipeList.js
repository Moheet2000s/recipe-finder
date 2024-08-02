// src/components/RecipeList.js
import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe.recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
