import React, { Component } from "react";
import { Form, Card, Col } from "react-bootstrap";

class VerForm extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Card className="agregar">
          <br></br>
          <h2 className="txtwhite">Datos del paciente</h2>
          <hr></hr>
          <Form className="form">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label class="form-title">Nombre:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  className="formlgt txtwhite"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBorn">
                <Form.Label class="form-title">Fecha de Nacimiento:</Form.Label>
                <Form.Control
                  type="text"
                  className="formlgt txtwhite"
                  onFocus={(e) => (e.currentTarget.type = "date")}
                  onBlur={(e) => (e.currentTarget.type = "text")}
                  placeholder="Fecha de nacimiento"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAge">
                <Form.Label class="form-title">Edad:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Edad"
                  className="formlgt txtwhite"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridGender">
                <Form.Label class="form-title">Genero:</Form.Label>
                <Form.Control
                  className="formlgt txtwhite"
                  as="select"
                  defaultValue="Genero"
                  placeholder="Genero"
                >
                  <option>Género...</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCivil">
                <Form.Label class="form-title">Estado Civil:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Estado civil"
                  className="formlgt txtwhite"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFacebook">
                <Form.Label class="form-title">Facebook:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Facebook"
                  className="formlgt txtwhite"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridTel">
                <Form.Label class="form-title">Teléfono:</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Teléfono"
                  className="formlgt txtwhite"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCel">
                <Form.Label class="form-title">Celular:</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Celular"
                  className="formlgt txtwhite"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmergency">
                <Form.Label class="form-title">Teléfono de emergencia:</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Teléfono de emergencia"
                  className="formlgt txtwhite"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress">
              <Form.Label class="form-title">Domicilio:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Domicilio"
                className="formlgt txtwhite"
              />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label class="form-title">Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                className="formlgt txtwhite"
              />
            </Form.Group>
          </Form>
          <br></br>
        </Card>
      </React.Fragment>
    );
  }
}

export default VerForm;
