import React, { Component } from "react";
import Header from "../components/header";
import RegisterForms from "../components/registerForm";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <RegisterForms />
        </main>
      </React.Fragment>
    );
  }
}

export default Register;
