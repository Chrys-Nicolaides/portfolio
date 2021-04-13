import React from "react";
import CardLarge from "../components/CardLarge";
import DesignSystemsLight from "../images/DesignSystemsLight.png";

const FeatureProject = () => {
  return (
    <div>
      <CardLarge
        image={[DesignSystemsLight]}
        number={"01"}
        title={"Financer"}
        subtitle={"Finance management system built with React & Tailwind CSS"}
        buttonText={"View project"}
      />
    </div>
  );
};

export default FeatureProject;
