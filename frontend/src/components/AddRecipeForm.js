import { useState } from "react";
import { API_BASE_URL } from "../constants/constant";
import { useRecipeContext } from "../hoc/RecipeProvider";

export default function AddRecipeForm() {
  const { dispatch } = useRecipeContext();
  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    recipeType: "",
  });
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((d) => ({ ...d, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_BASE_URL}/api/recipes`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    } else {
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      setError(null);
      setEmptyFields([]);
      alert(`New recipe added`);
      setFormData({
        title: "",
        duration: "",
        recipeType: "",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3> Add a New Recipe</h3>

      <label>Recipe Title: </label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Recipe Duration (in mins): </label>
      <input
        type="number"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        className={emptyFields.includes("duration") ? "error" : ""}
      />

      <label>Recipe Type: </label>
      <input
        type="text"
        name="recipeType"
        value={formData.recipeType}
        onChange={handleChange}
        className={emptyFields.includes("recipeType") ? "error" : ""}
      />

      <button
        style={{
          background: "var(--primary)",
          color: "#fff",
          border: "0px",
          padding: "10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add{" "}
      </button>
      {error && (
        <div
          style={{
            padding: "10px",
            background: "#ffefef",
            border: "1px solid var(--error)",
            color: "var(--error)",
            borderRadius: "4px",
            margin: "20px auto",
          }}
        >
          {error}
        </div>
      )}
    </form>
  );
}
