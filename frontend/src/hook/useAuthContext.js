import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};
  