import React from "react";

const Contact = () => {
  return (
    <div className=" md:px-44 md:py-20 xl:py-56 sm:px-4 py-32 sm:mx-0 mx-8">
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
  );
};

export default Contact;
