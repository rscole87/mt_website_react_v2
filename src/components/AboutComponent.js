import React from "react";
import { Row, Col, Container } from "reactstrap";

const About = () => {
  return (
    <section id="about-section" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col sm="6">
            <p className="body-copy">Marble Theory is a branding and design firm that helps companies put their best foot forward through refined design and stimulating visual creations. These creations build a unique brand experience for our clients which can be felt in all touch points.</p>
            <span className="accent-text">The look, the feel, the experience.</span>
          </Col>

          <Col sm="6">
            <h3>Collaborative Solutions to Creative Problems</h3>
            <button>About Us</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
