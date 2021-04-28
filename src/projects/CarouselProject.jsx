import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import { ReactComponent as ArchProject } from "../images/ArchProject.svg";
import { ReactComponent as Architects } from "../images/Architects.svg";
import { ReactComponent as ProjectRole } from "../images/ProjectRole.svg";

const CarouselProject = ({ setShowModal }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Modal>
      <Card additionalClasses={"bg-gray-50 py-14 px-24 my-48 relative"}>
        <div className="carousel-card max-w-lg xl:max-w-5xl mx-auto">
          <IoClose
            onClick={() => setShowModal(false)}
            strokeWidth={6}
            className="absolute top-0 right-0 cursor-pointer stroke-current stroke-4 stroke text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100 w-8 h-8 self-end mt-6 mr-6"
          />
          <Header
            number={"01"}
            title={"Tswalu"}
            subtitle={"Kalahari Lodge refurbishment project"}
            tags={["figma", "ui design", "architecture", "interior design"]}
          />
          <div className="pt-10 lg:pt-20">
            <Carousel />
          </div>
          <div className="flex justify-center pt-12 flex-col">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="focus:outline-none underline text-gray-600 text-lg font-bold pb-8 hover:text-gray-800"
            >
              {showDetails ? "Hide details" : "View details"}
            </button>
            {showDetails ? (
              <div className="flex flex-col gap-y-12 justify-center text-gray-500 w-full pb-2 ml-40">
                <div className="flex ">
                  <div className="pr-6">
                    <ArchProject />
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
                  <div className="pr-4">
                    <Architects />
                  </div>
                  <div>
                    <h5 className="font-bold">Architects</h5>
                    <h6>Savile Row Tailored Environments</h6>
                  </div>
                </div>
                <div className="flex">
                  <div className="pr-4">
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

export default CarouselProject;
