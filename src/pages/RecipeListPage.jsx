<<<<<<< HEAD
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

=======
import { data } from "../utils/data";
import { RecipeCard } from "../components/ReCipeCard";
import { Textinput } from "../components/ui/textInput";
import { RecipeSearch } from "../components/RecipeSearch";



export const RecipeListPage = ({ clickFn }) => {
  return (
    <>
       <RecipeSearch/>

      {data.hits.map((item) => (
        <RecipeCard clickFn={clickFn} item={item} key={item.recipe.label} />
   
      )
     
      
      
      )}
    </>
  );
};
>>>>>>> c185fbf1542ff2f117d9368fd87fd4a0e80252e8
