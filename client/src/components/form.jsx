import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

class Forms extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Form className="form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Correo" />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </React.Fragment>
       );
    }
}
 
export default Forms;