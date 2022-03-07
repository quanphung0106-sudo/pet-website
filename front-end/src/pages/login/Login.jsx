import React, { useState } from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaEyeSlash, FaEye, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const hideOrShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Container fluid className="rm-pd">
        <img className="login-page--images" src="./assets/images/sleeping-dog-background.jpg" alt="login background" />
        <Row className="login-page">
          <Col className="rm-pd"></Col>
          <Col className="d-flex justify-content-center align-items-center rm-pd">
            <Form className="login-page__login-form br-6">
              <div className="login-page__login-form--padding">
                <h4>Welcome back!</h4>
                <h3>Sign in to</h3>
                <p className="fw-b">Enjoy the moment.</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-b">Email</Form.Label>
                  <Form.Control
                    className="br-6"
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-b">Password</Form.Label>
                  <InputGroup className="position-relative">
                    <Form.Control
                      type={`${showPassword ? "text" : "password"}`}
                      placeholder="Enter your password"
                      className="br-6"
                    />
                    <div
                      className="position-absolute"
                      style={{ right: "10px", zIndex: 10, padding: "11px" }}
                    >
                      {showPassword ? (
                        <FaEyeSlash
                          className="eyes-btn"
                          onClick={() => hideOrShowPassword()}
                        />
                      ) : (
                        <FaEye
                          className="eyes-btn"
                          onClick={() => hideOrShowPassword()}
                        />
                      )}
                    </div>
                  </InputGroup>
                </Form.Group>
                <Button
                  variant="dark"
                  type="submit"
                  className="br-6 btn"
                  style={{
                    width: "100%",
                    padding: "12px",
                    margin: "12px 0 6px 0",
                  }}
                >
                  Login
                </Button>
                <p className="text-center">
                  Don't have an Account?{" "}
                  <span className="fw-b">
                    <Link to="/register" className="link-default">
                      Register now!
                    </Link>
                  </span>
                </p>
                <p className="text-center">- or -</p>
                <Button
                  type="submit"
                  className="br-6 btn"
                  style={{
                    width: "100%",
                    padding: "11px",
                    backgroundColor: "#435994"
                  }}
                >
                <FaFacebook style={{lineHeight: "50px", fontSize: "25px", marginRight: "6px"}} />
                  Login with Facebook
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
