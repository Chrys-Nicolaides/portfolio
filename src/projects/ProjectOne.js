import React from "react";
import CardWrapper from "../components/CardWrapper";
import CardLeft from "../components/CardLeft";
import {
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineCodepen,
} from "react-icons/ai";
import DesignSystemsDark from "../images/DesignSystemsDark.png";
import DesignSystemsLight from "../images/DesignSystemsLight.png";

const ProjectOne = () => {
  return (
    <CardWrapper
      card={
        <CardLeft
          title="Design systems"
          subtitle="with React & Styled Components"
          body="Design systems include a series of reusable UI Components to develop new experiences. These reusable UI components allow teams to build scalable, complex & accessible user interfaces across multiple projects at a faster pace. They serve as tools for both designers and developers, with the objective of creating consistency and a clear set of shared goals when building websites and applications."
          tags={["React", "Styled Components", "Storybook", "Figma"]}
          icons={[
            <AiFillGithub />,
            <AiOutlineDribbble />,
            <AiOutlineCodepen />,
          ]}
          images={[DesignSystemsDark, DesignSystemsLight]}
          imageTitle="Design Systems Cover Image"
        />
      }
    ></CardWrapper>
  );
};

export default ProjectOne;
