import React from "react";
import { Alert, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './alertSuccess.css';

const AlertSuccess = () => {
  return (
    <Container>
      <Row>
        <Alert className="alertSuccess">
          <Alert.Heading>Welcome to my Website!!</Alert.Heading>
          <p>Your account has been actived. Enjoy the moment right now!</p>
          <hr />
          <Link to="/login">
            <Button
              className="hoverButton"
              style={{
                border: "none",
                backgroundColor: "#c38161",
              }}
              variant="primary"
            >
              Login now!
            </Button>
          </Link>
        </Alert>
      </Row>
    </Container>
  );
};

export default AlertSuccess;
