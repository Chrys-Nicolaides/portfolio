import React from "react";
import CardWrapper from "../components/CardWrapper";
import CardLeft from "../components/CardLeft";
import {
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineCodepen,
} from "react-icons/ai";
import MediaGalleryDark from "../images/MediaGalleryDark.png";
import MediaGalleryLight from "../images/MediaGalleryLight.png";

const ProjectThree = () => {
  return (
    <CardWrapper
      card={
        <CardLeft
          title="Media Gallery"
          subtitle="with Tailwind CSS"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
        facilisi consequat vestibulum accumsan vitae risus volutpat
        pharetra. Etiam urna, tortor enim volutpat cursus nullam augue ac.
        Aenean risus, purus nec massa vitae id at turpis nullam. Tincidunt
        ullamcorper ac vitae egestas lorem sit justo. Vestibulum, aliquam
        mauris turpis mi, feugiat."
          tags={["React", "Tailwind CSS", "Figma"]}
          icons={[
            <AiFillGithub />,
            <AiOutlineDribbble />,
            <AiOutlineCodepen />,
          ]}
          images={[MediaGalleryLight, MediaGalleryDark]}
          imageTitle="Media Gallery Cover Image"
        />
      }
    ></CardWrapper>
  );
};

export default ProjectThree;
