import React from "react";
import Button from "react-bootstrap/Button";

const HorizontalButtons = () => {
  return (
    <>
      <main class="mt50">
        <>
          <Button as="input" type="button" value="Agregar" class="btn" />{" "}
          <Button as="input" type="button" value="Editar" class="btn"/>{" "}
          <Button as="input" type="button" value="Eliminar" class="btn"/>
        </>
      </main>
    </>
  );
};

export default HorizontalButtons;
