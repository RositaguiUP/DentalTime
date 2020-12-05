import React, { Component } from "react";
import Header from "../components/header";
import User from "../components/user";
import axios from "axios";

class VerUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: {},
      idUser: this.props.idUser,
    };
  }

  async componentDidMount() {
    await axios
      .get(`http://localhost:5000/api/user?id=${this.state.idUser}`)
      .then((res) => {
        const apiResponse = res.data;
        this.setState({ apiResponse });
      });
    console.log(this.state.apiResponse);
  }

  render() {
    return (
      <React.Fragment>
        <Header idUser={this.state.idUser} />
        <main>
          <User userData={this.state.apiResponse} />
        </main>
      </React.Fragment>
    );
  }
}

export default VerUser;
