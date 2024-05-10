import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import supportIcon from "../Assets/friends-icon.svg";
import toolsandTrainingIcon from "../Assets/tools-training-icon.svg";
import conveienceIcon from "../Assets/convenience.svg";
import communityIcon from "../Assets/Cupid.svg";
const Benefits = () => {
  return (
    <Container className="benefit-section">
      <Container className="benefit-content">
        <h2>
          {" "}
          Benefit For joining{" "}
          <strong className="gvf">Genetic vault fitness</strong>{" "}
        </h2>
        <Row>
          <Col md={6} className="support">
            <img
              src={supportIcon}
              alt=""
              className="img-fluid"
              style={{ maxHeight: "70px" }}
            />
            <h5>Support</h5>
            <p>
              Every member gets a free, personalized Get Started Plan when they
              join. Our friendly, professional staff is trained to help you
              along your fitness journey, no matter how much support you need
            </p>
          </Col>
          <Col md={6} className="support">
            <img
              src={toolsandTrainingIcon}
              alt=""
              className="img-fluid"
              style={{ maxHeight: "70px" }}
            />
            <h5>Tools and training</h5>
            <p>
              Getting to a healthier place is about more than going to the gym.
              That's why we offer personal training and classes when you're
              here, and the right tools to keep you on track when you're not.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="support">
            <img
              src={conveienceIcon}
              alt=""
              className="img-fluid"
              style={{ maxHeight: "70px" }}
            />
            <h5>Motivation </h5>
            <p>
              Going to the gym regularly needs commitment and motivation. On
              somedays, you may not feel up to the task. However,joining the genetic vault fitness studio,unisex can provide the inspiration you need to keep going. Seeing other people working hard can be motivating,and having a trainer or workout partner can push you to go the extra mile.Additionally,the community atmosphere can help you stay commited to your fitness goals.
            </p>
          </Col>
          <Col md={6} className="support">
            <img
              src={communityIcon}
              alt=""
              className="img-fluid"
              style={{ maxHeight: "70px" }}
            />
            <h5>Community</h5>
            <p>
              You’re not just joining a gym. You’re joining a supportive
              community of like-minded people who are here to give you the
              encouragement you need.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Benefits