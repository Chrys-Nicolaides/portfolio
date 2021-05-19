import React from "react";
import { Link } from "react-router-dom";

import { HiArrowLeft } from "react-icons/hi";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import { ReactComponent as ArchLogo } from "../images/ArchLogo.svg";
import { ReactComponent as Architects } from "../images/Architects.svg";
import { ReactComponent as ProjectRole } from "../images/ProjectRole.svg";
import MashatuCover from "../images/MashatuCover.webp";
import MashatuConceptVillaInterior from "../images/MashatuConceptVillaInterior.webp";
import MashatuConceptVillaArchitecture from "../images/MashatuConceptVillaArchitecture.webp";
import MashatuFinalVillaInterior from "../images/MashatuFinalVillaInterior.webp";
import MashatuLodgeArchitecture from "../images/MashatuLodgeArchitecture.webp";
import MashatuLodgeArchitecture2 from "../images/MashatuLodgeArchitecture2.webp";

const CarouselProjectThree = () => {
  return (
    <div className="pb-28">
      <Link
        className="sm:flex hidden w-40 h-16 items-center pt-36 sm:pb-0.5 pb-8 pl-12 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        to="/"
      >
        <HiArrowLeft />
        <h5 className="items-center pl-2.5 text-base">Back</h5>
      </Link>
      <div className="carousel-card xl:max-w-5xl mx-auto sm:mt-12 mt-0 sm:py-16 sm:px-16 py-16 px-8 bg-gray-50 dark:bg-gray-800 max-w-3xl flex flex-col">
        <Header
          number={"01"}
          title={"Mashatu Euphorbia Camp"}
          subtitle={
            "New Euphorbia Camp located in Mashatu Game Reserve, Botswana"
          }
          tags={[
            "figma",
            "ui design",
            "architecture",
            "lodge design",
            "planning",
            "user experience",
          ]}
        />
        <div className="pt-10 lg:pt-20">
          <Carousel
            images={[
              MashatuCover,
              MashatuConceptVillaInterior,
              MashatuConceptVillaArchitecture,
              MashatuFinalVillaInterior,
              MashatuLodgeArchitecture,
              MashatuLodgeArchitecture2,
            ]}
          />
        </div>
        <div className="flex justify-center sm:pt-12 pt-16 flex-col">
          <h3 className="text-center text-lg text-gray-500 dark:text-gray-400 font-bold sm:pb-8 pb-12">
            Project details
          </h3>
          <div className="flex flex-col gap-y-12 justify-center text-gray-500 dark:text-gray-400 w-full h-full">
            <div className="flex">
              <div className="carousel-icon-circle">
                <ArchLogo />
              </div>
              <div>
                <h5 className="font-bold">Project</h5>
                <h6>
                  Euphorbia Camp, a beautiful new private lodge located within
                  the Mashatu Game Reserve, in the Northern Thuli Game Reserve.
                  The camp and guest villas are nestled within a forest of
                  Euphorbia trees, along an elevated rock cliff overlooking the
                  Majale River below. The architecture and design language
                  throughout was inspired by the surrounding landscape while
                  being respectful to the environment.
                </h6>
              </div>
            </div>
            <div className="flex">
              <div className="carousel-icon-circle">
                <Architects />
              </div>
              <div>
                <h5 className="font-bold">Architects</h5>
                <h6>Savile Row Tailored Environments</h6>
              </div>
            </div>
            <div className="flex">
              <div className="carousel-icon-circle">
                <ProjectRole />
              </div>
              <div>
                <h5 className="font-bold">Role on Project</h5>
                <h6 className="sm:pb-8 pb-12">
                  Project and architectural lead, mentored juniors, translation
                  of client requirements into technically realised design,
                  client relations, project co-ordination and planning, project
                  administration, concept design, budget planning and cost
                  drawings, detailed and technical documention, interior
                  detailing, site inspections and quality control
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselProjectThree;
