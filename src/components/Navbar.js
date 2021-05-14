import React from "react";
import { Link } from "react-scroll";

import { RiMoonLine, RiSunLine } from "react-icons/ri";
// import LandingPage from "../pages/LandingPage";

const Navbar = ({ darkTheme, themeToggle }) => {
  return (
    <nav className="navbar font-heading bg-white dark:bg-gray-850 w-full fixed shadow flex items-center justify-between text-gray-600 dark:text-gray-300 xl:py-6 md:py-4 z-10">
      <div className="navbar-nav md:px-8 xl:px-12 flex">
        <div className="nav-logo h-14 w-14 bg-opacity-70 bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-gray-400 rounded-md shadow font-semibold text-3xl flex justify-center items-center pb-0.5 pl-0.5">
          cn.
        </div>
        <button
          onClick={() => themeToggle(!darkTheme)}
          className="theme-text flex items-center content-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 outline-none focus:outline-none text-sm pl-16 font-italic"
        >
          {darkTheme ? "Pssst, too dark?" : "Pssst, too light?"}
          {darkTheme ? (
            <RiMoonLine className="theme-icon h-5 w-5 ml-2" />
          ) : (
            <RiSunLine className="theme-icon h-5 w-5 ml-2" />
          )}
        </button>
      </div>
      <div className="navbar-links flex justify-end sm:mx-4">
        <ul className="nav-links ">
          <Link
            className="link-primary active:text-red-300 dark:active:text-red-200"
            to="LandingPage"
            smooth={true}
            offset={-50}
            duration={500}
          >
            {/* {<LandingPage /> ? "" : "Home"} */}
            {/* {LandingPage ? "" : "Home"} */}
            Home
          </Link>

          <Link
            className="link-primary"
            to="Projects"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="link-primary"
            to="About"
            smooth={true}
            offset={-50}
            duration={500}
          >
            About
          </Link>
          <Link
            className="link-primary"
            to="Contact"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </Link>
          <Link
            className="button-primary text-red-950 dark:text-red-950 px-3 py-2 md:px-7 md:py-3.5 md:mx-5 xl:mr-12 xl:ml-8 sm:text-xs md:text-xl xl:text-2xl xl:px-8 xl:py-4 font-bold cursor-pointer hover:bg-red-300 hover:bg-opacity-80 active:bg-opacity-90 active:bg-red-400 dark:hover:bg-red-100 dark:active:bg-red-300 "
            to=""
          >
            Resume
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
