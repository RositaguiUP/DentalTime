import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./views/login";
import Pacientes from "./views/pacientes";
import Tratamientos from "./views/tratamientos";
import AgregarPaciente from "./views/agregarPaciente";
import VerPaciente from "./views/verPaciente";
import Actualizar from "./views/actualizar";
import "./App.css";
import Register from "./views/register";
import VerUser from "./views/veruser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [],
      idUser: "5fc805b8675ecf6d70f28ff2",
     };
  }

  render() {
    const idUser = this.state.idUser;

    return (
      <Router>
        <div>
          <Route path="/" exact render={() => (<Login idUser={idUser}/>)} />
          <Route path="/register"  render={() => (<Register idUser={idUser}/>)} />
          <Route path="/agregarPaciente" render={() => (<AgregarPaciente idUser={idUser}/>)}/>
          <Route path="/verPaciente" render={() => (<VerPaciente idUser={idUser}/>)}/>
          <Route path="/verUser" render={() => (<VerUser idUser={idUser}/>)}/>
          <Route path="/actualizar" render={() => (<Actualizar idUser={idUser}/>)}/>
          <Route path="/pacientes" render={() => (<Pacientes idUser={idUser}/>)}/>
          <Route path="/tratamientos" render={() => (<Tratamientos idUser={idUser}/>)}/>
        </div>
      </Router>
    );
  }
}

export default App;
