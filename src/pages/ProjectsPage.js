import React from "react";
import { BiFolder } from "react-icons/bi";
import { HiOutlineSparkles } from "react-icons/hi";
import Projects from "../components/Projects";
import FeatureProject from "../components/FeatureProject";
import Snorlax from "../pens/Snorlax";
// import ProjectOne from "../projects/ProjectOne";
// import ProjectTwo from "../projects/ProjectTwo";
// import ProjectThree from "../projects/ProjectThree";
// import ArchProjectOne from "../projects/ArchProjectOne";
// import ArchProjectTwo from "../projects/ArchProjectTwo";
// import ArchProjectThree from "../projects/ArchProjectThree";

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
      {/* <ProjectOne /> */}
      {/* </div> */}
      {/* <ProjectOne /> */}
      {/* <ProjectTwo />
      <ProjectThree />
      
      <ArchProjectOne />
      <ArchProjectTwo />
      <ArchProjectThree /> */}

      <div className="flex items-end pb-24 sm:mx-0 mx-8">
        <div className="bg-gray-300 dark:bg-gray-700 bg-opacity-60 rounded-full sm:h-12 sm:w-12 h-7 w-7 flex justify-center items-center">
          <BiFolder className="text-gray-400 dark:text-gray-400  sm:h-6 sm:w-6 h-4 w-4" />
        </div>

        <h2 className="sm:text-5xl text-xl font-bold text-gray-600 dark:text-gray-200 font-display ml-4 ">
          Recent projects
        </h2>
      </div>
      <Projects darkTheme={darkTheme} />
      <div className="Component-Snorlax my-20">
        <Snorlax darkTheme={darkTheme} />
      </div>
    </div>
  );
};

export default ProjectsPage;
