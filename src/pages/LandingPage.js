import React from "react";

const LandingPage = () => {
  return (
    <div className="px-44 py-20">
      <h3 className="greeting text-gray-400 font-body text-sm">
        Hello! My name is
      </h3>
      <h1 className="name text-7xl text-gray-100 font-display font-bold py-3 md:text-6xl md:mb-2">
        Chrys.
      </h1>
      <h2 className="introduction text-7xl text-red-300 font-display font-bold md:text-6xl">
        I like to build things.
      </h2>
      <p className="description text-gray-400 font-body pt-7 pb-12 text-sm w-3/4 text-justify md:w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis
        condimentum ex, ut sodales libero. Nam tortor nisl, commodo vestibulum
        malesuada tincidunt, tempor vel mi. Vivamus non mi rhoncus, semper eros
        vel, consequat dolor. Pellentesque dignissim nunc ligula, quis porttitor
        quam porttitor et.
      </p>
      <button className="button-primary">Say Hello</button>
    </div>
  );
};

export default LandingPage;
