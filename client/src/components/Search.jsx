import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardBackspace } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useMobile from "../hooks/useMobile";

const Search = () => {
  const location = useLocation();
  const [issearch, setissearch] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const searchPage = location.pathname === "/search";
    setissearch(searchPage);
  }, [location]);

  const navigate = useNavigate();
  const redirectSearchPage = () => {
    navigate("/search");
    console.log("useMobile", useMobile);
  };
  return (
    <div className=" bg-gray-100 flex w-full min-w-[300px] md:min-w-[420px] h-8 md:h-10 rounded-full md:rounded-lg border border-gray-200 items-center overflow-hidden cursor-text mt-3 md:mt-0 shadow-md md:shadow-none ">
      <div>
        {isMobile && issearch ? (
          <Link to={"/"} className="flex justify-center  p-2 text-gray-400">
            <MdKeyboardBackspace className="w-5 h-5 md:w-7 md:h-7 bg-gray-100 rounded-full hover:bg-white" />
          </Link>
        ) : (
          <button className="flex justify-center  p-2 text-gray-400">
            <IoSearch className="w-5 h-5 md:w-7 md:h-7" />
          </button>
        )}
      </div>

      <div className="w-93 " onClick={redirectSearchPage}>
        {!issearch ? (
          <div>
            <TypeAnimation
              sequence={[
                `search"milk"`,
                1000,
                `search"oils"`,
                1000,
                `search"sugar"`,
                1000,
                `search"salt"`,
                1000,
                `search"paneer"`,
                1000,
                `search"breads"`,
                1000,
                `search"daal"`,
                1000,
                `search"rice"`,
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="search here....."
              autoFocus
              className="w-full h-full outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
