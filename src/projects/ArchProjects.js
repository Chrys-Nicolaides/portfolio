import React from "react";

import CardLarge from "../components/CardLarge";
import CarouselProjectOne from "../projects/CarouselProjectOne";
import CarouselProjectTwo from "../projects/CarouselProjectTwo";
import CarouselProjectThree from "../projects/CarouselProjectThree";
import YumDark from "../images/YumDark.webp";
import YumLight from "../images/YumLight.webp";
import TswaluGroup from "../images/TswaluGroup.webp";
import MashatuGroup from "../images/MashatuGroup.webp";

const ArchProjects = ({ darkTheme }) => {
  return (
    <div>
      <CardLarge
        darkTheme={darkTheme}
        image={darkTheme ? YumDark : YumLight}
        number={"01"}
        title={"YUM! Offices"}
        subtitle={"Office fit-out for new KFC headquarters"}
        project={CarouselProjectOne}
        link={"/yum"}
      />
      <CardLarge
        darkTheme={darkTheme}
        image={TswaluGroup}
        number={"02"}
        title={"Tswalu"}
        subtitle={"Kalahari game lodge refurbishment"}
        project={CarouselProjectTwo}
        link={"/tswalu"}
      />
      <CardLarge
        darkTheme={darkTheme}
        image={MashatuGroup}
        number={"03"}
        title={"Euphorbia Camp"}
        subtitle={"New private game lodge in Botswana"}
        project={CarouselProjectThree}
        link={"/euphorbia"}
      />
    </div>
  );
};

export default ArchProjects;
