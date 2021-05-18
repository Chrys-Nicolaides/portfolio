import React from "react";
import CardSmall from "../components/CardSmall";
import {
  AiFillGithub,
  // AiOutlineDribbble,
  // AiOutlineCodepen,
} from "react-icons/ai";
import DesignSystemsLight from "../images/DesignSystemsLight.webp";
import DesignSystemsDark from "../images/DesignSystemsDark.webp";
import ErgoTimerLight from "../images/ErgoTimerLight.webp";
import ErgoTimerDark from "../images/ErgoTimerDark.webp";
import MediaGalleryLight from "../images/MediaGalleryLight.webp";
import MediaGalleryDark from "../images/MediaGalleryDark.webp";

const Projects = ({ darkTheme }) => {
  return (
    <div className="text-gray-300 dark:text-700 flex sm:flex-row flex-col sm:gap-x-8 2xl:gap-x-24 gap-y-0 sm:w-full sm:mx-0 mx-8">
      <CardSmall
        tags={["react", "styled components", "ui design"]}
        image={darkTheme ? DesignSystemsDark : DesignSystemsLight}
        imageTitle={"Design Systems Cover Image"}
        number={"02"}
        title={"Design Systems"}
        subtitle={"with React & Styled Components"}
        icons={[
          <AiFillGithub />,
          // <AiOutlineDribbble />,
          // <AiOutlineCodepen />,
        ]}
        link={"https://github.com/Chrys-Nicolaides/Design-Systems-with-React"}
        buttonText={"View project"}
      />

      <CardSmall
        tags={["react", "css animations", "ui design"]}
        image={darkTheme ? ErgoTimerDark : ErgoTimerLight}
        imageTitle={"Ergo Timer Cover Image"}
        number={"03"}
        title={"Ergo Timer"}
        subtitle={"with React & CSS Animation"}
        icons={[<AiFillGithub />]}
        link={"https://github.com/Chrys-Nicolaides/ErgoTimer"}
        buttonText={"View project"}
      />
      <CardSmall
        tags={["react", "tailwind css", "ui design"]}
        image={darkTheme ? MediaGalleryDark : MediaGalleryLight}
        imageTitle={"Media Gallery Cover Image"}
        number={"04"}
        title={"Media Gallery"}
        subtitle={"with React & Tailwind CSS"}
        icons={[<AiFillGithub />]}
        link={"https://github.com/Chrys-Nicolaides/gallery-with-tailwind-v2"}
        buttonText={"View project"}
      />
    </div>
  );
};

export default Projects;
