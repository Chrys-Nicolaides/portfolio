import React from "react";
import CardTitles from "../components/CardTitles";
import { ReactComponent as ArchLogo } from "../images/ArchLogo.svg";
import { ReactComponent as DesignerLogo } from "../images/DesignerLogo.svg";
import { ReactComponent as DevLogo } from "../images/DevLogo.svg";

const Titles = () => {
  return (
    <div className="text-gray-300 dark:text-700 flex sm:flex-row flex-col sm:gap-x-24 gap-y-24 sm:w-3/5 sm:mx-0 mx-8">
      <CardTitles
        additionalClasses={"border-red-200"}
        icon={<ArchLogo />}
        title={"Architect"}
        tags={["archicad", "revit", "photoshop"]}
      />
      <CardTitles
        additionalClasses={" border-red-300"}
        icon={<DesignerLogo />}
        title={"Designer"}
        tags={["figma", "illustrator", "indesign"]}
      />
      <CardTitles
        additionalClasses={" border-red-400"}
        icon={<DevLogo />}
        title={"Developer"}
        tags={["javascript", "react", "html", "css"]}
      />
    </div>
  );
};

export default Titles;
