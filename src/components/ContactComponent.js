import React from "react";
import { Row, Col, Container } from "reactstrap";

const Contact = () => {
  return (
    <section id="contact-section">
      <Container>
        <Row>
          <Col className="text-center text-white">
            <h3 className="heading-medium">Contact</h3>
          </Col>
        </Row>

        <Row>
          <Col id="form-div" className="pt-5">
            <form id="contact-form" method="post">
              <input type="hidden" name="form-name" value="static-contact-form" />

              <input name="f_name" type="text" placeholder="First Name*" />
              <input name="l_name" type="text" placeholder="Last Name*" />

              <input name="email" type="text" placeholder="Email*" />
              <input name="company" type="text" placeholder="Company Name*" />
              <input name="role" type="text" placeholder="Your role/title" />

              <textarea name="message" cols="75" rows="3" placeholder="Please tell us a little about you business and how we can best assist you."></textarea>

              <div id="submit-bttn-div">
                <input id="submit" type="submit" value="Submit" />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
