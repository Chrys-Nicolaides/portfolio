import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as CoralLogo } from "../images/coral-logo.svg";

const Navbar = () => {
  return (
    <div className="bg-gray-800 h-20 shadow flex items-center justify-between text-gray-300">
      <div>
        <CoralLogo />
      </div>
      <div className="flex justify-end">
        <ul className="px-4">
          <Link to="About" smooth={true} offset={-50} duration={500}>
            About
          </Link>
          <Link to="Projects" smooth={true} offset={-50} duration={500}>
            Projects
          </Link>
          <Link to="Contact" smooth={true} offset={-50} duration={500}>
            Contact
          </Link>
          {/* <Link to="">Resume</Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
