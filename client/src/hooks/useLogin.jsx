import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    // using fetch API instead of Axios
    const response = await fetch("http://localhost:5000/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // storing the JWT in browser storage/local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
