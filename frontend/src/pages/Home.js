import {  useEffect } from "react";
import RecipeDetail from "../components/RecipeDetail";
import AddRecipeForm from "../components/AddRecipeForm";
import { API_BASE_URL } from "../constants/constant";
import { useRecipeContext } from "../hoc/RecipeProvider";

export default function Home() {
  const { recipes, dispatch } = useRecipeContext();

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`${API_BASE_URL}/api/recipes`);
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchRecipes();
  }, [dispatch]);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gap: "100px",
      }}
    >
      <div>
        {recipes && recipes.map((d, i) => <RecipeDetail key={d._id} r={d} />)}
      </div>
      <AddRecipeForm />
    </div>
  );
}
