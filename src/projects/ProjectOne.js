import React from "react";
import {
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineCodepen,
} from "react-icons/ai";
import DesignSystemsDark from "../images/DesignSystemsDark.png";
import DesignSystemsLight from "../images/DesignSystemsLight.png";

const ProjectOne = () => {
  return (
    <div className="flex flex-row w-full mb-44 bg-gray-800 p-12 rounded-md shadow font-display">
      <div className="flex-col w-1/2 flex self-center">
        <div>
          <img
            className="image w-4/6 rounded-md shadow-md"
            src={DesignSystemsLight}
            alt="DesignSystemsLight"
          />
        </div>
        <div>
          <img
            className="image w-4/6 ml-24 -mt-28 rounded-md shadow-md"
            src={DesignSystemsDark}
            alt="DesignSystemsDark"
          />
        </div>
      </div>
      <div className="text-right flex-col w-1/2">
        <h2 className="text-4xl font-bold text-red-300">Design Systems</h2>
        <h2 className="text-2xl font-bold text-gray-100 mb-8 mt-3">
          with React & Styled Components
        </h2>
        <div className="bg-gray-900 text-gray-400 p-5 rounded-md shadow font-body">
          <p className="pb-4 text-gray-300">
            Design systems include a series of reusable UI Components to develop
            new experiences.
          </p>
          <p className="text-sm">
            These reusable UI components allow teams to build scalable, complex
            & accessible user interfaces across multiple projects at a faster
            pace. They serve as tools for both designers and developers, with
            the objective of creating consistency and a clear set of shared
            goals when building websites and applications.
          </p>
        </div>
        <ul className="flex row justify-end text-gray-500 pt-6 font-body text-sm">
          <li className="technology-tag">React</li>
          <li className="technology-tag">Styled Components</li>
          <li className="technology-tag">Storybook</li>
          <li className="technology-tag">Figma</li>
        </ul>
        <div className="social-media-icons flex row justify-end text-gray-400 pt-6 pr-0">
          <div className="icon-primary">
            <a href="https://github.com/Chrys-Nicolaides">
              <AiFillGithub className="icon" />
            </a>
          </div>
          <div className="icon-primary">
            <a href="https://codepen.io/Chrys-Nicolaides">
              <AiOutlineCodepen className="icon" />
            </a>
          </div>
          <div className="icon-primary pr-0">
            <a href="https://codepen.io/Chrys-Nicolaides">
              <AiOutlineDribbble className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
