import { Card } from "antd";
const { Meta } = Card;

function Recipes(item) {
  // console.log(item.item);
  const recipe = item.item;
  return (
    <Card
      hoverable
      key={recipe.id}
      style={{
        width: "25%",
        margin: "4vh 2vw",
      }}
      cover={<img alt={recipe.title} src={recipe.image} />}
      onClick={(e) => {
        e.preventDefault();
        console.log("Should go to own page here");
      }}
    >
      <Meta title={recipe.title} description={`Likes: ${recipe.likes}`} />
    </Card>
  );
}

export default Recipes;
