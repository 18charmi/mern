import { API_BASE_URL } from "../constants/constant";
import { useRecipeContext } from "../hoc/RecipeProvider";
import { Trash } from "./Icons";
import { formatDistanceToNow } from "date-fns"
const pStyles = {
  margin: "0",
  fontSize: "0.9em",
  color: "#555",
};
export default function RecipeDetail({ r }) {
  const { dispatch } = useRecipeContext();
  const handleClick = async () => {
    const response = await fetch(`${API_BASE_URL}/api/recipes/${r._id}`, {
      method: "DELETE",
    });

    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_RECIPE", payload: json });
    }
  };
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "4px",
        margin: "20px auto",
        padding: "20px",
        position: "relative",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
      }}
    >
      <h4
        style={{
          margin: "0 0 10px 0",
          fontSize: "1.2em",
          color: "var(--primary)",
        }}
      >
        {r.title}
      </h4>
      <p style={pStyles}>
        <strong>{r.duration} mins</strong>
      </p>
      <p style={pStyles}>
        <strong>{r.recipeType}</strong>
      </p>
      <p style={pStyles}>{formatDistanceToNow(new Date(r.createdAt))}</p>

      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          cursor: "pointer",
          // background: "#f1f1f1",
          padding: "6px",
          // borderRadius: "50%",
          color: "#333",
          border: "0px",
          backgroundColor: "transparent"
        }}
        onClick={handleClick}
      >
        <Trash/>
        {/* delete */}
      </button>
    </div>
  );
}
