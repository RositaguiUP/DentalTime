import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const VerticalButtons = () => {
  return (
    <>
      <main class="mt50">
        <Link to="/agregarPaciente" class="txtwhite">
          <Button variant="primary" size="lg" class="btn" block>
            Agregar Paciente
          </Button>
        </Link>
        <br />
        <Link to="" class="txtwhite">
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
  );
};

export default VerticalButtons;
