import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import SearchBar from "../components/searchbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";


class TablaPacientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: [],
      idUser: this.props.idUser,
     };
  }

  async componentDidMount() {
    await axios.get(`http://localhost:5000/api/allPatients?idUser=${this.state.idUser}`)
      .then(res => {
              const apiResponse = res.data;
              this.setState({apiResponse});
      });
  }

  render() {
    const pacientes = this.state.apiResponse;

    return (
      <React.Fragment>
        <Card id="tabla">
          <Card.Header as="h5" class="or">
            <SearchBar />
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>Nombre</Card.Title>
                <ListGroup>
                {pacientes.map(paci =>
                  <ListGroup.Item key={paci.id} action variant>{paci.name}</ListGroup.Item>
                )}
                </ListGroup>
              </Col>
              <div class="vr"></div>
              <Col>
                <Card.Title>Apellido</Card.Title>
                <ListGroup>
                {pacientes.map(paci =>
                  <ListGroup.Item key={paci.id} action variant>{paci.lastName}</ListGroup.Item>
                )}
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default TablaPacientes;
