import React from "react";
import CardWrapper from "../components/CardWrapper";
import ArchCardRight from "../components/ArchCardRight";
import {
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineCodepen,
} from "react-icons/ai";
import ErgoTimer from "../images/ErgoTimer.png";

const ProjectTwo = () => {
  return (
    <CardWrapper
      card={
        <ArchCardRight
          title="Ergo Timer"
          subtitle="with React & CSS Animations"
          body="Inspired by the infamous Pomodoro App, the ErgoTimer provides
          automatic switching between 'sitting' and 'standing' with focused
          times for the user to select based on the complexity of the task at
          hand. The gentle wave animations in the background promote
          relaxation and calmness while working!"
          tags={["React", "CSS Animations", "Figma"]}
          icons={[
            <AiFillGithub />,
            <AiOutlineDribbble />,
            <AiOutlineCodepen />,
          ]}
          image={[ErgoTimer]}
          imageTitle="Ergo Timer Cover Image"
        />
      }
    ></CardWrapper>
  );
};

export default ProjectTwo;
