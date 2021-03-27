import React from "react";
import ProjectOne from "../projects/ProjectOne";
import ProjectTwo from "../projects/ProjectTwo";
import ProjectThree from "../projects/ProjectThree";
import TemplateProject from "../projects/TemplateProject";

const Projects = () => {
  return (
    <div className="px-44 py-20 font-display">
      <div className="flex items-end pb-6 mb-20">
        <h2 className="text-2xl font-bold text-red-300 pr-4">02.</h2>
        <h2 className="text-4xl font-bold text-gray-100">
          Projects I have built
        </h2>
      </div>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <div className="flex items-end pb-6 mb-20">
        <h2 className="text-2xl font-bold text-red-300 pr-4">03.</h2>
        <h2 className="text-4xl font-bold text-gray-100">
          Architecture / UI design
        </h2>
      </div>
      <TemplateProject />
    </div>
  );
};

export default Projects;
