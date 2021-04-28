import React from "react";
import Codepen from "react-codepen-embed";

const CodepenEmbedded = ({ darkTheme }) => {
  const Loading = (props) => {
    if (props.error) {
      return <div>Error</div>;
    }
    return <div>Loading...</div>;
  };

  return (
    <Codepen
      defaultTab="result"
      hash="LYxmYRz"
      user="Chrys-Nicolaides"
      loader={() => <div>Loading...</div>}
      themeId={darkTheme ? "dark" : "light"}
      preview="false"
      height="400"
    />
  );
};

export default CodepenEmbedded;
