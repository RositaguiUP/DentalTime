import React, { Component } from "react";
import { Form, Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class AgregarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUser: this.props.idUser,
      name: "",
      lastName: "",
      birthday: "",
      gender: "",
      phone: "",
      facebook: "",
      address: "",
      email: "",
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  async agrPac() {
    const userData = {
      /*name: this.state.name.bind(this),
      lastName: this.state.lastName.bind(this),
      birthday: this.state.birthday,
      gender: this.state.gender,
      phone: this.state.phone,
      facebook: this.state.facebook,
      address: this.state.address,
      email: this.state.email,*/
      name: "aiudaaa",
      lastName: "muerooo",
    };

    await axios
      .post(
        `http://localhost:5000/api/allPatients?idUser=${this.state.idUser}`,
        userData
      )
      .then((res) => {
        const apiResponse = res.data;
        //this.setState({ apiResponse });
      });
  }

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
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  className="formlgt txtwhite"
                  name="name"
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                    console.log(this.state.name);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Control
                  type="text"
                  placeholder="Apellido"
                  className="formlgt txtwhite"
                  name="lastName"
                  onChange={(e) => {
                    this.setState({ lastName: e.target.value });
                    console.log(this.state.lastName);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBorn">
                <Form.Control
                  type="text"
                  className="formlgt txtwhite"
                  onFocus={(e) => (e.currentTarget.type = "date")}
                  onBlur={(e) => (e.currentTarget.type = "text")}
                  placeholder="Fecha de nacimiento"
                  name="birthday"
                  //onChange={this.onChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridGender">
                <Form.Control
                  className="formlgt txtwhite"
                  as="select"
                  defaultValue="Genero"
                  placeholder="Genero"
                  name="gender"
                  //onChange={this.onChange}
                >
                  <option>Género...</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCel">
                <Form.Control
                  type="tel"
                  placeholder="Celular"
                  className="formlgt txtwhite"
                  name="phone"
                  //onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFacebook">
                <Form.Control
                  type="text"
                  placeholder="Facebook"
                  className="formlgt txtwhite"
                  name="facebook"
                  //onChange={this.onChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress">
              <Form.Control
                type="text"
                placeholder="Domicilio"
                className="formlgt txtwhite"
                name="address"
                //onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                className="formlgt txtwhite"
                name="email"
                //onChange={this.onChange}
              />
            </Form.Group>
          </Form>
          <br></br>
        </Card>
        <br />
        <div className="w70">
          <div className="right">
            <Button
              variant="primary"
              type="submit"
              class="btn"
              onClick={this.agrPac}
            >
              Agregar
            </Button>{" "}
            <Link to="/pacientes">
              <Button variant="primary" type="submit" class="btn">
                Cancelar
              </Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AgregarForm;
