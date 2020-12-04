import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import SearchBar from "../components/searchbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

class TablaPacientes extends Component {
  state = {};
  render() {
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
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Col>
              <div class="vr"></div>
              <Col>
                <Card.Title>Apellido</Card.Title>
                <ListGroup>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            {/* <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default TablaPacientes;
