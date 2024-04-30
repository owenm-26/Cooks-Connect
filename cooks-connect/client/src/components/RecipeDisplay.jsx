import { Button, Image, Layout, Typography, theme } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { Content } from "antd/es/layout/layout";

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "0 20vw",
          }}
        >
          <Button href={recipe.spoonacularSourceUrl}>Spoonacular Recipe</Button>
          <Button href={recipe.sourceUrl}>{recipe.sourceName} Recipe</Button>
        </div>
      </Content>
    </Layout>
  );
}

export default RecipeDisplay;
