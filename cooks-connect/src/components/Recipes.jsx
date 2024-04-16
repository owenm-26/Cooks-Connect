import { Card } from "antd";
const { Meta } = Card;

function Recipes(item) {
  console.log(item.item);
  const recipe = item.item;
  return (
    <Card
      hoverable
      key={recipe.id}
      style={{
        width: 240,
        margin: "4vh 4vw",
      }}
      cover={<img alt={recipe.title} src={recipe.image} />}
    >
      <Meta title={recipe.title} description={`Likes: ${recipe.likes}`} />
    </Card>
  );
}

export default Recipes;
