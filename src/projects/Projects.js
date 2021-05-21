import React from "react";
import CardSmall from "../components/CardSmall";
import { AiFillGithub } from "react-icons/ai";
import DesignSystemsLight from "../images/DesignSystemsLight.jpg";
import DesignSystemsDark from "../images/DesignSystemsDark.jpg";
import ErgotimerLight from "../images/ErgotimerLight.jpg";
import ErgotimerDark from "../images/ErgotimerDark.jpg";
import MediaGalleryLight from "../images/MediaGalleryLight.jpg";
import MediaGalleryDark from "../images/MediaGalleryDark.jpg";

const Projects = ({ darkTheme }) => {
  return (
    <div className="text-gray-300 dark:text-700 flex sm:flex-row flex-col gap-y-16 justify-between">
      <CardSmall
        tags={["react", "styled components", "ui"]}
        image={darkTheme ? DesignSystemsDark : DesignSystemsLight}
        imageTitle={"Design Systems Cover Image"}
        number={"01"}
        title={"Design Systems"}
        subtitle={"with React & Styled Components"}
        icons={[<AiFillGithub />]}
        link={"https://github.com/Chrys-Nicolaides/Design-Systems-with-React"}
        url={"https://design-systems-with-react.netlify.app/"}
        buttonText={"View project"}
      />

      <CardSmall
        tags={["react", "css animations", "ui"]}
        image={darkTheme ? ErgotimerDark : ErgotimerLight}
        imageTitle={"Ergo Timer Cover Image"}
        number={"02"}
        title={"Ergo Timer"}
        subtitle={"with React & CSS Animation"}
        icons={[<AiFillGithub />]}
        link={"https://github.com/Chrys-Nicolaides/ErgoTimer"}
        url={"https://ergotimer.netlify.app"}
        buttonText={"View project"}
      />
      <CardSmall
        tags={["react", "tailwind css", "ui"]}
        image={darkTheme ? MediaGalleryDark : MediaGalleryLight}
        imageTitle={"Media Gallery Cover Image"}
        number={"03"}
        title={"Media Gallery"}
        subtitle={"with React & Tailwind CSS"}
        icons={[<AiFillGithub />]}
        link={"https://github.com/Chrys-Nicolaides/gallery-with-tailwind-v2"}
        url={"https://gallery-with-tailwind.netlify.app/"}
        buttonText={"View project"}
      />
    </div>
  );
};

export default Projects;
