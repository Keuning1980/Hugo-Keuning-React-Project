import React from "react";

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
import { data } from "../utils/data";

export const RecipePage = ({ item }) => {
  // const recipeLabel= data.hits.recipe.label.map

  return (
    <div>
      <p> {item.recipe.label}</p>
      <img src={item.recipe.image} width={500} />
      <p>{item.recipe.mealType} </p>
      <p>{item.recipe.dishType} </p>
      <p>{item.recipe.dietLabels} </p>
      <p>{item.recipe.healthLabels} </p>
      <p>{item.recipe.cautions} </p>
      <p>{item.recipe.ingredientLines} </p>
      <p> CALORIES: {item.recipe.totalNutrients.ENERC_KCAL.quantity}</p>
      <p> FAT: {item.recipe.totalNutrients.FAT.quantity}</p>
      <p> PROTEIN: {item.recipe.totalNutrients.PROCNT.quantity}</p>
      <p> CHOLESTEROL: {item.recipe.totalNutrients.CHOLE.quantity}</p>
      <p> CARBS: {item.recipe.totalNutrients.CHOCDF.quantity}</p>
      <p> SODIUM: {item.recipe.totalNutrients.NA.quantity}</p>
      <p>servings :{item.recipe.yield} </p>
      <p>cookingtime :{item.recipe.totalTime} minutes</p>
    </div>
  );
};
