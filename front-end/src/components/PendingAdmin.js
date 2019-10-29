import React, { Component } from "react";

export default class PendingAdmin extends Component {
  acceptPending = event => {
    event.preventDefault();
    let admin = {
      _id: this.props._id,
      user_id: this.props.user_id,
      role: event.target["role"].value
    };

    this.props.acceptPending(admin);
  };

  deletePending = () => {
    this.props.deletePending(this.props._id);
  };

  render() {
    let { name, email, mobileNumber, field } = this.props;
    return (
      <div>
        <h3>Pending Admin</h3>
        <p>{name}</p>
        <p>{email}</p>
        <p>{mobileNumber}</p>
        <p>{field}</p>
        <form onSubmit={this.acceptPending}>
          <select name="role">
            <option value="owner">Owner</option>
            <option value="hrAdmin">Hr Admin</option>
            <option value="techAdmin">TECH Admin</option>
            <option value="user">User</option>
          </select>
          <button type="submit" className="btn btn-primary">
            accept
          </button>
        </form>

        <button className="btn btn-danger" onClick={this.deletePending}>
          X
        </button>
      </div>
    );
  }
}
