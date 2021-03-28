import React from "react";
import CardWrapper from "../components/CardWrapper";
import ArchCardLeft from "../components/ArchCardLeft";
import { AiOutlineDribbble } from "react-icons/ai";
import EuphorbiaCover from "../images/EuphorbiaCover.png";

const ArchProjectThree = () => {
  return (
    <CardWrapper
      card={
        <ArchCardLeft
          title="Euphorbia"
          subtitle="Intimate game lodge in Botswana "
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
        facilisi consequat vestibulum accumsan vitae risus volutpat
        pharetra. Etiam urna, tortor enim volutpat cursus nullam augue ac.
        Aenean risus, purus nec massa vitae id at turpis nullam. Tincidunt
        ullamcorper ac vitae egestas lorem sit justo. Vestibulum, aliquam
        mauris turpis mi, feugiat."
          tags={["Figma", "PhotoShop"]}
          icons={[<AiOutlineDribbble />]}
          image={[EuphorbiaCover]}
          imageTitle="Euphorbia Cover Image"
        />
      }
    ></CardWrapper>
  );
};

export default ArchProjectThree;
