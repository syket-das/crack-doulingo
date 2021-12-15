import React from 'react';
import '././header.css';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand  href="/">Crack Doulingo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutDoulingo">All About Doulingo</Nav.Link>

            <NavDropdown title="Practice Here" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/dictation">Dictation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Yes/No Vocabulary
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Describe Image</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">C Test</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Describe Your Opinion
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Support Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
