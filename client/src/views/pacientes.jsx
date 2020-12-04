import React, { Component } from "react";
import Header from "../components/header";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TablaPacientes from "../components/tablaPacientes";
import VerticalButtons from "../components/verticalButtons";

class Pacientes extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1 class="title">Pacientes</h1>
        <main>
            <Row>
              <Col sm={8}><TablaPacientes /></Col>
              <Col sm={4}><VerticalButtons /></Col>
            </Row>
        </main>
      </React.Fragment>
    );
  }
}

export default Pacientes;
