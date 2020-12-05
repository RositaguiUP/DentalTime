import React, { Component } from "react";
import Header from "../components/header";
import RegisterForms from "../components/registerForm";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUser: this.props.idUser,
     };
  }

  render() {
    return (
      <React.Fragment>
        <Header idUser={this.state.idUser}/>
        <main>
          <RegisterForms />
        </main>
      </React.Fragment>
    );
  }
}

export default Register;
