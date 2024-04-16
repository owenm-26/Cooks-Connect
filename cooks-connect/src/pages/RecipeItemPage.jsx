import React from "react";
import { useParams } from "react-router-dom";

function RecipeItemPage() {
  const { id } = useParams();
  return (
    <div>
      <h2>Recipe Details</h2>
      <p>Recipe ID: {id}</p>
      {/* Display other recipe details */}
    </div>
  );
}

export default RecipeItemPage;
