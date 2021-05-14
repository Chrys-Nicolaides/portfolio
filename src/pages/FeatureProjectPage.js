import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";

import { HiArrowLeft, HiArrowUp } from "react-icons/hi";
import { IoOpenOutline } from "react-icons/io5";
import ProtoPersona from "../images/ProtoPersona.png";
import WireframesGroup from "../images/WireframesGroup.png";
import Wireframes from "../images/Wireframes.png";
import DashboardLight from "../images/DashboardLight.png";
import DashboardDark from "../images/DashboardDark.png";
import DashboardEmptyStatesLight from "../images/DashboardEmptyStatesLight.png";
import DashboardEmptyStatesDark from "../images/DashboardEmptyStatesDark.png";
import ColorPaletteLight from "../images/ColorPaletteLight.jpg";
import ColorPaletteDark from "../images/ColorPaletteDark.jpg";
import ButtonsLight from "../images/ButtonsLight.jpg";
import ButtonsDark from "../images/ButtonsDark.jpg";
import TypographyLight from "../images/TypographyLight.jpg";
import TypographyDark from "../images/TypographyDark.jpg";
import DesktopWireframeLight from "../images/DesktopWireframeLight.jpg";
import DesktopWireframeDark from "../images/DesktopWireframeDark.jpg";
import MobileWireframeLight from "../images/MobileWireframeLight.jpg";
import MobileWireframeDark from "../images/MobileWireframeDark.jpg";
import UserFlowLight from "../images/UserFlowLight.jpg";
import UserFlowDark from "../images/UserFlowDark.jpg";
import PrototypesLight from "../images/PrototypesLight.jpg";
import PrototypesDark from "../images/PrototypesDark.jpg";
import FormLight from "../images/FormLight.jpg";
import FormDark from "../images/FormDark.jpg";

const FeatureProjectPage = ({ darkTheme }) => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <div className="sm:-mt-0 -mt-16  overflow-y-hidden">
      <div className="bg-indigo-100 dark:bg-gray-700 dark:bg-opacity-50 w-screen pt-14">
        <Link
          className="sm:flex hidden items-center pt-6 sm:pb-0.5 pb-4 text-gray-500 dark:text-gray-400 pl-10"
          to="/"
        >
          <HiArrowLeft />
          <h5 className="items-center pl-2.5 text-base">Back</h5>
        </Link>
        <div className="cs-page-breaks px-2 sm:px-44">
          <div className="flex items-center">
            <div className="cs-title-dash"></div>
            <h3 className="cs-title">Finanzer</h3>
          </div>
          <h2 className="cs-subtitle xl:text-7xl md:text-6xl text-4xl">
            Finanzer does something to help a certain someone solve a certain
            problem
          </h2>
          <div className="flex md:flex-row flex-col gap-16 w-11/12 font-body items-start">
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
            <div className="md:w-1/4 w-full flex items-center">
              <button className="button-primary bg-indigo-200 dark:bg-indigo-200 hover:bg-indigo-300 dark:hover:bg-indigo-100 focus:bg-indigo-400 dark:focus:bg-indigo-300 text-lg md:text-xl xl:text-2xl px-8 py-4 text-indigo-600 focus:text-indigo-900 flex items-center">
                View Project
                <IoOpenOutline className="ml-2.5 stroke-4 h-6 w-6" />
              </button>
            </div>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At diam
            facilisis etiam non tincidunt eleifend et viverra. Integer
            suspendisse duis viverra pretium tellus. Netus felis vitae nibh
            habitasse etiam risus feugiat ut. Nisl ullamcorper turpis arcu arcu
            sit pellentesque consectetur mattis. Ipsum tincidunt nec ornare et
            integer. At arcu semper sit magnis ut.
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
          <div className="flex items-center sm:py-16 pt-16 pb-6">
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
            by the research and analysis I did prior, user interviews &
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
            From here, I was able to narrow done the specifics the client was
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
          <h3 className="cs-title text-gray-500 dark:text-gray-500 sm:text-base text-sm">
            Transaction form
          </h3>
          <div className="flex justify-center sm:w-3/4 w-full object-center pt-4 pb-16">
            <img
              src={darkTheme ? FormDark : FormLight}
              alt="transaction form"
              className=""
            />
          </div>
        </div>
        <div className="flex justify-center flex-col w-full h-full pb-24 pt-36 px-8 sm:px-0 text-center dark:bg-gray-900 dark:bg-opacity-80">
          <h3 className="text-gray-600 dark:text-gray-300 sm:text-4xl text-2xl font-bold pb-12 font-display">
            Thank you for reading all the way here!
          </h3>
          <h5 className="text-indigo-400 dark:text-indigo-300 sm:text-lg text-sm font-bold font-display">
            Click below for more info on this project
          </h5>
          <div className="flex justify-center pt-8 pb-8">
            <button className="button-primary dark:text-gray-800 focus:dark:text-gray-900 px-3 md:px-6 py-1.5 md:py-2 xl:mr-4 mr-2 text-lg md:text-xl xl:text-2xl xl:px-8 xl:py-3 font-bold cursor-pointer bg-indigo-200 dark:bg-indigo-300 hover:bg-indigo-300 dark:hover:bg-indigo-200 focus:bg-indigo-400 dark:focus:bg-indigo-400 text-indigo-600 focus:text-indigo-900 flex items-center ">
              Github
            </button>
            <button className="button-primary dark:text-gray-800 focus:dark:text-gray-900 px-3 md:px-6 py-1.5 md:py-2 xl:ml-4 ml-2 text-lg md:text-xl xl:text-2xl xl:px-8 xl:py-3 font-bold cursor-pointer bg-indigo-200 dark:bg-indigo-300 hover:bg-indigo-300 dark:hover:bg-indigo-200 focus:bg-indigo-400 dark:focus:bg-indigo-400 text-indigo-600 focus:text-indigo-900 flex items-center ">
              Website
            </button>
          </div>
          <div>
            {/* <ScrollToTop /> */}
            <div className="w-full sm:flex hidden justify-end pr-16 cursor-pointer">
              <div className="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-400 hover:bg-opacity-50 dark:hover:bg-gray-600 h-10 w-10 flex justify-center items-center rounded-md shadow">
                <HiArrowUp />
              </div>
            </div>
            {/* </ScrollToTop> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProjectPage;
