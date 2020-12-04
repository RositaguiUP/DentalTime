import React, { Component } from "react";
import { Form, Card, Col } from "react-bootstrap";


class AgregarForm extends Component {
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
                <Form.Control type="text" placeholder="Nombre" className="formlgt txtwhite"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBorn">
                <Form.Control
                  type="text" className="formlgt txtwhite"
                  onFocus={(e) => (e.currentTarget.type = "date")}
                  onBlur={(e) => (e.currentTarget.type = "text")}
                  placeholder="Fecha de nacimiento"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAge">
                <Form.Control type="number" placeholder="Edad" className="formlgt txtwhite" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridGender">
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
                <Form.Control type="text" placeholder="Estado civil" className="formlgt txtwhite" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFacebook">
                <Form.Control type="text" placeholder="Facebook" className="formlgt txtwhite"/>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridTel">
                <Form.Control type="tel" placeholder="Teléfono" className="formlgt txtwhite" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCel">
                <Form.Control type="tel" placeholder="Celular" className="formlgt txtwhite"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmergency">
                <Form.Control type="tel" placeholder="Teléfono de emergencia" className="formlgt txtwhite"/>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress">
              <Form.Control type="text" placeholder="Domicilio" className="formlgt txtwhite"/>
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Control type="email" placeholder="Email" className="formlgt txtwhite"/>
            </Form.Group>
            
          </Form>
          <br></br>
        </Card>
      </React.Fragment>
    );
  }
}

export default AgregarForm;
