import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/login");
  };
  return (
    <div className=" flex items-center ">
      <button onClick={redirect}>
        <FaRegCircleUser className="w-5 h-5 md:w-7 md:h-7 md:hidden" />
        <p className="hidden md:block border px-5 py-1 rounded-2xl "> login </p>
      </button>

      {/* <button className="md:flex hidden justify-center gap-2 items-center bg-green-700 hover:bg-green-800 p-2 rounded-md text-white  ">
        <div className="animate-bounce">
          <TiShoppingCart size={24} />
        </div>
        <div>My cart</div>
      </button> */}
    </div>
  );
};

export default Login;
