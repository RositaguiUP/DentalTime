import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import {Navbar} from 'react-bootstrap/Navbar';
// import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <img
            src="..\..\images\header\logo.png"
            width="240rem"
            height="70rem"
            className="d-inline-block align-top"
            alt="Dental Time logo"
          />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
