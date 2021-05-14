import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import ProjectsPage from "./pages/ProjectsPage";
import FeatureProjectPage from "./pages/FeatureProjectPage";

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
    <Switch>
      <div className="App bg-gradient-to-b from-gray-100 to-gray-200 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 h-full w-full">
        {/* <div className="App bg-gray-200 dark:bg-gray-800 h-full w-full"> */}
        <Navbar themeToggle={themeToggle} darkTheme={darkTheme} />
        <div style={{ height: "50px" }} />
        <Route exact path="/">
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
        </Route>
        <Route path="/featureprojectpage">
          <FeatureProjectPage darkTheme={darkTheme} />
        </Route>
        <Footer />
      </div>
    </Switch>
  );
}

export default App;
