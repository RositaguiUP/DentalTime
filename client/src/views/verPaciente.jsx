import React, { Component } from "react";
import Header from "../components/header";
import AgregarForm from "../components/agregar";
import EditarForm from "../components/actualizar";
import VerForm from "../components/ver";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TablaPacientes from "../components/tablaPacientes";
import VerticalButtons from "../components/verticalButtons";

class VerPacientes extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1 class="title">Pacientes - Ver</h1>
        <main>
            <VerForm/>
        </main>
      </React.Fragment>
    );
  }
}

export default VerPacientes;
