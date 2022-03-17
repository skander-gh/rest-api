import React from 'react';
import { Navbar, Container, Nav} from "react-bootstrap"
import { Link } from 'react-router-dom';
function Navee() {
  return (
  <div>

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">OUR CONTACTS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>  
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



  </div>
  );
}

export default Navee;
