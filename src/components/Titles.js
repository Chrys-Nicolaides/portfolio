import React from "react";
import CardTitles from "../components/CardTitles";
import { ReactComponent as ArchLogo } from "../images/ArchLogo.svg";
import { ReactComponent as DesignerLogo } from "../images/DesignerLogo.svg";
import { ReactComponent as DevLogo } from "../images/DevLogo.svg";

const Titles = () => {
  return (
    <div className="text-gray-300 dark:text-700 flex sm:flex-row flex-col gap-y-16 justify-between">
      <CardTitles
        additionalClasses={"border-red-200 max-w-xs"}
        icon={<ArchLogo />}
        title={"Architect"}
        tags={["archicad", "revit", "photoshop"]}
      />
      <CardTitles
        additionalClasses={"border-red-300 max-w-xs"}
        icon={<DesignerLogo />}
        title={"Designer"}
        tags={["figma", "illustrator", "indesign"]}
      />
      <CardTitles
        additionalClasses={"border-red-400 max-w-xs"}
        icon={<DevLogo />}
        title={"Developer"}
        tags={["react", "javascript", "css"]}
      />
    </div>
  );
};

export default Titles;
