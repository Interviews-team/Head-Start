import React, { Component } from "react";

export default class User extends Component {
  state = {};
  render() {
    let {name, email, mobileNumber, role} = this.props
    return (
      <>
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{mobileNumber}</p>
        <p>{role}</p>
        <br />
      </>
    );
  }
}
