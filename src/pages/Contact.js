import React from "react";
import { HiArrowUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div>
      <div className=" md:px-44 md:pt-20 md:pb-20 xl:pt-64 xl:pb-40 sm:px-4 pt-32 pb-16 sm:mx-0 mx-8">
        <div className="flex justify-center flex-col w-full h-full sm:px-8 px-0 text-center">
          <h3 className="text-gray-700 dark:text-gray-300 sm:text-4xl text-2xl font-bold font-display pb-12">
            Thank you for looking at my portfolio.
          </h3>
          <h5 className="text-gray-500 dark:text-gray-400 sm:text-2xl text-sm font-bold font-display">
            Let's start a conversation.
          </h5>
          <div className="flex justify-center pt-8">
            <a
              href="mailto:nicolaides.chrysanthe@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-primary text-red-950 dark:text-red-950 px-3 py-2 md:px-7 md:py-3.5 md:mx-5 mr-1.5 xl:mr-3 text-lg md:text-xl xl:text-2xl xl:px-8 xl:py-4 font-bold cursor-pointer hover:bg-red-300 hover:bg-opacity-80 active:bg-opacity-90 active:bg-red-400 dark:hover:bg-red-100 dark:active:bg-red-300 ">
                Email
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/chrysanthe-nicolaides-341877136/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-primary text-red-950 dark:text-red-950 px-3 py-2 md:px-7 md:py-3.5 md:mx-5 ml-1.5 xl:ml-3 text-lg md:text-xl xl:text-2xl xl:px-8 xl:py-4 font-bold cursor-pointer hover:bg-red-300 hover:bg-opacity-80 active:bg-opacity-90 active:bg-red-400 dark:hover:bg-red-100 dark:active:bg-red-300 ">
                LinkedIn
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="sm:pb-28 pb-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-full flex justify-end sm:pr-12 pr-4 cursor-pointer  outline-none focus:outline-none"
        >
          <div className="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-400 hover:bg-opacity-50 dark:hover:bg-gray-600 sm:h-10 h-8 sm:w-10 w-8 flex justify-center items-center rounded-md shadow">
            <HiArrowUp />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Contact;
