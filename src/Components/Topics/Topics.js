import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopicCard from "../Topics/TopicCard";
// import Particle from "../Particle";
import onlineTraining from "../../Assets/OT.svg";
import personalTraining from "../../Assets/PT.svg";
import crossfitTraining from "../../Assets/CT.svg";



function Topics() {

  return (
    <Container fluid className="topic-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="topic-heading">
          We <strong className="green">Offer </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Here are a few trainings We've offer.
        </p>
        <Row
          style={{
            justifyContent: "space-between",
            paddingBottom: "10px",
          }}
        >
          <Col md={4} className="topic-card">
            <TopicCard
              imgPath={onlineTraining}
              alt="online training"
              title="Online Training"
              description="Online training has revolutionized the fitness industry, offering convenience, flexibility, and accessibility to individuals worldwide. With a plethora of platforms and virtual coaches available, anyone can access high-quality workout programs, nutritional guidance, and expert advice from the comfort of their own home. Whether through pre-recorded videos, live-streamed classes, or interactive apps, online training caters to a diverse range of fitness goals and preferences. From beginners looking to establish a fitness routine to seasoned athletes seeking specialized training programs, online platforms offer customizable options to suit every need. With the added benefits of affordability and the ability to train anytime, anywhere, online training has become a popular and effective solution for achieving fitness goals in today's fast-paced world."
            />
          </Col>

          <Col md={4} className="topic-card">
            <TopicCard
              imgPath={personalTraining}
              alt="pesronal training"
              title="Personal Training"
              description="Personal training offers individuals a tailored approach to achieving their fitness goals, with a focus on personalized instruction and guidance. Working closely with a certified personal trainer, clients receive individualized workout plans and attention to ensure they're maximizing their potential and addressing their specific needs. Whether aiming for weight loss, muscle gain, improved athletic performance, or overall health and wellness, personal training provides accountability, motivation, and expertise to help clients reach their goals safely and efficiently. With customized workouts, nutritional advice, and ongoing support, personal training empowers individuals to unlock their full fitness potential and lead healthier, happier lives."
            />
          </Col>

          <Col md={4} className="topic-card">
            <TopicCard
              imgPath={crossfitTraining}
              alt="crossfit training"
              title="Crossfit Training"
              description="CrossFit training is a high-intensity fitness program
            that combines elements of weightlifting, gymnastics, and
            cardiovascular conditioning. Workouts are varied and constantly
            changing, challenging participants to push their limits and improve
            their overall fitness levels. From Olympic lifting to bodyweight
            exercises like pull-ups and push-ups, CrossFit emphasizes functional
            movements that translate to real-world activities. The community
            aspect of CrossFit is also a key component, with participants often
            working out together and providing support and motivation for one
            another. With its emphasis on intensity, variety, and camaraderie,
            CrossFit has gained popularity as an effective and engaging way to
            achieve fitness goals."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Topics;
