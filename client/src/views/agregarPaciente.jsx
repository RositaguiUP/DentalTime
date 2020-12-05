import React, { Component } from "react";
import Header from "../components/header";
import AgregarForm from "../components/agregar";

class Agregar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUser: this.props.idUser,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header idUser={this.state.idUser} />
        <h1 class="title">Paciente - Agregar</h1>
        <main>
          <AgregarForm idUser={this.state.idUser} />
        </main>
      </React.Fragment>
    );
  }
}

export default Agregar;
