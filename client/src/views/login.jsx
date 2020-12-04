import React, { Component } from "react";
import Header from "../components/header";
import Forms from "../components/form";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Forms />
        </main>
      </React.Fragment>
    );
  }
}

export default Login;
