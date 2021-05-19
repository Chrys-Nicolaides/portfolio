import React from "react";
import { ReactComponent as HandWave } from "../images/HandWave.svg";

const LandingPage = () => {
  return (
    <div className="md:pt-52 pt-8 md:pb-36 pb-8 sm:mb-0 mb-20">
      <div className="flex content-center text-red-600 dark:text-gray-400">
        <HandWave className="sm:h-8 sm:w-8 h-6 w-6 -mt-0.5 fill-current text-red-500" />
        <h3 className="greeting text-gray-500 dark:text-gray-400 font-body font-medium xl:text-lg md:text-sm xl:pb-4 pb-2 sm:text-lg ml-3">
          Hello! My name is
        </h3>
      </div>
      <h1 className="name xl:text-7xl md:text-6xl text-4xl text-gray-700 dark:text-gray-100 font-display font-bold py-3 md:mb-2">
        Chrys.
      </h1>
      <h2 className="introduction xl:text-7xl md:text-6xl text-4xl text-red-300 dark:text-300 font-display font-bold xl:pb-4">
        I design to solve problems.
      </h2>
      <p className="description text-gray-600 dark:text-gray-400 font-body sm:pt-7 pt-10 xl:pb-20 pb-12 xl:text-lg md:text-sm text-sm w-full">
        I am a Johannesburg based UX/UI designer with an extensive background in
        architecture. I enjoy the intricacies of design and how it impacts user
        experience on multiple levels. My experience in both architecture &
        interior architecture have given me a better understanding of creating
        better user experiences on a macro and micro scale, which I am excited
        to apply in a new UX design role.
      </p>
      <a
        href="mailto:ux.chrys@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button-primary text-red-950 dark:text-red-950 text-sm md:text-xl xl:text-3xl px-5 py-2.5 md:px-8 md:py-4 xl:px-11 xl:py-6">
          Say Hello
        </button>
      </a>
    </div>
  );
};

export default LandingPage;
