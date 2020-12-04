import React, { Component } from 'react';
import Header from '../components/header';
import AgregarForm from '../components/agregar'
import ButtonsActualizar from '../components/buttons2.jsx'

class Actualizar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Header/>
                <h1 class="title">Paciente - Actualizar</h1>
                <main>
                    <AgregarForm/>
                    <br></br>
                    <ButtonsActualizar/>
                </main>
            </React.Fragment>
         );
    }
}
 
export default Actualizar;