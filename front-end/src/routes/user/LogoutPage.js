import React, { Component } from "react";
import axios from "axios";

export default class LoginPage extends Component {
  async componentDidMount() {
    let id = this.props.loggedInUser._id;
    axios.put(`http://localhost:9000/logout/${id}`)
        .then(res => this.props.getLoggedInUser())
    this.props.history.push("/");
  }

  render() {
    return null;
  }
}
