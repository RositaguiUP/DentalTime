import React, { Component } from "react";
import { Form, Button, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class RegisterForms extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Card className="login">
          <br></br>
          <h2 className="txtwhite">Registrarse</h2>
          <Image src="../../images/user.png" className="profilepic" />

          <Form className="form">
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Nombre"
                className="formlgt txtwhite"
              />
            </Form.Group>

            <Form.Group controlId="formBasicLName">
              <Form.Control
                type="text"
                placeholder="Apellidos"
                className="formlgt txtwhite"
              />
            </Form.Group>

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
              Registrarse
            </Button>
          </Form>
          <br></br>
          <Link class="txtblue center" to="/">
            Iniciar Sesion
          </Link>
          <br></br>
        </Card>
      </React.Fragment>
    );
  }
}

export default RegisterForms;
