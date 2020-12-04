import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class ButtonsAgregar extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className="w70">
                    <div className="right">
                        <Button variant="primary" type="submit" class="btn">
                        Agregar
                        </Button>{" "}
                        <Button variant="primary" type="submit" class="btn">
                        Cancelar
                        </Button>
                    </div>
                </div>
                 
            </React.Fragment>
       );
    }
}
 
export default ButtonsAgregar;