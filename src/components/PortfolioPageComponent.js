import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ProjectPage from "./ProjectPageComponent";

const PortfolioPage = (props) => {
  const projectThumbs = props.projects.map((project) => {
    return (
      <div
        className="project-thumb p-0 xpt-5"
        key={project.id}
        onClick={() => {
          props.setActiveProject(project);
        }}
      >
        <Link to={`/project${project.id + 1}`}>
          <div className="thumb-overlay d-flex">
            <h3 className="project-title">{project.title}</h3>
          </div>
          <img src={project.image} alt={project.title} />
        </Link>
      </div>
    );
  });

//   if (props.activeProject){
//     return <ProjectPage project={props.activeProject} setActiveProject={props.setActiveProject} />
//   } 
  
  return (
    <section id="portfolio-section" className="d-flex align-items-center">
      <Container fluid>
        <Row>
          <Col className="text-center pb-5">
            <h3>Portfolio</h3>
          </Col>
        </Row>
        <Row className="justify-content-around">{projectThumbs}</Row>
      </Container>
    </section>
  );
};

export default PortfolioPage;
