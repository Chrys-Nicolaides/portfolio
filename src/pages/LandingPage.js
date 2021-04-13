import React from "react";
import { ReactComponent as HandWave } from "../images/HandWave.svg";

const LandingPage = () => {
  return (
    <div className=" md:px-44 md:py-20 xl:py-56 sm:px-4 sm:py-8 sm:mx-0 mx-8 mb-20">
      <div className="flex content-center text-gray-500 dark:text-red-400">
        <HandWave className="h-8 w-8 -mt-0.5 fill-current text-gray-500 dark:text-red-400" />
        <h3 className="greeting text-gray-500 dark:text-gray-400 font-body xl:text-lg md:text-sm xl:pb-4 sm:text-lg ml-3">
          Hello! My name is
        </h3>
      </div>
      <h1 className="name xl:text-8xl md:text-6xl text-4xl text-gray-700 dark:text-gray-100 font-display font-bold py-3 md:mb-2">
        Chrys.
      </h1>
      <h2 className="introduction xl:text-8xl md:text-6xl text-4xl text-red-300 dark:text-300 font-display font-bold xl:pb-4 sm:text-lg">
        I like to build things.
      </h2>
      <p className="description text-gray-600 dark:text-gray-400 font-body pt-7 xl:pb-20 pb-12 xl:text-lg md:text-sm text-sm xl:w-3/4 lg:w-full text-justify md:w-full sm:w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis
        condimentum ex, ut sodales libero. Nam tortor nisl, commodo vestibulum
        malesuada tincidunt, tempor vel mi. Vivamus non mi rhoncus, semper eros
        vel, consequat dolor. Pellentesque dignissim nunc ligula, quis porttitor
        quam porttitor et.
      </p>
      <button className="button-primary text-red-950 dark:text-red-950 text-sm md:text-xl xl:text-3xl px-5 py-2.5 md:px-8 md:py-4 xl:px-11 xl:py-6">
        Say Hello
      </button>
    </div>
  );
};

export default LandingPage;
