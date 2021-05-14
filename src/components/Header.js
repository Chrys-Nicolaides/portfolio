import React from "react";

const Header = (props) => {
  const { tags } = props;

  const multipleTags = tags?.map((tag, key) => (
    <li
      key={key}
      className="text-red-400 dark:text-red-300 bg-red-100 border-red-300 dark:bg-red-300 dark:border-red-300 dark:bg-opacity-25 dark:border-opacity-100 border px-4 py-1.5 pb-1.5 rounded-full font-medium whitespace-nowrap text-xs"
    >
      {tag}
    </li>
  ));

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-start w-full">
        <div className="flex">
          <div className="rounded-md bg-red-100 text-red-400 dark:bg-gray-800 dark:text-red-300 border-2 border-red-300 dark:border-red-300 dark:border-opacity-100 text-2xl font-bold  flex justify-center items-center absolute ">
            <div className="dark:bg-red-300 dark:bg-opacity-30 px-6 py-6 ">
              {props.number}
            </div>
          </div>
        </div>
        <div className="ml-24">
          <h3 className="text-gray-700 dark:text-gray-200 text-3xl font-bold pb-3">
            {props.title}
          </h3>
          <h2 className="text-gray-500 dark:text-gray-400 text-lg font-medium tracking-tight">
            {props.subtitle}
          </h2>
        </div>
      </div>
      <div className="flex justify-end w-full items-end pt-16">
        <ul className="flex items-center gap-2">{multipleTags}</ul>
      </div>
    </div>
  );
};

export default Header;
