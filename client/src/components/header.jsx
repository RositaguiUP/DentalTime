import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavOptions from "./NavOptions";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: {},
      idUser: this.props.idUser,
    };
  }

  async componentDidMount() {
    await axios
      .get(`http://localhost:5000/api/user?id=${this.state.idUser}`)
      .then((res) => {
        const apiResponse = res.data;
        this.setState({ apiResponse });
      });
    console.log(this.state.apiResponse);
  }

  render() {
    const idUser = this.state.idUser;
    console.log("idUser: ", idUser);
    console.log(this.state.apiResponse);

    if (idUser === -1) {
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
          </Navbar>
        </React.Fragment>
      );
    } else {
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
              <NavOptions />
              <Nav class="mr45">
                <NavDropdown
                  title={this.state.apiResponse.name}
                  id="collasible-nav-dropdown"
                  class="txtblue"
                >
                  <NavDropdown.Item>
                    <Link class="txtblue" to="/verUser">
                      Ver Perfil
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/">Cerrar Sesion</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </React.Fragment>
      );
    }
  }
}

export default Header;
