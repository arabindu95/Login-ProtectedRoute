import React from "react";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  console.log("ProtectedRoute token:", token);

  if (!token) {
    console.log("No token! Redirecting to /login");
    return <Navigate to="/login" replace />;
  }

  console.log("Token found! Showing children");
  return children;
};
export default ProtectedRoute;
