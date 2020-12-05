import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class VerticalButtons extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      idUser: this.props.idUser,
     };
  }*/

  render() {
    return (
      <>
        <main class="mt50">
          <Link to="/agregarPaciente" class="txtwhite">
            <Button variant="primary" size="lg" class="btn" block>
              Agregar Paciente
            </Button>
          </Link>
          <br />
          <Link to="/verPaciente" class="txtwhite">
            <Button variant="primary" size="lg" class="btn" block>
              Ver Datos
            </Button>
          </Link>
          <br />
          <Link to="/actualizar" class="txtwhite">
            <Button variant="primary" size="lg" class="btn" block>
              Editar Datos
            </Button>
          </Link>
          <br />
          <Button variant="primary" size="lg" class="btn" block>
            Eliminar Paciente
          </Button>
        </main>
      </>
  )};
};

export default VerticalButtons;
