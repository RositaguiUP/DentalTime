import React, { Component } from "react";
import Header from "../components/header";
import VerForm from "../components/ver";

class VerPaciente extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header idUser={this.state.idUser} />
        <h1 class="title">Pacientes - Ver</h1>
        <main>
          <VerForm />
        </main>
      </React.Fragment>
    );
  }
}

export default VerPaciente;
