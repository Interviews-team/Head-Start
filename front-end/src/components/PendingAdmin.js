import React, { Component } from "react";

export default class PendingAdmin extends Component {
  render() {
    let {name, email, mobileNumber, field, role} = this.props
    return (
      <div>
        <h3>Pending Admin</h3>
        <p>{name}</p>
        <p>{email}</p>
        <p>{mobileNumber}</p>
        <p>{field}</p>
        <p>{role}</p>
      </div>
    );
  }
}
