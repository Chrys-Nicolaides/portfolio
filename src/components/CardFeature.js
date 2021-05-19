import React from "react";
import Card from "../components/Card";
import { Link as RouterLink } from "react-router-dom";

const CardFeature = (props) => {
  // const [showModal, setShowModal] = useState(false);

  return (
    <Card
      additionalClasses={
        "relative sm:mb-44 mb-32 h-1/3 transition transform duration-500 hover:scale-105 ease-out sm:pb-0 pb-6 "
      }
    >
      {/* {showModal ? <CarouselProject setShowModal={setShowModal} /> : ""} */}
      <div className="overflow-hidden bg-gray-50 dark:bg-gray-700 h-1/3 sm:p-10 p-6 sm:pt-10 pt-6">
        <img src={props.image} alt={props.imageTitle} className="rounded-md" />
      </div>
      <div className="sm:h-36 h-full flex sm:flex-row flex-col w-full ">
        <div className="flex sm:w-2/3 w-full sm:px-0 px-6">
          <div className="flex flex-col rounded-md bg-red-100 text-red-400 dark:bg-gray-800 dark:text-red-300 border-2 border-red-300 dark:border-red-300 dark:border-opacity-100 text-2xl font-bold justify-center items-center absolute m-8  sm:visible invisible">
            <div className="dark:bg-red-300 dark:bg-opacity-30 px-6 py-6 ">
              {props.number}
            </div>
          </div>
          <div className="flex flex-col sm:ml-36 ml-0 mt-10 sm:w-2/3 w-auto sm:pb-6 pb-0">
            <h3 className="text-gray-700 dark:text-gray-200 2xl:text-3xl text-xl font-bold">
              {props.title}
            </h3>
            <h2 className="text-gray-500 dark:text-gray-400 2xl:text-base text-xxs font-medium tracking-tight pt-1">
              {props.subtitle}
            </h2>
          </div>
        </div>
        <div className="flex lg:justify-end lg:pt-0 pt-20 content-center sm:w-1/3 w-full items-end">
          {/* {props.buttonText && (
            <button
              className="flex justify-center items-center button-primary px-5 sm:mr-8 mr-0 ml-0 sm:w-auto w-full h-14 text-red-950 absolute lg:rounded-md rounded-t-none text-lg uppercase tracking-tight font-semibold"
              onClick={() => setShowModal(!showModal)}
            >
              {props.buttonText}
              <HiArrowRight className="ml-8" />
            </button>
          )} */}
          {props.link && (
            <RouterLink
              className="flex justify-center items-center button-primary px-5 sm:mr-8 mr-0 ml-0 sm:w-auto w-full h-14 text-red-950 absolute lg:rounded-md rounded-t-none text-lg uppercase tracking-tight font-semibold"
              to={props.link}
            >
              View Case Study
              {/* <HiArrowRight className="xl:ml-8 ml-0 xl:flex hidden" /> */}
            </RouterLink>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CardFeature;
