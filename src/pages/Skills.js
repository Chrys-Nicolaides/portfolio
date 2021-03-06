import React from "react";
import Titles from "../components/Titles";
import { BsPerson } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="md:py-20 xl:py-56 sm:py-10 ">
      <div className="flex items-end sm:pb-24 pb-10 ">
        <div className="bg-gray-300 dark:bg-gray-700 bg-opacity-60 rounded-full sm:h-12 sm:w-12 h-7 w-7 flex justify-center items-center">
          <BsPerson className="text-gray-400 dark:text-gray-400 sm:h-6 sm:w-6 h-4 w-4" />
        </div>
        <h2 className="sm:text-5xl text-xl font-bold text-gray-600 dark:text-gray-200 font-display ml-4">
          My skills
        </h2>
      </div>
      <Titles />
    </div>
  );
};

export default Skills;
