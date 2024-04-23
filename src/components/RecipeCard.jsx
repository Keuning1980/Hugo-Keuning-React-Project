import {
  Center,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";

export const RecipeCard = ({ item, onClick }) => {
  const Vegan = item.recipe.healthLabels?.filter(
    (item) =>
      item.toLowerCase() === "vegan" || item.toLowerCase() === "vegetarian"
  );

  return (
    <>
      <p> {item.recipe.label}</p>
      <img src={item.recipe.image} width={500} />
      <p>Cautions: {item.recipe.cautions} </p>
      <p>{item.recipe.mealType} </p>
      <p>{item.recipe.dishType} </p>
      {/* <p>{ item.recipe.healthLabels}</p> */}
      <p> {Vegan ? Vegan.join(" ") : " "} </p>
      <p>{item.recipe.dietLabels ? item.recipe.dietLabels.join(" ") : " "} </p>
    </>
  );
};
