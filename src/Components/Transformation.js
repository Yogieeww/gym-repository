import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import krish from "../Assets/krish.jpg";
import ashwin from "../Assets/ashwin.jpg";
import yogi from "../Assets/yogi.jpg";
import babu from "../Assets/babu.jpg";

const Transformation = () => {
  return (
    <Container fluid className="transformation-section" id="transformation">
      <Container className="transformation-content">
        <h2>
          {" "}
          Some examples of how transformations look for{" "}
          <strong className="green">happier</strong>,
          <strong className="green">fitter</strong>, and
          <strong className="green">motivated people</strong> with us
        </h2>
        <Row className="g-3">
          <Col md={3} className="transformation-pics">
            <img src={krish} alt="krish" style={{ width: "270px" }} />{" "}
          </Col>
          <Col md={3} className="transformation-pics">
            <img src={ashwin} alt="ashwin" style={{ width: "270px" }} />{" "}
          </Col>
          <Col md={3} className="transformation-pics">
            <img
              src={yogi}
              alt="yogi"
              style={{ width: "270px",  }}
            />{" "}
          </Col>
          <Col md={3} className="transformation-pics">
            <img
              src={babu}
              alt="babu"
              style={{ width: "270px",  }}
            />{" "}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Transformation;
