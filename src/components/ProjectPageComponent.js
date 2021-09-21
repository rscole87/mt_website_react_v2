import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const ProjectPage = (props) => {
  return (
    <>
      <Container>
        <Row id="project-page-header" className="py-5">
            <h3 className="py-5">{props.project.title}</h3>
        </Row>
        <Row>
          <Col sm="4" lg="6">
            <button onClick={() => props.setActiveProject(null)}>
              <Link to={`/`}>Close</Link>
            </button>
          </Col>

          <Col sm="8" lg="6">
            <img src={props.project.image} alt={props.project.title} />
          </Col>
        </Row>
        <Row>
          <p>{props.project.description}</p>
        </Row>
      </Container>
    </>
  );
};

export default ProjectPage;
