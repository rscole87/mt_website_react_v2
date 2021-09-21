import React, { useState } from "react";
import Header from "./HeaderComponent";
import LandingPage from "./LandingPageComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import PROJECTS from "../shared/projectList";
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Main = () => {
  const [activeProject, setActiveProject] = useState(null);
  console.log(activeProject);
  return (
    <>
      <Header />
      <LandingPage projects={PROJECTS} activeProject={activeProject} setActiveProject={setActiveProject}/>
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
