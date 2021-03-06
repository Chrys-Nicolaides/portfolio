import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import ProjectsPage from "./pages/ProjectsPage";
import FeatureProjectPage from "./pages/FeatureProjectPage";
import CarouselProjectOne from "./projects/CarouselProjectOne";
import CarouselProjectTwo from "./projects/CarouselProjectTwo";
import CarouselProjectThree from "./projects/CarouselProjectThree";

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
    <div className="App bg-gradient-to-b from-gray-100 to-gray-200 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 h-full w-full relative">
      {/* <div className="App bg-gray-200 dark:bg-gray-800 h-full w-full"> */}
      <Navbar themeToggle={themeToggle} darkTheme={darkTheme} />
      <div className="hidden sm:visible" style={{ height: "50px" }} />
      <Switch>
        <Route exact path="/">
          <div className="pt-6 sm:pt-0 px-8 sm:px-16 md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl xl:px-16 mx-auto">
            <Element name="LandingPage">
              <LandingPage />
            </Element>
            <Element name="Skills">
              <Skills />
            </Element>
            <Element name="Projects">
              <ProjectsPage setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
            </Element>
            <Element name="About">
              <About />
            </Element>
            <Element name="Contact">
              <Contact />
            </Element>
          </div>
        </Route>
        <Route path="/finanzer">
          <FeatureProjectPage darkTheme={darkTheme} />
        </Route>
        <Route path="/yum">
          <CarouselProjectOne darkTheme={darkTheme} />
        </Route>
        <Route path="/tswalu">
          <CarouselProjectTwo darkTheme={darkTheme} />
        </Route>
        <Route path="/euphorbia">
          <CarouselProjectThree darkTheme={darkTheme} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
