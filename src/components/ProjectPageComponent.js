import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const ProjectPage = (props) => {
  const projectThumbs = props.project.images.map((image) => {
    return <img src={image} />;
  });

  return (
    <>
      <section id="portfolio-project">
        <Container fluid={true} className="container-fluid project-page-header" style={{ backgroundImage: `url(${props.project.headerImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          blah
        </Container>

        <Container>
          <Row>
            <h3 className="py-5">{props.project.title}</h3>
          </Row>
          <Row>
            <Col>
              <button className="closeBttn" onClick={() => props.setActiveProject(null)}>
                <a href="/#featured-work-section">Close</a>
              </button>
              <Row>{projectThumbs}</Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProjectPage;
