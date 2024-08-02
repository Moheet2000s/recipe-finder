// src/components/RecipeSearch.js
import React, { useState } from "react";

const RecipeSearch = ({ fetchRecipes }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    fetchRecipes(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center mb-5">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter ingredient"
        className="border p-2 rounded-l-lg"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-lg">
        Search
      </button>
    </form>
  );
};

export default RecipeSearch;
