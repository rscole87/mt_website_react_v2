import React from "react";
import { Container, Row, Col } from "reactstrap";
import mtLogo from "../images/mt-logo-white.png";
import navLinks from "../shared/navLinks";

export default function Footer() {
  const links = navLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.url} className="footer-link">
          {link.text}
        </a>
      </li>
    );
  });

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm="4" className="d-flex flex-column flex-lg-row justify-content-center justify-content-sm-start">
              <div className="align-self-center mb-1 mb-sm-0">
                <img src={mtLogo} className="mt-logo" alt="Marble Theory Design" />
              </div>
              <div className="d-none d-sm-block">
                <ul id="footer-nav" className="p-0 ps-lg-5 mt-3 mt-lg-0 d-flex flex-row flex-lg-column justify-content-around">
                  {links}
                </ul>
              </div>
            </Col>

            <Col sm="4" className="text-center text-sm-start mb-4 mb-sm-0 ps-sm-5 ">
              <address>
                12345 Main Street St. Petersburg, FL 33700 <br />
                (727) 555-1234 <br />
                marbletheorystudio@gmail.com
              </address>
            </Col>

            <Col sm="4" className="text-center">
              <p><i className="fa fa-copyright fa-lg" /> 2021 Marble Theory Design, LLC</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}