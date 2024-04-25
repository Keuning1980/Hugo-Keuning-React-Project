import { useState } from "react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipeListPage = ({clickFn}) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);

 
  };
  console.log(typeof clickFn)
  return (
    <>
      <RecipeSearch onSearch={handleSearch} />
      {searchResults.map((item) => (
        <RecipeCard clickFn={clickFn} item={item} key={item.recipe.label}/>
      ))}
    </>
  );
};

