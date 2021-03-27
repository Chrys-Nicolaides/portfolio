import React from "react";

const CardWrapper = (props) => {
  return (
    <div className="flex flex-row w-full mb-44 bg-gray-800 p-12 rounded-md shadow font-display">
      {props.card}
    </div>
  );
};

export default CardWrapper;
