import React, { useState, useRef } from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaEyeSlash, FaEye, FaDoorClosed } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import axios from "axios";
import RegisterModalError from "../../components/registerModalError/RegisterModalError";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [validatePassword, setValidatePassword] = useState(true);
  const [signupFailure, setSignupFailure] = useState(false);

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  const registerModalError = (err) => {
    if (err) {
      setSignupFailure(true);
    } else {
      setSignupFailure(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      setValidatePassword(false);
    } else {
      setValidatePassword(true);
      const user = {
        email: email.current.value,
        username: username.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("http://localhost:8800/api/auth/register", user);
        navigate("/login");
      } catch (err) {
        registerModalError(err);
      }
    }
  };

  const hideOrShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const hideOrShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const removeEmailErrorMessage = () => {
    var emailInputElement = document.querySelector('input[type="email"]');
    var emailErrorElement =
      emailInputElement.parentElement.querySelector(".error-message");
    if (emailErrorElement) {
      emailErrorElement.innerText = "It should be a valid email address!";
    }
  };

  const removePasswordErrorMessage = () => {
    var passwordInputElement = document.querySelector('input[type="password"]');
    var passwordErrorElement =
      passwordInputElement.parentElement.querySelector(".error-message");
    if (passwordErrorElement) {
      passwordErrorElement.innerText =
        " Password should be 8-19 characters and include at least 1 special character!";
    }
  };

  return (
    <div>
      <Container
        fluid
        className="rm-pd l-all-fsz s-all-fsz"
        style={{ height: "100vh" }}
      >
        <img
          className="register-page__images--tl"
          src="./assets/images/dog-6.jpg"
          alt="register background tablet"
        />
        <img
          className="register-page__images--mb"
          src="./assets/images/dog-3.jpg"
          alt="register background mobile"
        />
        <img
          className="register-page__images"
          src="./assets/images/background-signin-signup.jpg"
          alt="register background pc"
        />
        <Row className="register-page rm-margin">
          <Col className="rm-pd rm-col"></Col>
          <Col className="d-flex justify-content-center align-items-center rm-pd rm-margin">
            <Form
              onSubmit={handleSubmit}
              className="register-page__register-form rm-br"
            >
              <div className="register-page__register-form--padding">
                <h4 className="fw-b m-fsz" style={{ marginBottom: 15 }}>
                  Welcome!
                </h4>
                {/* <h3 className="fw-b m-fsz">Sign up to</h3>
                <p className="fw-b m-fsz">Enjoy the moment.</p> */}

                <Form.Group className="mb-3" controlId="formBasicUserName">
                  <Form.Label className="fw-b m-all-fsz">Username</Form.Label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="br-6 m-all-fsz s-all-fsz validate-input"
                    required
                    ref={username}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-b m-all-fsz">Email</Form.Label>
                  <input
                    className="br-6 m-all-fsz s-all-fsz validate-input"
                    type="email"
                    placeholder="Enter your email"
                    required
                    ref={email}
                    onBlur={removeEmailErrorMessage}
                  />
                  <p
                    className="m-all-fsz error-message error-message-email"
                    style={{ color: "red", marginTop: "4px" }}
                  ></p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-b m-all-fsz">Password</Form.Label>
                  <InputGroup className="position-relative">
                    <input
                      type={`${showPassword ? "text" : "password"}`}
                      placeholder="Enter your password"
                      className={`br-6 m-all-fsz s-all-fsz validate-input
                      ${validatePassword ? "" : "error"}
                      `}
                      required
                      ref={password}
                      onBlur={removePasswordErrorMessage}
                      pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$"
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
                    <p
                      className="m-all-fsz error-message"
                      style={{ color: "red", marginTop: "4px" }}
                    ></p>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label className="fw-b m-all-fsz">
                    Confirm Password
                  </Form.Label>
                  <InputGroup className="position-relative">
                    <input
                      type={`${showPassword2 ? "text" : "password"}`}
                      placeholder="Confirm your password"
                      className={`br-6 m-all-fsz s-all-fsz validate-input
                      ${validatePassword ? "" : "error"}
                      `}
                      required
                      ref={confirmPassword}
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
                  <p
                    className="m-all-fsz"
                    style={{ color: "red", marginTop: "4px" }}
                  >{`${
                    validatePassword
                      ? ""
                      : "Password and confirm password does not match."
                  }`}</p>
                </Form.Group>
                <Button
                  variant="dark"
                  type="submit"
                  className="br-6 btn m-all-fsz s-all-fsz"
                  style={{
                    width: "100%",
                    padding: "12px",
                    margin: "12px 0 6px 0",
                    backgroundColor: "#c38161",
                    border: "none",
                  }}
                >
                  Register
                </Button>
                <p className="text-center mt-12 m-all-fsz">
                  Already have an Account?{" "}
                  <span className="fw-b">
                    <Link
                      to="/login"
                      className="link-default m-fsz s-fsz"
                      style={{ color: "#c38161" }}
                    >
                      Login
                    </Link>
                  </span>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      {signupFailure && (
        <RegisterModalError
          signupFailure={signupFailure}
          setSignupFailure={setSignupFailure}
        />
      )}
    </div>
  );
}
