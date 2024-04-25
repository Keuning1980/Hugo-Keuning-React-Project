import { useState } from "react";
import { data } from "../utils/data";
import { RecipeCard } from "./RecipeCard";
import { Input } from "@chakra-ui/react";

export const RecipeSearch = () => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const searchResult = data.hits.filter((item) => {
    const labelMatch = item.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
    const healthLabelMatch = item.recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchField.toLowerCase())
    );
    return labelMatch || healthLabelMatch;
  });

  return (
    <>
      <h1> Winc Recipe Checker</h1>
      <Input placeholder={"search recipes"} onChange={handleChange} />

      {searchResult.map((item) => (
        <RecipeCard key={item.recipe.label} item={item} />
      ))}
    </>
  );
};
