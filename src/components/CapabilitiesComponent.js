import React from "react";
import { Row, Col, Container } from "reactstrap";

const Capabilities = () => {
  return (
    <section id="capabilities-section" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col className="text-center py-5 pt-sm-1">
            <h3>Creative Capabilities</h3>
          </Col>
        </Row>
        <Row className="pt-1 py-sm-5">
          <Col sm="4" className="text-center px-3">
            <h5>Graphic Design</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>

          <Col sm="4" className="text-center px-3 center-item">
            <h5>Brand Identity</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>

          <Col sm="4" className="text-center px-3">
            <h5>Website Design & Development</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Capabilities;
