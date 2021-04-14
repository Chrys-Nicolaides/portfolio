import React from "react";
import { HiArrowRight } from "react-icons/hi";

const CardLarge = (props) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-md shadow-md relative w-5/6 mb-44 sm:mx-0 mx-8">
      <div className="overflow-hidden bg-gray-100 dark:bg-gray-700 dark:bg-opacity-0 h-96">
        <img
          src={props.image}
          alt={props.imageTitle}
          className="transform -rotate-12 origin-top-right inset-0"
        />
      </div>
      <div className="sm:h-36 h-full flex sm:flex-row flex-col w-full">
        <div className="flex flex-col rounded-md bg-red-100 text-red-400 dark:bg-gray-800 dark:text-red-300 border-2 border-red-300 dark:border-red-300 dark:border-opacity-100 text-2xl font-bold justify-center items-center absolute m-8  sm:visible invisible">
          <div className="dark:bg-red-300 dark:bg-opacity-30 px-6 py-6 ">
            {props.number}
          </div>
        </div>
        <div className="flex flex-col sm:ml-36 ml-6 mt-10 w-full sm:pb-6 pb-0">
          <h3 className="text-gray-700 dark:text-gray-200 2xl:text-3xl text-lg font-bold">
            {props.title}
          </h3>
          <h2 className="text-gray-500 dark:text-gray-400 2xl:text-lg text-sm font-medium tracking-tight pt-1">
            {props.subtitle}
          </h2>
        </div>
        <div className="flex justify-end content-center w-full">
          <button className="flex items-center button-primary px-5 mr-8 h-14 text-red-950 absolute rounded-md text-lg uppercase tracking-tight font-semibold">
            {props.buttonText}
            <HiArrowRight className="ml-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardLarge;
