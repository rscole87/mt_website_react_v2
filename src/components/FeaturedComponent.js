import React from "react";
import { Container, Row, Col } from "reactstrap";

const Featured = () => {
  return (
    <section id="featured-projects-section" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col sm="10">
            <h3>Featured Projects</h3>
          </Col>
          <Col sm="2">
            <button>See all work</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Featured;
