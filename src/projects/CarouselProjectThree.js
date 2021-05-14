import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import { ReactComponent as ArchLogo } from "../images/ArchLogo.svg";
import { ReactComponent as Architects } from "../images/Architects.svg";
import { ReactComponent as ProjectRole } from "../images/ProjectRole.svg";
import MashatuCover from "../images/MashatuCover.jpg";
import MashatuConceptVillaInterior from "../images/MashatuConceptVillaInterior.jpg";
import MashatuConceptVillaArchitecture from "../images/MashatuConceptVillaArchitecture.jpg";
import MashatuFinalVillaInterior from "../images/MashatuFinalVillaInterior.jpg";
import MashatuLodgeArchitecture from "../images/MashatuLodgeArchitecture.jpg";
import MashatuLodgeArchitecture2 from "../images/MashatuLodgeArchitecture2.jpg";

const CarouselProjectThree = ({ setShowModal }) => {
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
          <div className="flex justify-center pt-12 flex-col">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="carousel-details-button"
            >
              {showDetails ? "Hide details" : "View details"}
            </button>
            {showDetails ? (
              <div className="flex flex-col gap-y-12 justify-center text-gray-500 dark:text-gray-400 w-full pb-2 ml-4">
                <div className="flex">
                  <div className="carousel-icon-circle">
                    <ArchLogo />
                  </div>
                  <div>
                    <h5 className="font-bold">Project</h5>
                    <h6>
                      Euphorbia Camp, a beautiful new private lodge located
                      within the Mashatu Game Reserve, in the Northern Thuli
                      Game Reserve. The camp and guest villas are nestled within
                      a forest of Euphorbia trees, along an elevated rock cliff
                      overlooking the Majale River below. The architecture and
                      design language throughout was inspired by the surrounding
                      landscape while being respectful to the environment.
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
                    <h6 className="">
                      Concept design, project co-ordination & planning, project
                      administration, budget planning, cost approval drawings,
                      architecture team lead, detailed & technical documention,
                      bi-weekly site inspections & quality control
                    </h6>
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

export default CarouselProjectThree;
