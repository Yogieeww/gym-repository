import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import joinToday from "../Assets/join.svg";

const Jointoday = () => {
  return (
    <Container fluid className="jt-section" id="jointoday">
      <Container className="jt-content">
        <Row style={{justifyContent:"center"}}>
          <Col md={6} >
            <img
              src={joinToday}
              alt=""
              className="img-fluid"
              style={{ maxHeight: "500px" }}
            />
          </Col>
          <Col md={6}  className='jt-text'>
            <h5>Join today</h5>
            <p>Let's Start Your Fitness Journey With Us.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Jointoday