import React from "react";
import CardSmall from "../components/CardSmall";
import {
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineCodepen,
} from "react-icons/ai";
import DesignSystemsLight from "../images/DesignSystemsLight.png";
import DesignSystemsDark from "../images/DesignSystemsDark.png";
import ErgoTimerLight from "../images/ErgoTimerLight.png";
import ErgoTimerDark from "../images/ErgoTimerDark.png";
import MediaGalleryLight from "../images/MediaGalleryLight.png";
import MediaGalleryDark from "../images/MediaGalleryDark.png";

const Projects = ({ darkTheme }) => {
  return (
    <div className="text-gray-300 dark:text-700 flex sm:flex-row flex-col sm:gap-x-8 2xl:gap-x-24 gap-y-24 sm:w-full sm:mx-0 mx-8">
      <CardSmall
        tags={["react", "styled components", "figma"]}
        image={darkTheme ? DesignSystemsDark : DesignSystemsLight}
        imageTitle={"Design Systems Cover Image"}
        number={"02"}
        title={"Design Systems"}
        subtitle={"with React & Styled Components"}
        // body={
        //   "Design systems include a series of reusable UI Components to develop new experiences."
        // }
        icons={[<AiFillGithub />, <AiOutlineDribbble />, <AiOutlineCodepen />]}
        buttonText={"View project"}
      />

      <CardSmall
        tags={["react", "css animations", "figma"]}
        image={darkTheme ? ErgoTimerDark : ErgoTimerLight}
        imageTitle={"Ergo Timer Cover Image"}
        number={"03"}
        title={"Ergo Timer"}
        subtitle={"with React & CSS Animation"}
        // body={
        //   "Design systems include a series of reusable UI Components to develop new experiences."
        // }
        icons={[<AiFillGithub />, <AiOutlineDribbble />, <AiOutlineCodepen />]}
        buttonText={"View project"}
      />
      <CardSmall
        tags={["react", "tailwind css", "figma"]}
        image={darkTheme ? MediaGalleryDark : MediaGalleryLight}
        imageTitle={"Media Gallery Cover Image"}
        number={"04"}
        title={"Media Gallery"}
        subtitle={"with React & Tailwind CSS"}
        // body={
        //   "Design systems include a series of reusable UI Components to develop new experiences."
        // }
        icons={[<AiFillGithub />, <AiOutlineDribbble />, <AiOutlineCodepen />]}
        buttonText={"View project"}
      />
    </div>
  );
};

export default Projects;
