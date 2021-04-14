import React from "react";
import { BiFolder } from "react-icons/bi";
import { HiOutlineSparkles } from "react-icons/hi";
import Projects from "../projects/Projects";
import FeatureProject from "../projects/FeatureProject";
import Snorlax from "../pens/Snorlax";
import ArchProjects from "../projects/ArchProjects";

const ProjectsPage = ({ darkTheme }) => {
  return (
    <div className=" md:px-44 md:py-20 xl:py-56 sm:px-4 sm:py-8 font-display">
      <div className="flex items-end pb-24 sm:mx-0 mx-8">
        <div className="bg-gray-300 dark:bg-gray-700 bg-opacity-60 rounded-full sm:h-12 sm:w-12 h-7 w-7 flex justify-center items-center ">
          <HiOutlineSparkles className="text-gray-400 dark:text-gray-400 sm:h-6 sm:w-6 h-4 w-4" />
        </div>

        <h2 className="sm:text-5xl text-xl font-bold text-gray-600 dark:text-gray-200 font-display ml-4">
          Feature project
        </h2>
      </div>
      <FeatureProject />

      <div className="flex items-end pb-24 sm:mx-0 mx-8">
        <div className="bg-gray-300 dark:bg-gray-700 bg-opacity-60 rounded-full sm:h-12 sm:w-12 h-7 w-7 flex justify-center items-center">
          <BiFolder className="text-gray-400 dark:text-gray-400  sm:h-6 sm:w-6 h-4 w-4" />
        </div>

        <h2 className="sm:text-5xl text-xl font-bold text-gray-600 dark:text-gray-200 font-display ml-4">
          Recent projects
        </h2>
      </div>
      <Projects darkTheme={darkTheme} />
      <div className="flex items-end pb-24 sm:mx-0 mx-8">
        <div className="bg-gray-300 dark:bg-gray-700 bg-opacity-60 rounded-full sm:h-12 sm:w-12 h-7 w-7 flex justify-center items-center">
          <BiFolder className="text-gray-400 dark:text-gray-400  sm:h-6 sm:w-6 h-4 w-4" />
        </div>

        <h2 className="sm:text-5xl text-xl font-bold text-gray-600 dark:text-gray-200 font-display ml-4">
          UI Design / Architecture projects
        </h2>
      </div>
      <ArchProjects darkTheme={darkTheme} />
      <div className="flex items-end pb-24 sm:mx-0 mx-8">
        <div className="bg-gray-300 dark:bg-gray-700 bg-opacity-60 rounded-full sm:h-12 sm:w-12 h-7 w-7 flex justify-center items-center">
          <BiFolder className="text-gray-400 dark:text-gray-400  sm:h-6 sm:w-6 h-4 w-4" />
        </div>

        <h2 className="sm:text-5xl text-xl font-bold text-gray-600 dark:text-gray-200 font-display ml-4">
          CodePen aimations
        </h2>
      </div>
      <div className="w-1/2">
        <Snorlax darkTheme={darkTheme} />
      </div>
    </div>
  );
};

export default ProjectsPage;
