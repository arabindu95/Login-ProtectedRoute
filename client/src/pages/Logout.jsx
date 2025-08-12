import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    console.log("After remove:", localStorage.getItem("accessToken"));
    navigate("/login");
  };
  return (
    <button
      onClick={logout}
      className="border px-5 py-1 rounded-2xl text-white bg-red-600 hover:bg-red-700"
    >
      Logout
    </button>
  );
};

export default Logout;
