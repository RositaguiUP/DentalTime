import React, { Component } from "react";
import { Form, Button, Image, Card } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUser: this.props.idUser,
      name: "",
      pass: "",
      apiResponse: [],
    };
  }

  logi(event) {
    //axios.get(`http://localhost:5000/api/login?name=${this.state.name}&password=${this.state.pass}`)
    axios
      .get(`http://localhost:5000/api/login?name=Karla&password=5533`)
      .then((res) => {
        const apiResponse = res.data;
        this.setState({ apiResponse });
      });

    //console.log(this.state.apiResponse);
    //this.setState.idUser = 5;
  }

  render() {
    const idUser = this.state.idUser;

    return (
      <React.Fragment>
        <Card className="login">
          <br></br>
          <h2 className="txtwhite">Iniciar sesion</h2>
          <Image src="../../images/user.png" className="profilepic" />

          <Form className="form">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Usuario"
                className="formlgt txtwhite"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                  console.log(this.state.name);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                className="formlgt txtwhite"
                onChange={(e) => {
                  this.setState({ pass: e.target.value });
                  console.log(this.state.pass);
                }}
              />
            </Form.Group>
            <Link to="/pacientes">
              <Button
                variant="primary"
                type="submit"
                className="btnk"
                onClick={this.logi}
              >
                Acceder
              </Button>
            </Link>
          </Form>
          <br></br>
          <Link
            class="txtblue center"
            to={{
              pathname: "register",
              state: {
                idUser: idUser,
              },
            }}
          >
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
