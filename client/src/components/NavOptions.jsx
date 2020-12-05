import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavOptions extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Nav className="mr-auto">
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
      </React.Fragment>
    );
  }
}

export default NavOptions;
