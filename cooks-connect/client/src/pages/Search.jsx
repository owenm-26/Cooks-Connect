import "../App.css";
import "../assets/chef-hat-logo.png";
import Recipes from "../components/Recipes";

import { useState } from "react";
import CustomHeader from "../layout/Header";
import InputBox from "../components/InputBox";
import { fakeRecipe } from "../../testing/fakeRecipe";
import CustomFooter from "../layout/Footer";

function Search() {
  const [recipes, setRecipes] = useState([]);
  const [isSuccessful, setIsSuccessful] = useState(2); // 2 is not used, 1 is worked, 0 is failed
  const [input, setInput] = useState("");
  const ApiCall = async (ingredients) => {
    const fetchRecipes = async () => {
      const apiKey = import.meta.env.VITE_REACT_APP_SPOONACULAR_API_KEY;
      const limit = 2;
      const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(
        ","
      )}&number=${limit}&apiKey=${apiKey}`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          setIsSuccessful(0);
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipes(data);
        setIsSuccessful(1);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setIsSuccessful(0);
      }
    };
    fetchRecipes();
    // Empty dependency array to ensure useEffect runs only once
    setIsSuccessful(1);
  };

  const fakeApiCall = () => {
    console.log("fake call started");
    console.log("fake:", fakeRecipe);
    setRecipes([fakeRecipe, fakeRecipe]);
    setIsSuccessful(1);
    console.log("fake call worked");
    return;
  };

  const handleInput = () => {
    // const ingredients = ["apple", "banana"];
    if (input == [""]) {
      alert("Please enter at least one ingredient!");
      return;
    }
    const ingredients = input.split(",").map((item) => item.trim());
    console.log(ingredients);

    //uncomment to activate API
    ApiCall(ingredients);
    // console.log("running fake");
    // fakeApiCall();
  };

  return (
    <>
      <CustomHeader />
      <h1>Recipes</h1>
      <InputBox setInput={setInput} handleInput={handleInput} />
      {isSuccessful == 1 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "100%",
            background: "rgba(240, 240, 240)",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2vh",
          }}
        >
          {recipes.map((recipe, idx) => (
            <Recipes item={recipe} key={idx} />
          ))}
        </div>
      ) : isSuccessful == 2 ? (
        <p>No button clicked (don't click it too much) </p>
      ) : (
        <p>Failed! Check console for error.</p>
      )}
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <CustomFooter />
      </div>
    </>
  );
}

export default Search;
