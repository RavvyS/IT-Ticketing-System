import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { toast } from "sonner";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/v1/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        // Not working
        if (json.error === "Email already in use") {
          toast.error("This email is already registered. Please use a different email.");
        }
        return;
      }

      // Storing the JWT in browser storage/local storage
      localStorage.setItem("user", JSON.stringify(json));

      // Update auth context
      dispatch({ type: "LOGIN", payload: json });

    } catch (error) {
      // Display a generic error toast for any unexpected errors
      toast.error("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
