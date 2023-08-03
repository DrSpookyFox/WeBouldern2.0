import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Preferences from "./Preferences";
import Button from "react-bootstrap/Button";

const Navigation = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">We Boulder'n?</Navbar.Brand>
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
                <NavDropdown.Item href="#action/3.1">Gunks</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Smuggs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Acadia</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
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
