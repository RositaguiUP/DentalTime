import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import SearchBar from "./searchbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

class TablaTratamientos extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Card id="tablaTrat">
          <Card.Header as="h5" class="or">
            <SearchBar />
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>Tratamientos</Card.Title>
                <ListGroup>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Col>
              <div class="vr2"></div>
              <Col>
                <Card.Title>Costo</Card.Title>
                <ListGroup>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default TablaTratamientos;
