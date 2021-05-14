import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import { ReactComponent as ArchLogo } from "../images/ArchLogo.svg";
import { ReactComponent as Architects } from "../images/Architects.svg";
import { ReactComponent as ProjectRole } from "../images/ProjectRole.svg";
import YUMCoverLight from "../images/YUMCoverLight.png";
import YUMBoothLight from "../images/YUMBoothLight.png";
import YUMStaircaseLight from "../images/YUMStaircaseLight.png";
import YUMAtriumLight from "../images/YUMAtriumLight.png";
import YUMBanquetteLight from "../images/YUMBanquetteLight.png";
import YUMMeetingLight from "../images/YUMMeetingLight.png";
import YUMCoverDark from "../images/YUMCoverDark.png";
import YUMBoothDark from "../images/YUMBoothDark.png";
import YUMStaircaseDark from "../images/YUMStaircaseDark.png";
import YUMAtriumDark from "../images/YUMAtriumDark.png";
import YUMBanquetteDark from "../images/YUMBanquetteDark.png";
import YUMMeetingDark from "../images/YUMMeetingDark.png";

const CarouselProjectTwo = ({ setShowModal, darkTheme }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Modal className="">
      <Card additionalClasses={"bg-gray-50 py-14 px-24 my-48 relative"}>
        <div className="carousel-card max-w-lg xl:max-w-3xl mx-auto">
          <IoClose
            onClick={() => setShowModal(false)}
            strokeWidth={6}
            className="carousel-close-icon"
          />
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
          <div className="pt-10 lg:pt-20">
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
          <div className="flex justify-center pt-12 flex-col">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="carousel-details-button"
            >
              {showDetails ? "Hide details" : "View details"}
            </button>
            {showDetails ? (
              <div className="flex flex-col gap-y-12 justify-center text-gray-500 dark:text-gray-400 w-full pb-2 ml-4">
                <div className="flex ">
                  <div className="carousel-icon-circle">
                    <ArchLogo className="" />
                  </div>
                  <div>
                    <h5 className="font-bold">Project</h5>
                    <h6>
                      Interior office fit-out for new KFC headquarters in
                      Bryanston, Johannesburg.
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
                    <h6 className="">Technical documentation</h6>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Card>
    </Modal>
  );
};

export default CarouselProjectTwo;
