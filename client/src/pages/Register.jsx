import React from "react";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [localError, setLocalError] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((oldval) => {
      return !oldval;
    });
  };

  const toggleConfirmPassword = () => {
    setConfirmPassword((oldval) => {
      return !oldval;
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // allfield cheack
    const allfields = Object.values(data).every((val) => val.trim() !== "");
    if (!allfields) {
      alert("please fiil all the fields");
      return;
    }

    // password matching cheack
    if (data.password !== data.confirmPassword) {
      setLocalError("password missmatch");
      return;
    }
    setLocalError("");

    try {
      const res = await axios.post(
        "http://localhost:8000/api/user/register",
        data,
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        setData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
      navigate("/login");
      console.log(res.data);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError(" ");
      }
    }
  };

  const allfields = Object.values(data).every((val) => val.trim() !== "");

  return (
    <section className="flex items-center justify-center md:min-h-[calc(100vh-80px-60px)] md:bg-gradient-to-r from bg-gray-500 via-slate-500 to-blue-300">
      <div className=" w-full md:w-[30%] max-w-lg  mx-auto bg-white rounded-md outline-none px-8 py-4 ">
        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="grid gap-2">
            <label htmlFor="name"> Name :</label>
            <input
              type="text"
              value={data.name}
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              autoFocus
              className="h-8 p-2 bg-gray-200 border-gray-200 border rounded focus:border-gray-400 outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email"> Email :</label>
            <input
              type="text"
              value={data.email}
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="h-8 p-2 bg-gray-200 border-gray-200 border rounded focus:border-gray-400 outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="password"> Password :</label>
            <div className="flex h-8 p-2 bg-gray-200 border border-gray-200  rounded  items-center justify-center focus-within:border-gray-400 ">
              <input
                type={showPassword ? "text" : "password"}
                value={data.password}
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                className=" w-full outline-none placeholder:text-gray-400"
              />
              <div onClick={togglePassword} className="cursor-pointer">
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="confirmPassword"> ConfirmPassword :</label>
            <div className="flex h-8 p-2 bg-gray-200 border border-gray-200  rounded  items-center justify-center focus-within:border-gray-400 ">
              <input
                type={confirmPassword ? "text" : "password"}
                value={data.confirmPassword}
                name="confirmPassword"
                placeholder="confirm password"
                onChange={handleChange}
                className="w-full outline-none placeholder:text-gray-400"
              />
              <div onClick={toggleConfirmPassword} className="cursor-pointer">
                {confirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>

          <div className="h-2">
            {error && <p className="text-red-300 text-center">{error}</p>}
            {localError && (
              <p className="text-red-300 text-center">{localError}</p>
            )}
          </div>

          <button
            className={`${
              allfields ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600"
            } block h-8  mt-4 mx-auto w-full text-white  text-center rounded-md`}
          >
            Register
          </button>
        </form>
        <div className="bg-black h-[1px] mt-2 w-[200px] block mx-auto"></div>
        <p className="my-2 text-center">
          already have an account ?{" "}
          <Link
            to={"/login"}
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
