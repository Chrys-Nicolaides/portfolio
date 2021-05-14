import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="MyModal fixed inset-0 z-10 bg-gray-200 dark:bg-gray-700 dark:bg-opacity-90 bg-opacity-70 flex items-center justify-center overflow-hidden">
      {children}
    </div>
  );
};

export default Modal;
