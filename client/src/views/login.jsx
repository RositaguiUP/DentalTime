import React, { Component } from "react";
import Header from "../components/header";
import Forms from "../components/form";

class Login extends Component {
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
          <Forms idUser={this.state.idUser}/>
        </main>
      </React.Fragment>
    );
  }
}

export default Login;
