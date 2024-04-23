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
