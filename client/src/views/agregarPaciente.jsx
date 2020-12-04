import React, { Component } from 'react';
import Header from '../components/header';
import AgregarForm from '../components/agregar'
import ButtonsAgregar from '../components/buttons1.jsx'

class Agregar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Header/>
                <h1 class="title">Paciente - Agregar</h1>
                <main>
                    <AgregarForm/>
                    <br/>
                    <ButtonsAgregar/>
                </main>
            </React.Fragment>
         );
    }
}
 
export default Agregar;