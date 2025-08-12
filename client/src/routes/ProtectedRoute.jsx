import React from "react";
import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("accessToken");
//   console.log(localStorage.getItem("accessToken"));

//   if (!token) {
//     return <Navigate to="/login" />;
//   }
//   return children;
// };

// export default ProtectedRoute;

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

// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const token = window.localStorage.getItem("accessToken");
//   return token === "true" ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;
