import React from "react";
import { useState, useEffect } from "react";

const useMobile = (breakPoint = 768) => {
  const [isMobile, setisMobile] = useState(window.innerWidth < breakPoint);

  const handlewindowresize = () => {
    const cheacksize = window.innerWidth < breakPoint;
    setisMobile(cheacksize);
  };

  useEffect(() => {
    handlewindowresize();

    window.addEventListener("resize", handlewindowresize);
    return () => {
      window.removeEventListener("resize", handlewindowresize);
    };
  }, []);
  return isMobile;
};

export default useMobile;
