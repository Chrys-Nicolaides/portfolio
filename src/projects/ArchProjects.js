import React from "react";

import CardLarge from "../components/CardLarge";
import CarouselProjectOne from "../projects/CarouselProjectOne";
import CarouselProjectTwo from "../projects/CarouselProjectTwo";
import CarouselProjectThree from "../projects/CarouselProjectThree";
import YumDark from "../images/YumDark.png";
import YumLight from "../images/YumLight.png";
import TswaluGroup from "../images/TswaluGroup.png";
import MashatuGroup from "../images/MashatuGroup.png";

const ArchProjects = ({ darkTheme }) => {
  return (
    <div>
      <CardLarge
        darkTheme={darkTheme}
        image={darkTheme ? YumDark : YumLight}
        number={"01"}
        title={"YUM! Offices"}
        subtitle={"Office fit-out for new KFC headquarters"}
        buttonText={"View gallery"}
        project={CarouselProjectOne}
      />
      <CardLarge
        darkTheme={darkTheme}
        image={TswaluGroup}
        number={"02"}
        title={"Tswalu"}
        subtitle={"Kalahari game lodge refurbishment"}
        buttonText={"View gallery"}
        project={CarouselProjectTwo}
      />
      <CardLarge
        darkTheme={darkTheme}
        image={MashatuGroup}
        number={"03"}
        title={"Euphorbia Camp"}
        subtitle={"New private game lodge in Botswana"}
        buttonText={"View gallery"}
        project={CarouselProjectThree}
      />
    </div>
  );
};

export default ArchProjects;
