import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex flex-col gap-2 container mx-auto p-4 md:text-center md:flex-row md:justify-evenly">
        <p>© All Rights Resaerverd</p>
        <div className="flex  gap-4 text-2xl  md:text-gray-600 ">
          <a href="" className="md:hover:text-gray-700">
            <FaFacebook />
          </a>

          <a href="" className="md:hover:text-gray-700">
            <FaInstagram />
          </a>

          <a href="" className="md:hover:text-gray-700 ">
            <FaLinkedin />
          </a>

          <a href="" className="md:hover:text-gray-700">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
