import React from "react";
import { Link } from "react-router-dom";

import { HiArrowLeft, HiArrowUp } from "react-icons/hi";
// import { IoOpenOutline } from "react-icons/io5";
import ProtoPersona from "../images/ProtoPersona.webp";
import WireframesGroup from "../images/WireframesGroup.webp";
import Wireframes from "../images/Wireframes.webp";
import DashboardLight from "../images/DashboardLight.webp";
import DashboardDark from "../images/DashboardDark.webp";
import DashboardEmptyStatesLight from "../images/DashboardEmptyStatesLight.webp";
import DashboardEmptyStatesDark from "../images/DashboardEmptyStatesDark.webp";
import ColorPaletteLight from "../images/ColorPaletteLight.webp";
import ColorPaletteDark from "../images/ColorPaletteDark.webp";
import ButtonsLight from "../images/ButtonsLight.webp";
import ButtonsDark from "../images/ButtonsDark.webp";
import TypographyLight from "../images/TypographyLight.webp";
import TypographyDark from "../images/TypographyDark.webp";
import DesktopWireframeLight from "../images/DesktopWireframeLight.webp";
import DesktopWireframeDark from "../images/DesktopWireframeDark.webp";
import MobileWireframeLight from "../images/MobileWireframeLight.webp";
import MobileWireframeDark from "../images/MobileWireframeDark.webp";
import UserFlowLight from "../images/UserFlowLight.webp";
import UserFlowDark from "../images/UserFlowDark.webp";
import PrototypesLight from "../images/PrototypesLight.webp";
import PrototypesDark from "../images/PrototypesDark.webp";
import FormLight from "../images/FormLight.webp";
import FormDark from "../images/FormDark.webp";

