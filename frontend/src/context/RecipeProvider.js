import { createContext, useContext, useReducer } from "react";
const RecipeContext = createContext();

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "SET_RECIPES":
      return {
        recipes: action.payload,
      };

    case "CREATE_RECIPE":
      return {
        recipes: [action.payload, ...state.recipes],
      };

    case "DELETE_RECIPE":
      return {
        recipes: state.recipes.filter((r) => r._id !== action.payload._id),
      };

    default:
      return state;
  }
};
export default function RecipeContextProvider({ children }) {
  const [state, dispatch] = useReducer(recipeReducer, {
    recipes: null,
  });

  return (
    <RecipeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
}

// custom hook
export const useRecipeContext = () => {
  const context = useContext(RecipeContext);

  if (!context) {
    throw Error(
      "useRecipeContext must be used inside an RecipeContextProvider"
    );
  }

  return context;
};
