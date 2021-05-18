import React from "react";
import { BiFolder } from "react-icons/bi";
import { HiOutlineSparkles } from "react-icons/hi";
import Projects from "../projects/Projects";
import FeatureProject from "../projects/FeatureProject";
import Snorlax from "../pens/Snorlax";
import Fox from "../pens/Fox";
import ArchProjects from "../projects/ArchProjects";

const ProjectsPage = ({ darkTheme }) => {
  return (
    <div className="sm:mt-0 mt-20 md:px-44 md:py-20 xl:py-56 sm:px-4 sm:py-10 sm:pb-24 pb-10 font-display">
      <div className="icon-container">
        <div className="icon-circle">
          <HiOutlineSparkles className="icon" />
        </div>

        <h2 className="sections-title">Freelance project</h2>
      </div>
      <FeatureProject darkTheme={darkTheme} />

      <div className="icon-container">
        <div className="icon-circle">
          <BiFolder className="icon" />
        </div>

        <h2 className="sections-title">Dev projects</h2>
      </div>
      <Projects darkTheme={darkTheme} />
      <div className="icon-container">
        <div className="icon-circle">
          <BiFolder className="icon" />
        </div>

        <h2 className="sections-title">UI Design / Architecture projects</h2>
      </div>
      <ArchProjects darkTheme={darkTheme} />
      <div className="icon-container">
        <div className="icon-circle">
          <BiFolder className="icon" />
        </div>

        <h2 className="sections-title">CodePen Animations</h2>
      </div>
      <div className="flex md:flex-row flex-col gap-x-8 w-auto sm:mx-0 mx-8 sm:mb-44 mb-32">
        <div className="sm:w-1/2 w-full">
          <h3 className="sections-subtitle">Spirit animal</h3>
          <Snorlax darkTheme={darkTheme} />
        </div>
        <div className="sm:w-1/2 w-full ">
          <h3 className="sections-subtitle sm:pt-0 pt-16">
            What does the fox say?
          </h3>
          <Fox darkTheme={darkTheme} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
