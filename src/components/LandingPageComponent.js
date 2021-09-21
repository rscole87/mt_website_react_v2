import React from "react";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Featured from "./FeaturedComponent";
import Capabilities from "./CapabilitiesComponent";

const LandingPage = (props) => {
  return (
    <>
      <Header />
      <About />
      <Featured activeProject={props.activeProject} setActiveProject={props.setActiveProject} projects={props.projects} />
      <Capabilities />
    </>
  );
};

export default LandingPage;
