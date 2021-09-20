import React, { useState } from "react";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Featured from "./FeaturedComponent";
import ProjectPage from "./ProjectPageComponent";
import Capabilities from "./CapabilitiesComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

const Main = () => {
  const [activeProject, setActiveProject] = useState(null);
  console.log(activeProject);
  return (
    <>
      <BrowserRouter>
        <Header />
        <About />
        <Switch>
          <Route path="/" render={() => <Featured activeProject={activeProject} setActiveProject={setActiveProject} />} />
          <Route path="/:projectId" component={ProjectPage} />
        </Switch>
        <Capabilities />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Main;
