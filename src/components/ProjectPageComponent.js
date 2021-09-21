import React from "react";
import { Container , Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const ProjectPage = (props) => {
  return (
    <>
      <section id="portfolio-project">
        <Container fluid={true} className="container-fluid project-page-header" style={{ backgroundImage: `url(${props.project.image})` }}>
          blah
        </Container>

        <Container>
          <Row>
            <h3 className="py-5">{props.project.title}</h3>
          </Row>
          <Row>
            <Col sm="4" lg="6">
              <button onClick={() => props.setActiveProject(null)}>
                <a href="/#featured-work-section" >Close</a>
              </button>
              <p>{props.project.description}</p>
            </Col>

            <Col sm="8" lg="6" className="portfolio-thumb">
              <img src={props.project.image} alt={props.project.title} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProjectPage;
