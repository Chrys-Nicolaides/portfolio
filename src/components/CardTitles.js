import React from "react";

const CardTitles = (props) => {
  let classes = "border-b-8 rounded-b-md ";

  const { additionalClasses, tags } = props;

  if (additionalClasses) {
    classes += " " + additionalClasses;
  }

  const multipleTags = tags?.map((tag, key) => (
    <li
      key={key}
      className="text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-4 py-1.5 pb-2.5 rounded-full mr-3 font-medium text-sm mb-2 sm:mb-0"
    >
      {tag}
    </li>
  ));

  return (
    <div
      className={
        classes +
        " w-full bg-white dark:bg-gray-700 dark:bg-opacity-30 rounded-md shadow-lg sm:p-10 p-6"
      }
    >
      {props.border}
      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-14 w-14 flex justify-center items-center fill-current">
        {props.icon}
      </div>
      <div className="bg-gray-600 dark:bg-gray-400 h-1 w-14 mt-12 mb-3 "></div>
      <h3 className="text-gray-700 dark:text-gray-300 text-3xl font-medium mb-16 font-display">
        {props.title}
      </h3>
      <ul className="flex flex-wrap sm:flex-nowrap ">{multipleTags}</ul>
    </div>
  );
};

export default CardTitles;
