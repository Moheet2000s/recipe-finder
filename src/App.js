// src/App.js
import React, { useState } from "react";
import axios from "axios";
import RecipeSearch from "./components/RecipeSearch";
import RecipeList from "./components/RecipeList";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const APP_ID = "5928f0e7";
    const APP_KEY = "456e9d292f1ac5838d8f1a210d6d3396";
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    try {
      const response = await axios.get(url);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error("Error fetching recipes", error);
    }
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-10">Recipe Finder</h1>
      <RecipeSearch fetchRecipes={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
