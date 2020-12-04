import React, { Component } from "react";
import Header from "../components/header";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TablaTratamientos from "../components/tablaTratamientos";
import HorizontalButtons from "../components/horizontalButtons";
import TratamientosForm from "../components/tratamientosForm";

class Tratamientos extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1 class="title">Tratamientos</h1>
        <main>
            <Row>
              <Col sm={8}><TablaTratamientos /></Col>
              <Col sm={4}><TratamientosForm /></Col>
            </Row>
            <Row>
                <HorizontalButtons />
            </Row>
        </main>
      </React.Fragment>
    );
  }
}

export default Tratamientos;