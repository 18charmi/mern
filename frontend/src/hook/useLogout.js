import { useAuthContext } from "./useAuthContext";
import { useRecipeContext } from "../context/RecipeProvider";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: recipeDispatcher} = useRecipeContext();
  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout section
    dispatch({ type: "LOGOUT" });
    recipeDispatcher({type: "SET_RECIPES", payload: []})
  };
  return { logout };
};
