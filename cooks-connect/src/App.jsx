import "./App.css";
import "./assets/chef-hat-logo.png";
import Recipes from "./Recipes";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import CustomHeader from "./layout/Header";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isSuccessful, setIsSuccessful] = useState(2); // 2 is not used, 1 is worked, 0 is failed
  const ApiCall = async () => {
    const fetchRecipes = async () => {
      const apiKey = "API KEY";
      const ingredients = ["apple", "banana"];
      const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(
        ","
      )}&number=2&apiKey=${apiKey}`;
      console.log("starting...");
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          setIsSuccessful(0);
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setIsSuccessful(0);
      }
    };

    fetchRecipes();
    // Empty dependency array to ensure useEffect runs only once
    console.log("finished!");
    setIsSuccessful(1);
  };

  return (
    <>
      <CustomHeader />
      <h1>Recipes</h1>
      <Button type="primary" icon={<PoweroffOutlined />} onClick={ApiCall}>
        Click me!
      </Button>
      {isSuccessful == 1 ? (
        <ul>
          {recipes.map((recipe, idx) => (
            <Recipes item={recipe} key={idx} />
          ))}
        </ul>
      ) : isSuccessful == 2 ? (
        <p>No button clicked (don't click it too much) </p>
      ) : (
        <p>Failed! Check console for error.</p>
      )}
    </>
  );
}

export default App;
