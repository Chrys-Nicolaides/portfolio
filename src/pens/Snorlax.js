import React from "react";
import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
  // stripIndent,
} from "react-codepen-prefill-embed";
import codepens from "../pens/PenObject";

const Snorlax = ({ darkTheme }) => {
  useCodePenEmbed();
  return (
    <PrefillEmbed
      className="codepen"
      penTitle="Spirit Animal"
      embedHeight="400"
      themeId={darkTheme ? "dark" : "light"}
      editable
      description="Renders a barebones React component"
      tags={["pokemon", "snorlax", "sleeping", "css", "animation"]}
      htmlClasses={["loading", "no-js"]}
      head={
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      }
      scripts={[
        "https://unpkg.com/react@16.8.6/umd/react.development.js",
        "https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js",
      ]}
      stylesheets={["https://unpkg.com/normalize.css@8.0.1/normalize.css"]}
    >
      <PrefillLang lang="html">{codepens.snorlax.html}</PrefillLang>
      <PrefillLang lang="css">{codepens.snorlax.css}</PrefillLang>
    </PrefillEmbed>
  );
};

export default Snorlax;
