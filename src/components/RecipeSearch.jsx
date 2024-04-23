import { Textinput } from "./ui/textInput";
import { useState } from "react";
import { data } from "../utils/data";
import { RecipeCard } from "./ReCipeCard";

export const RecipeSearch = () => {
  const [searchField, setSearchField] = useState(" ");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const searchResult = data.hits.filter((item) => {
    return item.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <label> Search recipe</label>
      <Textinput onChange={handleChange} />
      <p> {searchField} </p>
      {searchResult.map((item) => (
        <RecipeCard key={item.recipe.label} item={item} />
      ))}
    </>
  );
};
