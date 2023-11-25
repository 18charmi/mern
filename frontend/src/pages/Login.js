import { useState } from "react";
import { useLogin } from "../hook/useLogin";

const Login = () => {
  const { login, isLoading, error } = useLogin();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((d) => ({ ...d, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData.email, formData.password);
  };
  return (
    <form onSubmit={handleSubmit} className="login">
      <h3>Login up</h3>

      <label>Email: </label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label>Password: </label>
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
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
        disabled={isLoading}
      >
        Login up{" "}
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
};

export default Login;
