import React, { Component } from "react";

export default class User extends Component {

  deleteUser(){
    this.props.deleteUser(this.props._id)
  }

  render() {
    let { name, email, mobileNumber, field, role } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{mobileNumber}</td>
        <td>{field}</td>
        <td>{role}</td>
        <td>
          <button className='btn btn-danger' onClick={()=>this.deleteUser()}>DELETE</button>
        </td>
      </tr>
    );
  }
}
