import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { ChakraProvider } from "@chakra-ui/react";

import { RecipeListPage } from "./pages/RecipeListPage";
import { data } from "./utils/data";
import { RecipeSearch } from "./components/RecipeSearch";

export const App = () => {
  const [selectItem, setSelectedItem] = useState();

  //  const item=data.hits[7]
  return (
    <>
      <ChakraProvider>
     
        {selectItem ? <RecipePage item={selectItem} /> : <RecipeListPage />}
      </ChakraProvider>
    </>
  );
};
