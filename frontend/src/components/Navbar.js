import { Link } from "react-router-dom";
import { useLogout } from "../hook/useLogout";
import { useAuthContext } from "../hook/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <header
      style={{
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#333",
            textDecoration: "none",
          }}
        >
          <h1>Recipe Buddy</h1>
        </Link>
        <nav>
          {user ? (
            <div>
              <span>{user.email}</span>
              <button
                style={{
                  border: "1px solid var(--primary)",
                  color: "var(--primary)",
                  backgroundColor: "#fff",

                  padding: "10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginLeft: "10px"
                }}
                onClick={handleClick}
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                style={{
                  color: "#333",
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
              <Link
                to="/signup"
                style={{
                  color: "#333",
                  textDecoration: "none",
                }}
              >
                Signup
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