const FeatureProjectPage = ({ darkTheme }) => {
  return (
    <div className="sm:-mt-0 -mt-16 overflow-y-hidden">
      <div className="bg-indigo-100 dark:bg-gray-700 dark:bg-opacity-50 w-screen pt-14">
        <Link
          className="sm:flex hidden w-40 h-16 items-center mt-12 pt-6 sm:pb-0.5 pb-4 text-gray-500 dark:text-gray-400 pl-12 hover:text-gray-800 dark:hover:text-gray-200"
          to="/"
        >
          <HiArrowLeft />
          <h5 className="items-center pl-2.5 text-base">Back</h5>
        </Link>
        <div className="cs-page-breaks px-10 pt-12 sm:px-44">
          <div className="flex items-center">
            <div className="cs-title-dash"></div>
            <h3 className="cs-title">Finanzer</h3>
          </div>
          <h2 className="cs-subtitle 2xl:text-7xl xl:text-5xl md:text-4xl text-3xl">
            Finanzer is a finance tracking system that empowers users to better
            monitor their available funds
          </h2>
          {/* <h2 className="cs-subtitle xl:text-7xl md:text-6xl text-4xl">
            Finanzer does something to help a certain someone solve a certain
            problem
          </h2> */}
          <div className="flex md:flex-row flex-col gap-12 w-11/12 font-body items-start">
            <div className="md:w-1/4 w-full">
              <h3 className="text-gray-600 dark:text-gray-200 font-bold sm:text-2xl text-lg">
                Client
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-normal sm:text-lg text-base">
                Cameron Norman
              </p>
              <p className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                (Senior Full Stack Developer, Berlin)
              </p>
            </div>
            <div className="md:w-1/4 w-full">
              <h3 className="text-gray-600 dark:text-gray-300 font-bold sm:text-2xl text-lg">
                Role
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-normal sm:text-lg text-base">
                Frontend Development, UX Design, Web Design
              </p>
            </div>
            <div className="md:w-1/4 w-full">
              <h3 className="text-gray-600 dark:text-gray-300 font-bold sm:text-2xl text-lg">
                Tech
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-normal sm:text-lg text-base">
                Javascript, React & Tailwind CSS
              </p>
            </div>
            <a
              href="https://www.figma.com/file/DLREeR30lWMRFPJHd6bsrZ/Finanzer-Case-Study?node-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center">
                <button className="button-primary bg-indigo-200 dark:bg-indigo-200 hover:bg-indigo-300 dark:hover:bg-indigo-100 focus:bg-indigo-400 dark:focus:bg-indigo-300 text-lg md:text-xl xl:text-2xl px-8 py-4 text-indigo-600 focus:text-indigo-900 flex items-center">
                  View in Figma
                  {/* <IoOpenOutline className="ml-2.5 stroke-4 h-6 w-6" /> */}
                </button>
              </div>
            </a>
          </div>
        </div>
        <div className="cs-page-sections pt-0">
          <div className="flex justify-center sm:w-3/4 w-full object-center">
            <img
              src={darkTheme ? DashboardDark : DashboardLight}
              alt="cover"
              className="rounded-md shadow-md sm:-mt-32 -mt-8 place-self-center bg-indigo-400 dark:bg-gray-700 sm:p-10 p-4"
            />
          </div>
        </div>
        <div className="cs-page-sections bg-indigo-100 dark:bg-gray-700 dark:bg-opacity-50">
          <div className="flex items-center">
            <div className="cs-title-dash"></div>
            <h3 className="cs-title">The Problem</h3>
          </div>
          <p className="cs-body">
            I was approached by a client to assist with an issue regarding his
            current banking app. At any point during the month, the client is
            unaware of an accurate net balance due to several debit orders
            scheduled on various dates. This is problematic as the client only
            knows what his balance is at the end of the month after all debit
            orders have been paid. This uncertainty hinders him from being able
            to confidently make purchases during the course of the month,
            without having to manually calculate what his net balance would be.
          </p>
          <p className="cs-body">
            Finanzer solves this problem by having the net balance reflect the
            coming month's debit orders ahead of time, giving the client clarity
            on the current state of his finances.
          </p>
        </div>
        <div className="cs-page-sections">
          <div className="flex items-center">
            <div className="cs-title-dash"></div>
            <h3 className="cs-title">User</h3>
          </div>
          <p className="cs-body">
            While this project was built for a specific client, Finanzer is
            targetted towards similar young professionals hoping to get a better
            grasp on their finances and be able to keep track of their current
            status on their mobile phones while on the go.
          </p>
        </div>
        <div className="cs-page-sections pt-10">
          <div className="flex justify-center sm:w-3/4 w-full object-center">
            <img
              src={ProtoPersona}
              alt="proto persona"
              className="place-self-center"
            />
          </div>
          <div className="flex items-center sm:pt-32 sm:pb-8 pt-16 pb-6">
            <div className="cs-title-dash"></div>
            <h3 className="cs-title">User Journey</h3>
          </div>
          <div className="flex justify-center sm:w-3/4 w-full object-center sm:pb-0 pb-8">
            <img
              src={darkTheme ? UserFlowDark : UserFlowLight}
              alt="user journey map"
              className="place-self-center"
            />
          </div>
        </div>
        <div className="cs-page-sections bg-indigo-100 dark:bg-gray-700">
          <div className="flex items-center">
            <div className="cs-title-dash"></div>
            <h3 className="cs-title">My Role</h3>
          </div>
          <p className="cs-body">
            I was responsible for the UI design, UX design and front-end
            development on this project.
          </p>
          <p className="cs-body">
            Breaking each responsibility down, I proposed the visual design to
            the client which included a design system, wireframes, mockups,
            prototypes and a component library. These elements were all informed
            by the research and analysis I did prior, user interviews and
            discussions, user journey and empathy maps, and using the heauristic
            evaluation as a usability check.
          </p>
        </div>
        <div className="cs-page-sections pt-0">
          <div className="flex justify-center sm:w-3/4 w-full object-center sm:py-36 pb-16 pt-20">
            <img
              src={WireframesGroup}
              alt="wireframe cover"
              className="place-self-center bg-indigo-300 dark:bg-gray-700"
            />
          </div>
          <div className="flex items-center">
            <div className="cs-title-dash"></div>
            <h3 className="cs-title">Wireframes</h3>
          </div>
          <p className="cs-body">
            These simple, low fidelity wireframes proved very useful in
            communicating basic principles and concepts to the client, outlining
            key features and elements needed, without the client getting
            distracted or lost in unessecary details at this stage of the
            project.
          </p>
          <p className="cs-body">
            From here, I was able to narrow down the specifics the client was
            looking for and understand the preferred layout and relationship of
            those elements to meet his requirements.
          </p>
          <div className="flex justify-center sm:w-3/4 w-full object-center sm:py-36 py-16">
            <img
              src={Wireframes}
              alt="wireframe mapping"
              className="place-self-center bg-white dark:bg-gray-700 sm:p-16 p-8 rounded-md shadow-sm"
            />
          </div>
          <p className="cs-body">
            These grey and white wireframes outline the specific elements
            displayed on the dashboard, including their size and position and on
            the page and hierarchy in relation to other elements, as well as
            navigation.
          </p>
          <p className="cs-body">
            The final elements were chosen based on several user interviews,
            understanding and prioritising their true objectives when using the
            app, and laying everything out in a way that made sense logically in
            terms of hierarchy of what information is communicated to the user
            first.
          </p>
        </div>
        <div className="cs-page-sections bg-white dark:bg-gray-850 w-screen sm:py-36 py-16">
          <h3 className="cs-title text-gray-700 dark:text-gray-300 sm:text-xl text-base sm:pb-8 pb-4">
            Final wireframes based on user feedback & discussions
          </h3>

          <h3 className="cs-title text-gray-500 dark:text-gray-500 sm:text-base text-sm">
            Desktop
          </h3>
          <div className="flex justify-center sm:w-3/4 w-full object-center py-8">
            <img
              src={darkTheme ? DesktopWireframeDark : DesktopWireframeLight}
              alt="desktop wireframe"
              className="rounded-md shadow-md"
            />
          </div>
          <h3 className="cs-title text-gray-500 dark:text-gray-500 sm:text-base text-sm">
            Mobile
          </h3>
          <div className="flex justify-center sm:w-3/4 w-full object-center py-8">
            <img
              src={darkTheme ? MobileWireframeDark : MobileWireframeLight}
              alt="mobile homepage wireframe"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
        <div className="cs-page-sections bg-indigo-100 dark:bg-gray-800 sm:py-36 py-16">
          <div className="flex items-center">
            <div className="cs-title-dash"></div>
            <h3 className="cs-title">Design System</h3>
          </div>
          <div className="flex justify-center sm:w-3/4 w-full object-center py-8">
            <img
              src={darkTheme ? ColorPaletteDark : ColorPaletteLight}
              alt="color palette"
              className="place-self-center rounded-md shadow-md"
            />
          </div>
          <div className="flex justify-center sm:w-3/4 w-full object-center py-8">
            <img
              src={darkTheme ? ButtonsDark : ButtonsLight}
              alt="buttons"
              className="place-self-center rounded-md shadow-md"
            />
          </div>
          <div className="flex justify-center sm:w-3/4 w-full object-center py-8">
            <img
              src={darkTheme ? TypographyDark : TypographyLight}
              alt="typography"
              className="place-self-center rounded-md shadow-md"
            />
          </div>
        </div>
        <div className="cs-page-sections sm:py-36 py-16">
          <div className="flex items-center">
            <div className="cs-title-dash"></div>
            <h3 className="cs-title">Mockups & Prototypes</h3>
          </div>

          <div className="flex justify-center sm:w-3/4 w-full object-center pt-8 pb-16">
            <img
              src={darkTheme ? DashboardDark : DashboardLight}
              alt="dashboard mockup"
              className="rounded-md shadow-md place-self-center"
            />
          </div>
          <h3 className="cs-title text-gray-500 dark:text-gray-500 sm:text-base text-sm">
            Empty states
          </h3>
          <div className="flex justify-center sm:w-3/4 w-full object-center pt-4 pb-16">
            <img
              src={
                darkTheme ? DashboardEmptyStatesDark : DashboardEmptyStatesLight
              }
              alt="dashboard empty states mockup"
              className="rounded-md shadow-md place-self-center"
            />
          </div>
          <h3 className="cs-title text-gray-500 dark:text-gray-500 sm:text-base text-sm">
            Mobile prototyping
          </h3>
          <div className="flex justify-center sm:w-3/4 w-full object-center pt-4 pb-16">
            <img
              src={darkTheme ? PrototypesDark : PrototypesLight}
              alt="mobile prototype"
              className="rounded-md shadow-md place-self-center"
            />
          </div>
          <div>
            <h3 className="cs-title text-gray-500 dark:text-gray-500 sm:text-base text-sm">
              Transaction form
            </h3>
            <div className="flex justify-center sm:w-3/4 w-full object-center pt-4 pb-16">
              <img
                src={darkTheme ? FormDark : FormLight}
                alt="transaction form"
                className="w-"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col w-full h-full pb-24 pt-36 px-8 sm:px-0 text-center dark:bg-gray-900 dark:bg-opacity-80">
          <h3 className="text-gray-600 dark:text-gray-300 sm:text-4xl text-2xl font-bold pb-12 font-display">
            Thank you for reading all the way here!
          </h3>
          <h5 className="text-indigo-400 dark:text-indigo-300 sm:text-lg text-sm font-bold font-display">
            Click below for more info on this project
          </h5>
          <div className="flex justify-center pt-8 sm:pb-20 pb-20">
            <a
              href="https://github.com/Chrys-Nicolaides/finance-management-system"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-primary px-3 md:px-6 py-1.5 md:py-2 xl:mr-4 mr-2 text-lg md:text-xl xl:text-2xl xl:px-8 xl:py-3 font-bold cursor-pointer bg-indigo-200 dark:bg-indigo-300 hover:bg-indigo-300 dark:hover:bg-indigo-200 focus:bg-indigo-400 dark:focus:bg-indigo-400 text-indigo-600 focus:text-indigo-900 flex items-center ">
                Github
              </button>
            </a>
            <a
              href="https://www.figma.com/file/DLREeR30lWMRFPJHd6bsrZ/Finanzer-Case-Study?node-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-primary px-3 md:px-6 py-1.5 md:py-2 xl:ml-4 ml-2 text-lg md:text-xl xl:text-2xl xl:px-8 xl:py-3 font-bold cursor-pointer bg-indigo-200 dark:bg-indigo-300 hover:bg-indigo-300 dark:hover:bg-indigo-200 focus:bg-indigo-400 dark:focus:bg-indigo-400 text-indigo-600 focus:text-indigo-900 flex items-center ">
                Figma
              </button>
            </a>
          </div>
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full flex justify-end sm:pr-16 -pr-4 cursor-pointer outline-none focus:outline-none"
            >
              <div className="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-400 hover:bg-opacity-50 dark:hover:bg-gray-600 sm:h-10 h-8 sm:w-10 w-8 flex justify-center items-center rounded-md shadow">
                <HiArrowUp />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProjectPage;
