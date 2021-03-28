import React from "react";
import CardWrapper from "../components/CardWrapper";
import ArchCardRight from "../components/ArchCardRight";
import { AiOutlineDribbble } from "react-icons/ai";
import TswaluCover from "../images/TswaluCover.png";

const ArchProjectTwo = () => {
  return (
    <CardWrapper
      card={
        <ArchCardRight
          title="Tswalu"
          subtitle="Kalahari game lodge refurbishment"
          body="Inspired by the infamous Pomodoro App, the TswaluCover provides
          automatic switching between 'sitting' and 'standing' with focused
          times for the user to select based on the complexity of the task at
          hand. The gentle wave animations in the background promote
          relaxation and calmness while working!"
          tags={["Figma", "Photoshop"]}
          icons={[<AiOutlineDribbble />]}
          image={[TswaluCover]}
          imageTitle="Tswalu Cover Image"
        />
      }
    ></CardWrapper>
  );
};

export default ArchProjectTwo;
