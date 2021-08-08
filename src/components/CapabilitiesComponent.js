import React from "react";
import { Row, Col, Container } from "reactstrap";

const Capabilities = () => {
  return (
    <section id="capabilities-section" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col className="text-center pb-5 pt-sm-1">
            <h3>Creative Capabilities</h3>
          </Col>
        </Row>
        <Row className="pt-1 py-sm-5">
          <Col sm="4" className="text-center px-3" data-aos="fade-right" data-aos-duration="1500">
            <h5>Graphic Design</h5>
            <p>If you're looking for assitance with sprucing up your business marketing materials or even laying out your next company presentation, we've got you covered. Our team has nearly a decade of design experience to assist you.</p>
          </Col>

          <Col sm="4" className="text-center px-3 center-item mt-4 mt-sm-0" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
            <h5>Brand Identity</h5>
            <p>Your company branding is often the first impression upon prospective clients and first impressions speak volumes. Let us partner with you to ensure your first impression isn't just good; it's great!</p>
          </Col>

          <Col sm="4" className="text-center px-3 mt-4 mt-sm-0" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600">
            <h5>Website Design & Development</h5>
            <p>A web presence is essential for any business in the modern era. Our talented team is equipped to design and/or develop modern, responsive web experiences for you.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Capabilities;
