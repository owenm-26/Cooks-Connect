import './App.css'
import './assets/chef-hat-logo.png' 
import Recipes from './Recipes'
import { PoweroffOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
function App() {
  const [recipes, setRecipes] = useState([]);
  const ApiCall = async () => {
    const fetchRecipes = async () => {
      const apiKey = "7ea23c74b52e4fe0953ae018b0a96875";
      const ingredients = ["apple", "banana"];
      const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(
        ","
      )}&number=2&apiKey=${apiKey}`;
      console.log("starting...");
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
    // Empty dependency array to ensure useEffect runs only once
    console.log("finished!");
  };

  return (
    <>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4253/4253632.png"
        alt="logo"
        width="200px"
      ></img>
      <h1>Cooks Connect</h1>
      <p>To be implemented soon...</p>
      <h1>Recipes</h1>
      <Button type="primary" icon={<PoweroffOutlined />} onClick={ApiCall}>
        Click me!
      </Button>
      {recipes.length != 0 ? (
        <ul>
          {recipes.map((recipe, idx) => (
            <Recipes item={recipe} key={idx} />
          ))}
        </ul>
      ) : (
        <p>No button clicked (don't click it too much) </p>
      )}
    </>
  );
}

export default App
