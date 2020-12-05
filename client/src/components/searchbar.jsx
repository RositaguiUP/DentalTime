import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const SearchBar = () => {
  return (
    <Form>
      <Form.Row>
        <Col xs={9}>
          <Form.Control placeholder="Buscar" className="formlgt txtwhite" />
        </Col>
        <Col class="right" xs={1}>
          <Button type="submit" class="btn btn3">Buscar</Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default SearchBar;
