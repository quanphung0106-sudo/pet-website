import React, { useState } from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const hideOrShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const hideOrShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div>
      <Container fluid className="rm-pd">
        <img className="register-page--images" src="./assets/images/sleeping-dog-background.jpg" alt="register background" />
        <Row className="register-page">
          <Col className="rm-pd"></Col>
          <Col className="d-flex justify-content-center align-items-center rm-pd">
            <Form className="register-page__register-form br-6">
              <div className="register-page__register-form--padding">
                <h4>Welcome!</h4>
                <h3>Sign up to</h3>
                <p className="fw-b">Enjoy the moment.</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-b">Email</Form.Label>
                  <Form.Control
                    className="br-6"
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                  <Form.Label className="fw-b">User name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your user name"
                    className="br-6"
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
                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label className="fw-b">Confirm Password</Form.Label>
                  <InputGroup className="position-relative">
                    <Form.Control
                      type={`${showPassword2 ? "text" : "password"}`}
                      placeholder="Confirm your password"
                      className="br-6"
                    />
                    <div
                      className="position-absolute"
                      style={{ right: "10px", zIndex: 10, padding: "11px" }}
                    >
                      {showPassword2 ? (
                        <FaEyeSlash
                          className="eyes-btn"
                          onClick={() => hideOrShowPassword2()}
                        />
                      ) : (
                        <FaEye
                          className="eyes-btn"
                          onClick={() => hideOrShowPassword2()}
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
                  Register
                </Button>
                <p className="text-center">
                  Already have an Account?{" "}
                  <span className="fw-b">
                    <Link to="/" className="link-default">
                      Login
                    </Link>
                  </span>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
