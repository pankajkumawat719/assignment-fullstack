import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    // If no token, redirect to the login page
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
