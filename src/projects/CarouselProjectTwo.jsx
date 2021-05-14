import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import { ReactComponent as ArchLogo } from "../images/ArchLogo.svg";
import { ReactComponent as Architects } from "../images/Architects.svg";
import { ReactComponent as ProjectRole } from "../images/ProjectRole.svg";
import TswaluCover from "../images/TswaluCover.png";
import TswaluMainBedroom from "../images/TswaluMainBedroom.png";
import TswaluMainBathroom from "../images/TswaluMainBathroom.png";
import TswaluFamilyBedroom from "../images/TswaluFamilyBedroom.png";
import TswaluPoolDeck from "../images/TswaluPoolDeck.png";

const CarouselProjectTwo = ({ setShowModal }) => {
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
                      Complete refurbishment of existing game lodge situated in
                      the Kalahari
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
                    {/* <h6 className="w-2/3">
                      Technical documentation of guest chalets and public
                      facilities on the site, including both interior and
                      architectural related detailing
                    </h6> */}
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
