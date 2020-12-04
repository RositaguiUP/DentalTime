import React, { Component } from 'react';
import {Form, Button, Card} from 'react-bootstrap';

class TratamientosForm extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>

                <Card className="or">
                    <br>
                    </br>
                    <Form className="">
                    <Form.Group controlId="formBasicTratamiento">
                        <Form.Control type="text" placeholder="Tratamiento" className="formlgt txtwhite"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCosto">
                        <Form.Control type="text" placeholder="Costo" className="formlgt txtwhite" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn">
                        Agregar
                    </Button>{" "}
                    <Button variant="primary" type="submit" className="btn">
                        Cancelar
                    </Button>

                    </Form>
                    <br></br>
                </Card>

            </React.Fragment>
       );
    }
}
 
export default TratamientosForm;