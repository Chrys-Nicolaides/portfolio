import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import Card from "../components/Card";
import { Link as RouterLink } from "react-router-dom";

const CardLarge = (props) => {
  const [showModal, setShowModal] = useState(false);

  const CarouselProjects = props.project;

  const { darkTheme } = props;

  return (
    <Card
      additionalClasses={
        "sm:mb-44 mb-16 transition transform duration-500 hover:scale-105 ease-out sm:pb-0 pb-6 card-max-height"
      }
      darkTheme={darkTheme}
    >
      {showModal ? (
        <CarouselProjects setShowModal={setShowModal} darkTheme={darkTheme} />
      ) : (
        ""
      )}
      <div className="overflow-hidden bg-gray-100 dark:bg-gray-700 dark:bg-opacity-10">
        <img
          srcSet={`${props.image} 2x`}
          src={props.image}
          alt={props.imageTitle}
          className="transform -rotate-12 origin-top-right sm:-translate-y-16 translate-y-2 sm:-translate-x-4 -translate-x-2"
        />
      </div>
      <div className="sm:h-36 h-full flex lg:flex-row flex-col w-full">
        <div className="flex flex-col rounded-md bg-red-100 text-red-400 dark:bg-gray-800 dark:text-red-300 border-2 border-red-300 dark:border-red-300 dark:border-opacity-100 text-2xl font-bold justify-center items-center absolute m-8  sm:visible invisible">
          <div className="dark:bg-red-300 dark:bg-opacity-30 px-6 py-6 ">
            {props.number}
          </div>
        </div>
        <div className="flex flex-col sm:ml-36 ml-6 mt-10 sm:w-2/3 w-auto sm:pb-20 pb-0">
          <h3 className="text-gray-700 dark:text-gray-200 2xl:text-3xl text-xl font-bold">
            {props.title}
          </h3>
          <h2 className="text-gray-500 dark:text-gray-400 2xl:text-base text-base font-medium tracking-tight pt-1">
            {props.subtitle}
          </h2>
        </div>
        <div className="flex lg:justify-end sm:pt-0 pt-20 content-center w-full items-end">
          {/* {props.buttonText && (
            <button
              className="flex justify-center items-center button-primary px-5 sm:mr-8 mr-0 ml-0 lg:w-auto w-full h-14 text-red-950 absolute lg:rounded-md rounded-t-none text-lg uppercase tracking-tight font-semibold"
              onClick={() => setShowModal(!showModal)}
            >
              {props.buttonText}
              <HiArrowRight className="ml-8  sm:flex hidden" />
            </button>
          )} */}
          {props.link && (
            <RouterLink
              className="flex justify-center items-center button-primary px-5 sm:mr-8 mr-0 ml-0 lg:w-auto w-full h-14 text-red-950 absolute lg:rounded-md rounded-t-none text-lg uppercase tracking-tight font-semibold"
              to={props.link}
            >
              View Gallery
              <HiArrowRight className="ml-8 sm:flex hidden" />
            </RouterLink>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CardLarge;
