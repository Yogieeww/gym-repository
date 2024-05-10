import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import Footerlogo from "../Assets/logo figma.svg";






const Footer = () => {
  return (
    <Container fluid className="footer-section" id="footer">
      <Container>
        <Row>
          <Col md={12} className="footer-social">
            <h1>
              Connect <strong className="green">With</strong>
            </h1>
            <p>
              Feel free to <span className="green">connect </span>with me
            </p>
            <ul className="footer-social-links">
              <li className="social-icons">
                <a
                  href="https://wa.link/i5sfn0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  footer-social-icons"
                >
                  <IoLogoWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100091914544306&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  footer-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:genetivvaultfitnessstudio@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  footer-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/genetic._.vault?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour footer-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={12} className="footer-gv-logo">
            <img style={{ width: "250px" }} src={Footerlogo} alt="" />
            <p>© 2024 | Genetic Vault Fitness Studio,Unisex</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
