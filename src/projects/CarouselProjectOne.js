import React from "react";
import { Link } from "react-router-dom";

import { HiArrowLeft } from "react-icons/hi";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import { ReactComponent as ArchLogo } from "../images/ArchLogo.svg";
import { ReactComponent as Architects } from "../images/Architects.svg";
import { ReactComponent as ProjectRole } from "../images/ProjectRole.svg";
import YUMCoverLight from "../images/YUMCoverLight.webp";
import YUMBoothLight from "../images/YUMBoothLight.webp";
import YUMStaircaseLight from "../images/YUMStaircaseLight.webp";
import YUMAtriumLight from "../images/YUMAtriumLight.webp";
import YUMBanquetteLight from "../images/YUMBanquetteLight.webp";
import YUMMeetingLight from "../images/YUMMeetingLight.webp";
import YUMCoverDark from "../images/YUMCoverDark.webp";
import YUMBoothDark from "../images/YUMBoothDark.webp";
import YUMStaircaseDark from "../images/YUMStaircaseDark.webp";
import YUMAtriumDark from "../images/YUMAtriumDark.webp";
import YUMBanquetteDark from "../images/YUMBanquetteDark.webp";
import YUMMeetingDark from "../images/YUMMeetingDark.webp";

const CarouselProjectOne = ({ darkTheme }) => {
  return (
    <div className="pb-28 ">
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
          title={"YUM! Offices"}
          subtitle={"Office fit-out for new KFC headquarters"}
          tags={[
            "figma",
            "ui design",
            "office design",
            "interior architecture",
          ]}
        />
        <div className="pt-10 lg:pt-10">
          {darkTheme ? (
            <Carousel
              images={[
                YUMCoverDark,
                YUMBoothDark,
                YUMStaircaseDark,
                YUMAtriumDark,
                YUMBanquetteDark,
                YUMMeetingDark,
              ]}
            />
          ) : (
            <Carousel
              images={[
                YUMCoverLight,
                YUMBoothLight,
                YUMStaircaseLight,
                YUMAtriumLight,
                YUMBanquetteLight,
                YUMMeetingLight,
              ]}
            />
          )}
        </div>
        <div className="flex justify-center sm:pt-12 pt-16 flex-col">
          <h3 className="text-center text-lg text-gray-500 dark:text-gray-400 font-bold sm:pb-8 pb-12">
            Project details
          </h3>
          <div className="flex flex-col gap-y-12 justify-center text-gray-500 dark:text-gray-400 w-full h-auto">
            <div className="flex ">
              <div className="carousel-icon-circle">
                <ArchLogo className="" />
              </div>
              <div>
                <h5 className="font-bold">Project</h5>
                <h6>
                  Interior office fit-out for new KFC headquarters in Bryanston,
                  Johannesburg.
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
            <div className="flex ">
              <div className="carousel-icon-circle ">
                <ProjectRole />
              </div>
              <div className="flex-grow h-full">
                <h5 className="font-bold">Role on Project</h5>
                <h6 className="sm:pb-8 pb-12">
                  Architectural lead, architectural co-ordination, construction
                  drawings & technical documentation, interior detailing,
                  project drawing review to ensure standards were maintained for
                  outgoing work.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselProjectOne;
