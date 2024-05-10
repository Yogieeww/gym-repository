import VanillaTilt from "vanilla-tilt";
import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MajinImg from "../Assets/Majin Content.svg";

// Custom hook to add tilt functionality to a component

const useTilt = (options) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    let currentRef = tiltRef.current;

    if (currentRef) {
      VanillaTilt.init(currentRef, options);
      return () => {
        if (currentRef && currentRef.vanillaTilt) {
          currentRef.vanillaTilt.destroy();
        }
      };
    }
  }, [options]);
  return tiltRef;
};

// Example component using the useTilt

const Aboutus = () => {
const tiltRef = useTilt({
    max: 25,
    speed: 400,
    // glare: true,
    "max-glare": 0.5,
});
  return (
    <Container className="about-section">
      <Container className="about-content">
        <Row>
          <Col md={6}>
            <img
              src={MajinImg}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
          <Col md={6} className="about-header">
            <div ref={tiltRef} className="blur-rectangle">
              <h2>
                ABOUT <strong className="us">US</strong>{" "}
              </h2>
              <p>
                we are award wining professional fitness club providing the best
                workout training for everyone. We offered variety of online
                training session and transforming you from ordinary to
                extraordinary.
              </p>
              <Row
                className="about-details"
                style={{ justifyContent: "space-between", padding: "10px 0px" }}
              >
                <Col md={4} className="pt-div">
                  <h4>5+</h4>
                  <h5>Personal Trainers</h5>
                </Col>
                <Col md={4} className="oc-div">
                  <h4>15+</h4>
                  <h5>Online Classes</h5>
                </Col>
                <Col md={4} className="lc-div">
                  <h4>200+</h4>
                  <h5>Lives Changes</h5>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Aboutus;
