import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";

import { Element } from "react-scroll";

function App() {
  return (
    <div className="App bg-gradient-to-br from-gray-800 to-gray-900 h-full">
      <Navbar />
      <div style={{ height: "50px" }} />
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
