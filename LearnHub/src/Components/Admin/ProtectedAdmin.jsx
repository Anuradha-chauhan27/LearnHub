import { Navigate } from "react-router-dom";

export const ProtectedAdmin = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // User not logged in
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // User is not admin
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

