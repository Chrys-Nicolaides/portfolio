import React, { useState, useEffect } from "react";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";

import { Element } from "react-scroll";

function App() {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.darkTheme === "true" ||
      (localStorage.darkTheme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark").matches)
  );

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    }
  }, [darkTheme]);

  const themeToggle = () => {
    if (darkTheme) {
      document.body.classList.remove("dark");
      localStorage.darkTheme = "false";
      setDarkTheme(false);
    } else {
      document.body.classList.add("dark");
      localStorage.darkTheme = "true";
      setDarkTheme(true);
    }
  };

  return (
    <div className="App bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 h-full w-full">
      <Navbar themeToggle={themeToggle} darkTheme={darkTheme} />
      <div style={{ height: "50px" }} />
      <Element name="LandingPage">
        <LandingPage />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Projects">
        <ProjectsPage setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
