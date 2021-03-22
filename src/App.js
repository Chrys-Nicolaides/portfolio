import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";

import { Element } from "react-scroll";

function App() {
  return (
    <div className="App bg-gradient-to-br from-gray-800 to-gray-900 h-screen">
      <h1>Chrysanthe is great!</h1>
      <Navbar />
      <Element name="LandingPage">
        <LandingPage />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Projects">
        <Projects />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
