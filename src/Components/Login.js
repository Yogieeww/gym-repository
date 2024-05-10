import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "lottie-react";
import animationData from "../Animation/Animation-Login.json";
import Logo from "../Assets/logo figma.svg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import Userlogo from "../Assets/User-logo.svg";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();


  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <Container fluid className="login-section" id="Login">
      <Container>
        <Row>
          <Col md={6} className="login-heading">
            <h3 className="wb__text">Welcome back</h3>
            <Lottie
              className="login__animation"
              animationData={animationData}
            />
          </Col>
          <Col fluid md={6} className="login-header-right">
            <div className="login__rectangle">
              <div className="login__content">
                <img style={{ width: "150px" }} src={Logo} alt="" />
                <div class="input-container">
                  <input type="text" required />
                  <label for="">Username</label>
                
                </div>
                <div class="input-container">
                  <input type={showPassword ? "text" : "password"} required />
                  <label for="">Password</label>
                  <span
                    className="toggle-password-visibility"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "show" : "hide"}
                  </span>
                </div>
                <div className="check__container">
                  {" "}
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={toggleCheckbox}
                    className="custom-checkbox"
                  />
                  <label>{isChecked ? "Remember Me" : "Remember Me"}</label>
                </div>
                <div className="loginui-btn ">
                  <Button to="" className="loginui-btn-inner">
                    <img src={Userlogo} className="login_user-icon" />
                    <div className="loginui_login__btn">login</div>
                  </Button>
                </div>
                <div className="fgp">
                  <a href="">Forget Password?</a>
                </div>
                <div className="dha__container">
                  <div className="dha-text">Don’t have an account?</div>
                  <a href="" onClick={() => navigate("/signup")}>
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Login;
