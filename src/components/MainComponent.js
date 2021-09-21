import React, { useState } from "react";
import NavComponent from "./NavComponent";
import LandingPage from "./LandingPageComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import PortfolioPage from "./PortfolioPageComponent";
import ProjectPage from "./ProjectPageComponent";
import PROJECTS from "../shared/projectList";
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ScrollToTop from "./ScrollToTop";

const Main = () => {
  const [activeProject, setActiveProject] = useState(null);
  console.log(activeProject);
  return (
    <>
      <ScrollToTop />
      <NavComponent />
      <Switch>
        <Route exact path="/" render={() => <LandingPage projects={PROJECTS} activeProject={activeProject} setActiveProject={setActiveProject} />} />
        <Route exact path="/portfolio" render={() => <PortfolioPage projects={PROJECTS} activeProject={activeProject} setActiveProject={setActiveProject} />} />
        <Route exact path="/portfolio/:projectid/" render={() => <ProjectPage project={activeProject} setActiveProject={setActiveProject} />} />
        <Redirect to="/" />
      </Switch>
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
