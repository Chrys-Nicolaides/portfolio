import React from "react";
// import { Link, useHistory } from "react-router-dom";

import CardFeature from "../components/CardFeature";
import DashboardLight from "../images/DashboardLight.png";
import DashboardDark from "../images/DashboardDark.png";

const FeatureProject = ({ darkTheme }) => {
  return (
    <div>
      <CardFeature
        image={darkTheme ? DashboardDark : DashboardLight}
        number={"01"}
        title={"Finanzer"}
        subtitle={"Finance management system with React & Tailwind CSS"}
        link={"/featureprojectpage"}
      />
    </div>
  );
};

export default FeatureProject;
