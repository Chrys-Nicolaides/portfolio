import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as CoralLogo } from "../images/coral-logo.svg";

const Navbar = () => {
  return (
    <div className="font-heading bg-gray-800 w-full fixed shadow flex items-center justify-between text-gray-300 py-4 z-10">
      <div className="px-8">
        <CoralLogo />
      </div>
      <div className="flex justify-end p-2">
        <ul className="nav-links">
          <Link
            className="link-primary"
            to="LandingPage"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Home
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
            to="Projects"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Projects
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
          <Link className="button-primary px-4 mx-6" to="">
            Resume
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
