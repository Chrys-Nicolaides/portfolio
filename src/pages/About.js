import React from "react";
import { BsPerson } from "react-icons/bs";
import PortfolioPic from "../images/PortfolioPic.webp";

const Skills = () => {
  return (
    <div className="md:py-20 xl:py-10 sm:py-8 ">
      <div className="flex items-end sm:pb-24 pb-10 sm:pt-24 pt-0">
        <div className="bg-gray-300 dark:bg-gray-700 bg-opacity-60 rounded-full sm:h-12 sm:w-12 h-7 w-7 flex justify-center items-center">
          <BsPerson className="text-gray-400 dark:text-gray-400 sm:h-6 sm:w-6 h-4 w-4" />
        </div>
        <h2 className="sm:text-5xl text-xl font-bold text-gray-600 dark:text-gray-200 font-display ml-4">
          About me
        </h2>
      </div>

      <div className="flex lg:flex-row flex-col gap-10 lg:w-full">
        <div className="lg:w-1/2 2xl:w-2/3 w-full">
          <p className="cs-body sm:text-base lg:text-lg 2xl:text-xl text-sm w-full pb-4 pt-0">
            I'm a UX/UI designer with a background in Architecture. I graduated
            with my Master’s Degree in 2016 and have gained 6 years of
            experience working in the field.
          </p>
          <p className="cs-body sm:text-base lg:text-lg 2xl:text-xl text-sm w-full pb-4">
            Today, I am eager to transition into web development and focus on
            not only web design but also building impactful and meaningful
            experiences for users.
          </p>
          <p className="cs-body sm:text-base lg:text-lg 2xl:text-xl text-sm w-full pb-4">
            I believe there is significant overlap between architecture and UX
            design, as both are people-focused fields striving to create
            meaningful experiences for users - be it in physical or digital
            environments. I have a passion for problem-solving, a knack for
            focusing on the finer details, and I enjoy turning complex problems
            into intuitive solutions. While I have experience in design, I am a
            pragmatist and appreciate that UX/UI design and development are
            reliant on each other. I strive to grow in both areas with the goal
            of becoming more well rounded when working on anything on the web.
          </p>
        </div>
        <div
          className="
        w-full  px-0 order-first
        sm:px-4 
        lg:w-1/2 lg:order-none
        2xl:w-1/3"
        >
          <img src={PortfolioPic} alt="portrait" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
