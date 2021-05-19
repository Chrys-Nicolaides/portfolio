import React from "react";
import { Link } from "react-router-dom";

import { HiArrowLeft } from "react-icons/hi";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import { ReactComponent as ArchLogo } from "../images/ArchLogo.svg";
import { ReactComponent as Architects } from "../images/Architects.svg";
import { ReactComponent as ProjectRole } from "../images/ProjectRole.svg";
import TswaluCover from "../images/TswaluCover.webp";
import TswaluMainBedroom from "../images/TswaluMainBedroom.webp";
import TswaluMainBathroom from "../images/TswaluMainBathroom.webp";
import TswaluFamilyBedroom from "../images/TswaluFamilyBedroom.webp";
import TswaluPoolDeck from "../images/TswaluPoolDeck.webp";

const CarouselProjectTwo = () => {
  return (
    <div className="pb-28">
      <Link
        className="sm:flex hidden w-40 h-16 items-center pt-36 sm:pb-0.5 pb-8 pl-12 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        to="/"
      >
        <HiArrowLeft />
        <h5 className="items-center pl-2.5 text-base">Back</h5>
      </Link>
      <div className="carousel-card xl:max-w-5xl mx-auto sm:mt-12 mt-0 sm:py-16 sm:px-16 py-16 px-8 bg-gray-50 dark:bg-gray-800 max-w-3xl flex flex-col flex-grow">
        <Header
          number={"01"}
          title={"Tswalu"}
          subtitle={"Kalahari Lodge refurbishment project"}
          tags={["figma", "ui design", "architecture", "interior design"]}
        />
        <div className="pt-10 lg:pt-20">
          <Carousel
            images={[
              TswaluCover,
              TswaluMainBedroom,
              TswaluMainBathroom,
              TswaluFamilyBedroom,
              TswaluPoolDeck,
            ]}
          />
        </div>
        <div className="flex justify-center sm:pt-12 pt-16 flex-col">
          <h3 className="text-center text-lg text-gray-500 dark:text-gray-400 font-bold sm:pb-8 pb-12">
            Project details
          </h3>
          <div className="flex flex-col gap-y-12 justify-center text-gray-500 dark:text-gray-400 w-full flex-grow">
            <div className="flex ">
              <div className="carousel-icon-circle">
                <ArchLogo className="" />
              </div>
              <div>
                <h5 className="font-bold">Project</h5>
                <h6>
                  Complete refurbishment of existing game lodge situated in the
                  Kalahari
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
                  Architectural co-ordination & planning, construction drawings
                  & technical documentation, interior detailing. Architectural
                  co-ordination & planning, construction drawings & technical
                  documentation, interior detailing.Architectural co-ordination
                  & planning, construction drawings & technical documentation,
                  interior detailing.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselProjectTwo;
