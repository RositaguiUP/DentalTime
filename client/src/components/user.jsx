import React, { Component } from "react";
import { Button, Image, Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
    };
  }

  render() {
    console.log(this.state.userData);
    return (
      <React.Fragment>
        <Card className="w70 or userCard">
          <br></br>
          <h2 className="txtwhite center">Usuario</h2>
          <hr></hr>
          <br></br>
          <Row className="specialwidth center">
            <Col className="">
              <div className="">
                <Image src="../../images/user.png" className="profilepicsm" />
              </div>
            </Col>

            <Col>
              <div className="txtwhite w70 m-20">
                <h6>Nombre: {this.state.userData.name}</h6>
                <h6>Apellidos: {this.state.userData.lastName}</h6>
                <h6>Correo: {this.state.userData.email}</h6>
              </div>
            </Col>
          </Row>

          <br />
          <br />

          <Button variant="primary" type="submit" className="btnk w70">
            Editar
          </Button>
          <br></br>
          <Button variant="primary" type="submit" className="btnk w70">
            Eliminar
          </Button>
          <br></br>

          <br></br>
        </Card>
      </React.Fragment>
    );
  }
}

export default User;
