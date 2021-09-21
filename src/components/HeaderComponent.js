import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavComponent from "./NavComponent";
import mtLogo from "../images/mt-logo.png";


const Header = () => {

  return (
    <>
      <section id="header-section">
        <Container>
          <Row id="header">
            <Col className="mx-auto my-auto text-center">
              <img src={mtLogo} alt="Marble Theory Design" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Header;
