import React, { Component } from "react";
import { Form, Button, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class Forms extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Card className="login">
          <br></br>
          <h2 className="txtwhite">Iniciar sesion</h2>
          <Image src="../../images/user.png" className="profilepic" />

          <Form className="form">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Correo"
                className="formlgt txtwhite"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                className="formlgt txtwhite"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btnk">
              Acceder
            </Button>
          </Form>
          <br></br>
          <Link class="txtblue" to="register" class="center">
            ¿No tienes cuenta?
            <br />
            Registrate aqui
          </Link>
          <br></br>
        </Card>
      </React.Fragment>
    );
  }
}

export default Forms;
