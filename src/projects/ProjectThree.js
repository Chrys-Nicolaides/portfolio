import React from "react";
import {
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineCodepen,
} from "react-icons/ai";
import MediaGalleryDark from "../images/MediaGalleryDark.png";
import MediaGalleryLight from "../images/MediaGalleryLight.png";

const ProjectOne = () => {
  return (
    <div className="flex flex-row w-full mb-44 bg-gray-800 p-12 rounded-md shadow">
      <div className="flex-col w-1/2 flex self-center">
        <div>
          <img
            className="image w-9/12 rounded-md shadow-md"
            src={MediaGalleryLight}
            alt="MediaGalleryLight"
          />
        </div>
        <div>
          <img
            className="image w-9/12 ml-12 -mt-10 rounded-md shadow-md"
            src={MediaGalleryDark}
            alt="MediaGalleryDark"
          />
        </div>
      </div>
      <div className="text-right flex-col w-1/2">
        <h2 className="text-4xl font-bold text-red-300">Media Gallery</h2>
        <h2 className="text-2xl font-bold text-gray-100 mb-8 mt-3">
          with Tailwind CSS
        </h2>
        <div className="bg-gray-900 text-gray-400 p-5 rounded-md shadow">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            facilisi consequat vestibulum accumsan vitae risus volutpat
            pharetra. Etiam urna, tortor enim volutpat cursus nullam augue ac.
            Aenean risus, purus nec massa vitae id at turpis nullam. Tincidunt
            ullamcorper ac vitae egestas lorem sit justo. Vestibulum, aliquam
            mauris turpis mi, feugiat.
          </p>
        </div>
        <ul className="flex row justify-end text-gray-500 pt-6">
          <li className="technology-tag">React</li>
          <li className="technology-tag">Tailwind CSS</li>
          <li className="technology-tag">Figma</li>
        </ul>
        <div className="social-media-icons flex row justify-end text-gray-400 pt-6 pr-0">
          <div className="icon-primary">
            <a href="https://github.com/Chrys-Nicolaides">
              <AiFillGithub className="icon" />
            </a>
          </div>
          <div className="icon-primary">
            <a href="https://codepen.io/Chrys-Nicolaides">
              <AiOutlineCodepen className="icon" />
            </a>
          </div>
          <div className="icon-primary pr-0">
            <a href="https://codepen.io/Chrys-Nicolaides">
              <AiOutlineDribbble className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
