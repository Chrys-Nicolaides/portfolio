import React from "react";
import {
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineCodepen,
} from "react-icons/ai";
import ErgoTimer from "../images/ErgoTimer.png";

const ProjectTwo = () => {
  return (
    <div className="flex flex-row w-full mb-44 shadow bg-gray-800 p-12 rounded-md">
      <div className="text-left flex-col w-1/2 mr-10">
        <h2 className="text-4xl font-bold text-red-300">Ergo Timer</h2>
        <h2 className="text-2xl font-bold text-gray-100 mb-8 mt-3">
          with React & CSS Animations
        </h2>
        <div className="bg-gray-700 text-gray-300 p-5 rounded-md shadow-lg font-body text-sm">
          <p>
            Inspired by the infamous Pomodoro App, the ErgoTimer provides
            automatic switching between 'sitting' and 'standing' with focused
            times for the user to select based on the complexity of the task at
            hand. The gentle wave animations in the background promote
            relaxation and calmness while working!
          </p>
        </div>
        <ul className="flex row justify-start text-gray-500 pt-6 text-sm">
          <li className="technology-tag pl-0 pr-6">React</li>
          <li className="technology-tag pl-0 pr-6">CSS Animations</li>
          <li className="technology-tag pl-0 pr-6">Figma</li>
        </ul>
        <div className="social-media-icons flex row justify-start text-gray-400 pt-6 pr-0">
          <div className="icon-primary text-gray-300">
            <a href="https://github.com/Chrys-Nicolaides">
              <AiFillGithub className="icon" />
            </a>
          </div>
          <div className="icon-primary text-gray-300">
            <a href="https://codepen.io/Chrys-Nicolaides">
              <AiOutlineCodepen className="icon" />
            </a>
          </div>
          <div className="icon-primary text-gray-300 pr-0">
            <a href="https://codepen.io/Chrys-Nicolaides">
              <AiOutlineDribbble className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-col w-1/2 flex self-center">
        <div>
          <img
            className="image rounded-md shadow-md mt-8"
            src={ErgoTimer}
            alt="ErgoTimer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
