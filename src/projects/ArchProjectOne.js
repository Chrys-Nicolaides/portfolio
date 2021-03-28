import React from "react";
import CardWrapper from "../components/CardWrapper";
import ArchCardLeft from "../components/ArchCardLeft";
import { AiOutlineDribbble } from "react-icons/ai";
import YumCover from "../images/YumCover.png";

const ArchProjectOne = () => {
  return (
    <CardWrapper
      card={
        <ArchCardLeft
          title="YUM! Offices"
          subtitle="New headquarters in Johannesburg"
          body="Project: Office fit-out for new headquarters for ‘YUM!’, the holding company for KFC and Pizza Hut, located in Bryanston, Johannesburg. Architects:
          Savile Row Tailored Environments"
          tags={["Figma", "PhotoShop"]}
          icons={[<AiOutlineDribbble />]}
          image={[YumCover]}
          imageTitle="YUM Offices Cover Image"
        />
      }
    ></CardWrapper>
  );
};

export default ArchProjectOne;
