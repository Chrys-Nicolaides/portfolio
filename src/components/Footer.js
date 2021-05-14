import React from "react";
import {
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineCodepen,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="font-heading bg-white dark:bg-gray-850 w-full fixed bottom-0 xl:h-16 md:h-12 text-gray-300 flex items-center justify-between md:px-8 xl:px-12 sm:visible invisible shadow-md">
      <div className="social-media-icons flex ">
        <div className="icon-primary">
          <a
            href="https://github.com/Chrys-Nicolaides"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="icon" />
          </a>
        </div>
        <div className="icon-primary">
          <a
            href="https://www.linkedin.com/in/chrysanthe-nicolaides-341877136/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </div>
        <div className="icon-primary">
          <a
            href="https://codepen.io/Chrys-Nicolaides"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineCodepen className="icon" />
          </a>
        </div>
        <div className="icon-primary">
          <a
            href="https://dribbble.com/ChrysNicol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineDribbble className="icon" />
          </a>
        </div>
      </div>
      <div>
        <a
          className="link-primary xl:text-base md:text-sm pr-0 text-gray-500 dark:text-gray-400 border-none hover:border-none font-medium "
          href="mailto:nicolaides.chrysanthe@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          nicolaides.chrysanthe@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
