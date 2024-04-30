import { Button, Image, Layout, Typography, theme } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fakeRecipe } from "../../testing/fakeRecipe";

function RecipeDisplay({ recipe }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  console.log("recipe:", recipe);

  return (
    <Layout>
      <Content>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            margin: "3vh 10vw",
          }}
        >
          {recipe.glutenFree === true ? (
            <img
              style={{ width: "5vw", margin: "0 2vw" }}
              src="../assets/glutenFree.png"
              alt="glutenFree"
            />
          ) : (
            <p style={{ margin: "2vh 2vw" }}>not glutenFree</p>
          )}
          {recipe.vegetarian === true ? (
            <img
              style={{ width: "5vw", margin: "0 2vw" }}
              src="../assets/vegetarian.png"
              alt="vegetarian"
            />
          ) : (
            <p style={{ margin: "2vh 2vw" }}>not vegetarian</p>
          )}
          {recipe.vegan === true ? (
            <img
              style={{ width: "5vw", margin: "0 2vw" }}
              src="../assets/vegan.png"
              alt="vegan"
            />
          ) : (
            <p style={{ margin: "2vh 2vw" }}>not vegan </p>
          )}
          {recipe.dairyFree === true ? (
            <img
              style={{ width: "5vw", margin: "0 2vw" }}
              src="../assets/dairyFree.png"
              alt="dairyFree"
            />
          ) : (
            <p style={{ margin: "2vh 2vw" }}>not dairy free</p>
          )}
        </div>

        <Typography.Title>{recipe.title}</Typography.Title>
        <Image
          style={{ border: `5px solid ${colorBgContainer}` }}
          src={recipe.image}
          alt="Recipe Picture"
        />
        <div
          style={{
            margin: "2vh 10vw",
            textAlign: "center",
            fontFamily: "sans-serif",
            background: colorBgContainer,
            padding: "1vw",
            borderRadius: "1vw",
          }}
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        />
        <Typography.Title>Recipes</Typography.Title>
        <ButtonGroup>
          <Button href={recipe.spoonacularSourceUrl}>Spoonacular Recipe</Button>
          <Button href={recipe.sourceUrl}>{recipe.sourceName} Recipe</Button>
        </ButtonGroup>
      </Content>
    </Layout>
  );
}

function RecipeItemPage() {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_REACT_APP_SPOONACULAR_API_KEY1;

  useEffect(() => {
    //delete this "return" when using API
    setRecipe(fakeRecipe);
    return;
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
    <>{recipe ? <RecipeDisplay recipe={recipe} /> : <p>No title</p>}</>
  );
}

export default RecipeItemPage;
