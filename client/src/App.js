import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./views/login";
import Pacientes from "./views/pacientes";
import Tratamientos from "./views/tratamientos";
import AgregarPaciente from "./views/agregarPaciente";
import Actualizar from "./views/actualizar";
import "./App.css";
import Register from "./views/register";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/register"  component={Register} />
          <Route path="/agregarPaciente" component={AgregarPaciente} />
          <Route path="/actualizar" component={Actualizar} />
          <Route path="/pacientes" component={Pacientes} />
          <Route path="/tratamientos" component={Tratamientos} />
        </div>
      </Router>
    );
  }
}

export default App;
