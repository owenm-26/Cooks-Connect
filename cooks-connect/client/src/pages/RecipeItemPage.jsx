import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fakeRecipe } from "../../testing/fakeRecipe";
import RecipeDisplay from "../components/RecipeDisplay";
import CustomHeader from "../layout/Header";
import CustomFooter from "../layout/Footer";

function RecipeItemPage() {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_REACT_APP_SPOONACULAR_API_KEY1;

  useEffect(() => {
    //delete this "return" when using API
    // setRecipe(fakeRecipe);
    // return;
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
          if (response.status == 402) {
            console.log("Out of requests");
            return;
          }
          console.log("Response failed");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRecipeById(id);
  }, []);

  return (
    //use this to test without using API
    <>
      <CustomHeader />
      {recipe ? <RecipeDisplay recipe={recipe} /> : <p>No title</p>}
      <CustomFooter />
    </>
  );
}

export default RecipeItemPage;
