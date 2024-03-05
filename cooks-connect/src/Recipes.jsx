function Recipes(item) {
  console.log(item.item);
  const recipe = item.item;
  return (
    <div>
      <li key={recipe.id}>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </li>
    </div>
  );
}

export default Recipes;
