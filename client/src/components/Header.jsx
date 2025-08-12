import React from "react";
import logo from "../assets/airbnb.png";
import Search from "../components/Search";
import Login from "../components/Login";
import Cart from "../components/Cart";
import Logout from "../pages/Logout";
import { Link, useLocation } from "react-router-dom";
import useMobile from "../hooks/useMobile";

const Header = () => {
  const location = useLocation();
  const isMobile = useMobile();
  const isSearchPage = location.pathname === "/search";

  const token = localStorage.getItem("accessToken");

  return (
    <header className="md:flex h-24 md:h-20 md:shadow-md sticky top-0  md:justify-center mt-2 md:mt-0 bg-white ">
      {!(isMobile && isSearchPage) && (
        <div className="flex container mx-auto items-center justify-between  px-3 md:px-0">
          {/* logo */}
          <div className="flex justify-center ">
            <Link to={"/"}>
              {/* desktop image */}
              <img
                src={logo}
                alt="logo"
                height={60}
                width={160}
                className="hidden md:block "
              />

              {/* mobile image */}
              <img
                src={logo}
                alt="logo"
                height={20}
                width={90}
                className="flex md:hidden"
              />
            </Link>
          </div>

          {/* search */}
          <div className="hidden md:block ">
            <Search />
          </div>

          {/* login / logout icon*/}
          <div className="flex gap-5">
            {token ? <Cart /> : <login />} {token ? <Logout /> : <Login />}
          </div>
        </div>
      )}

      <div className="h-[1px] w-full bg-gray-200 mt-2 md:hidden"></div>
      <div className="container mx-auto block md:hidden px-2">
        <Search />
      </div>
    </header>
  );
};

export default Header;
