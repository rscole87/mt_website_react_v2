import React from "react";
import { Row, Col, Container } from "reactstrap";

const About = () => {
  return (
    <section id="about-section" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col sm="6" className="pt-4 pt-sm-0 pe-sm-5">
            <p className="body-copy"><strong>Marble Theory Design</strong> is a branding and design firm that helps companies put their best foot forward through refined design and stimulating visual creations. These creations build a unique brand experience for our clients which can be felt in all touch points.</p>
            <p>With nearly 10 years of industry experience, our team is well equipped to assist you with your creative needs and to help take your business to the next level.</p>
            <p>Whether you’re a budding entrepreneur or a fortune 500 company, we would love to partner with you for your next creative pursuit.</p>
            {/* <span className="accent-text">The look, the feel, the experience.</span> */}
          </Col>

          <Col sm="6" className="pt-3 pt-sm-0 ps-sm-5 ps-md-3 d-flex align-items-center" id="right-col">
            <h3 className="pull-quote">Collaborative Solutions to Creative Problems</h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
