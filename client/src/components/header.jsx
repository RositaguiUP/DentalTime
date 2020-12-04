import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <img
            src="..\..\images\logo.png"
            width="240rem"
            height="70rem"
            className="d-inline-block align-top"
            alt="Dental Time logo"
          />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link class="txtblue" to="../views/">
                  Agenda
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link class="txtblue" to="/pacientes">
                  Pacientes
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link class="txtblue" to="/tratamientos">
                  Tratamientos
                </Link>
              </Nav.Link>
            </Nav>
            <Nav class="mr45">
              <NavDropdown
                title="User"
                id="collasible-nav-dropdown"
                class="txtblue"
              >
                <NavDropdown.Item href="#action/3.1">
                  Ver Perfil
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Cerrar Sesion
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
