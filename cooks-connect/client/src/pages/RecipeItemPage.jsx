import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeItemPage() {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_REACT_APP_SPOONACULAR_API_KEY;
  const getRecipeById = async (id) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setRecipe(data);
        console.log("Recipe logged");
      } else {
        console.log("Response failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipeById(id);
  }, [id]);

  return (
    <div>
      <h2>Recipe Details</h2>
      <p>Recipe ID: {id}</p>
      {recipe ? <p>{recipe.title}</p> : <p>No title</p>}
      {/* Display other recipe details */}
    </div>
  );
}

export default RecipeItemPage;
