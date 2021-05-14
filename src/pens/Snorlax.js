import React from "react";
import Codepen from "react-codepen-embed";

const CodepenEmbedded = ({ darkTheme }) => {
  return (
    <Codepen
      defaultTab="result"
      hash="KKVxmbe"
      user="Chrys-Nicolaides"
      loader={() => <div>Loading...</div>}
      themeId={darkTheme ? "dark" : "light"}
      preview={false}
      height={400}
    />
  );
};

export default CodepenEmbedded;
