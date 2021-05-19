import React from "react";

const CardSmall = (props) => {
  const { tags, icons } = props;

  const multipleTags = tags?.map((tag, key) => (
    <li
      key={key}
      className="text-red-400 dark:text-red-300 bg-red-100 border-red-300 dark:bg-red-300 dark:border-red-300 dark:bg-opacity-25 dark:border-opacity-100 border px-4 py-1.5 pb-2 rounded-full mr-3 font-medium whitespace-nowrap text-xs  mb-2 sm:mb-0 sm:visible invisible"
    >
      {tag}
    </li>
  ));

  const multipleIcons = icons?.map((icon, key) => (
    <div
      key={key}
      className=" sm:visible invisible bg-gray-200 dark:bg-gray-700 dark:bg-opacity-60 rounded-full h-7 w-7 flex justify-center items-center mr-4 transition duration-500 ease-out transform hover:-translate-y-1 md:hover:scale-110 md:scale-75 xl:scale-125 xl:hover:scale-150"
    >
      <li className="text-gray-500 hover:text-gray-700  dark:text-gray-400 dark:hover:text-gray-100 active:text-red-400 dark:active:text-red-300 sm:pr-0 md:pr-0 transform hover:-translate-y-0 cursor-pointer">
        {icon}
      </li>
    </div>
  ));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-8 relative sm:mb-44 mb-2 transition transform duration-500 hover:scale-105 ease-out">
      <ul className="flex flex-wrap sm:flex-nowrap sm:visible invisible">
        {multipleTags}
      </ul>
      <div className="overflow-hidden h-48 sm:h-40 absolute left-0 right-0 sm:top-auto top-0 sm:p-10 p-6 bg-white dark:bg-gray-800">
        <img
          src={props.image}
          alt={props.imageTitle}
          key={props.image.key}
          className="rounded-md shadow-md "
          // className="rounded-md shadow-md transform sm:-rotate-12 rotate-0 origin-top-right "
        />
      </div>
      <div className="rounded-md bg-red-100 text-red-400 dark:bg-gray-800 dark:text-red-300 border-2 border-red-300 dark:border-red-300 dark:border-opacity-100 text-2xl font-bold  flex justify-center items-center absolute top-44 mt-4 sm:visible invisible">
        <div className="dark:bg-red-300 dark:bg-opacity-30 px-6 py-6 sm:visible invisible">
          {props.number}
        </div>
      </div>
      <h3 className="text-gray-700 dark:text-gray-200 2xl:text-3xl text-xl font-bold pb-3 sm:mt-64 mt-32">
        {props.title}
      </h3>
      <h2 className="text-gray-500 dark:text-gray-400 text-base font-medium tracking-tight">
        {props.subtitle}
      </h2>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <ul className="card-icons pt-8 sm:pb-24 pb-6 mr-6 sm:visible invisible">
          {multipleIcons}
        </ul>
      </a>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <button className="button-primary w-full h-14 text-red-950 absolute bottom-0 left-0 rounded-b-md rounded-t-none text-lg uppercase tracking-tight font-semibold ">
          {props.buttonText}
        </button>
      </a>
    </div>
  );
};

export default CardSmall;
