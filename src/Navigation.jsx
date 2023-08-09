import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Preferences from "./Preferences";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >We Boulder'n?</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Preferences
                </Button>

                <Preferences
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  onSubmit={() => setModalShow(false)}
                />
              </div>
              <NavDropdown title="Bouldering Areas" id="basic-nav-dropdown">
                <LinkContainer to="/gunks">
                  <NavDropdown.Item>Gunks</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/smuggs">
                  <NavDropdown.Item>Smuggs</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/acadia">
                  <NavDropdown.Item>Acadia</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  Suggest a new climbing area!
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
