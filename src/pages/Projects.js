import React from "react";
import ProjectOne from "../projects/ProjectOne";
import ProjectTwo from "../projects/ProjectTwo";
import ProjectThree from "../projects/ProjectThree";
import ArchProjectOne from "../projects/ArchProjectOne";
import ArchProjectTwo from "../projects/ArchProjectTwo";
import ArchProjectThree from "../projects/ArchProjectThree";

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
          Architecture / UI Design
        </h2>
      </div>
      <ArchProjectOne />
      <ArchProjectTwo />
      <ArchProjectThree />
    </div>
  );
};

export default Projects;
