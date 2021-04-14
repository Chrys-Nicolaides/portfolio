import React from "react";
import CardLarge from "../components/CardLarge";
import YumDark from "../images/YumDark.png";
import YumLight from "../images/YumLight.png";
import TswaluGroup from "../images/TswaluGroup.png";
import EuphorbiaCover from "../images/EuphorbiaCover.png";

const ArchProjects = ({ darkTheme }) => {
  return (
    <div>
      <CardLarge
        image={darkTheme ? YumDark : YumLight}
        number={"01"}
        title={"YUM! Offices"}
        subtitle={"Office fit-out for new KFC headquarters"}
        buttonText={"View project"}
      />
      <CardLarge
        image={TswaluGroup}
        number={"02"}
        title={"Tswalu"}
        subtitle={"Kalahari game lodge refurbishment"}
        buttonText={"View project"}
      />
      <CardLarge
        image={EuphorbiaCover}
        number={"03"}
        title={"Euphorbia"}
        subtitle={"New private game lodge in Botswana"}
        buttonText={"View project"}
      />
    </div>
  );
};

export default ArchProjects;
