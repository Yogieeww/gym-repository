import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/Frame 90.png";
import Particle from "../Components/Particle";
import homeLogo from "../Assets/Gym-amico.svg";
import Button from "react-bootstrap/Button";
import arrowIcon from "../Assets/arrow-icon.png";
import Footer from "../Components/Footer";
import Topic from "../Components/Topics/Topics";
import Aboutus from "../Components/Aboutus";
import Benefits from "../Components/Benefits";
import Jointoday from "../Components/Jointoday";
import FAQs from "../Components/FAQs";
import Transformation from "../Components/Transformation";




const Home = () => {
 const footerRef = useRef(null);
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Navbar.Brand href="/" className="d-flex justify-content-center">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                Champion
                <strong className="main-name"> training</strong>
              </h1>
              <h1 style={{ paddingBottom: 15 }} className="Heading-name-2">
                for everyday people
              </h1>
              <p>
                "Believe in yourself and all that you are. Know that there is
                something inside you that is greater than any obstacle."
              </p>

              <div className="gts-btn">
                <Button onClick={scrollToFooter} className="gts-btn-inner">
                  <img src={arrowIcon} alt="arrow" className="arrow-icon" />
                  <div className="getstarted__text">Get Started</div>
                </Button>
              </div>
            </Col>

            <Col md={5} className="g-3" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="amico"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
        <Topic />
        <Aboutus />
        <Benefits />
        <FAQs />
        <Transformation />
        <Jointoday />
        <div>
          <footer ref={footerRef}>
            <Footer />
          </footer>
        </div>
      </Container>
    </section>
  );
};

export default Home;
