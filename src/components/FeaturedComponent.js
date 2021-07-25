import React from "react";
import { Container, Row, Col } from "reactstrap";
import PROJECTS from "../shared/projects";

const Featured = () => {
  const projectThumbs = PROJECTS.map((project) => {
    return (
      <div className="project-thumb">
        <img src={project.image} alt={project.title} />
      </div>
    );
  });

  return (
    <section id="featured-projects-section" className="d-flex align-items-center">
      <Container fluid>
        <Row className="pb-5">
          <Col className="text-center">
            <h3>Featured Projects</h3>
          </Col>
        </Row>
        <Row className="justify-content-around">{projectThumbs}</Row>
      </Container>
    </section>
  );
};

export default Featured;
