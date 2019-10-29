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

        <div className="card mt-4">
          <div className="card-body">
            <h4>{name}</h4>
            <h5>{email}</h5>
            <h6>{mobileNumber}</h6>
            <p>{field}</p>

            <form onSubmit={this.acceptPending}>

                <div className="form-group mt-2">
                  <select
                    defaultValue="Default"
                    name="role"
                    className="custom-select custom-select-sm"
                  >
                    <option disabled>Select Role</option>
                    <option value="owner">Owner</option>
                <option value="hrAdmin">Hr Admin</option>
                <option value="techAdmin">TECH Admin</option>
                <option value="user">User</option>
                  </select>
                </div>

              <button type="submit" className="btn btn-success float-left">
                Accept
              </button>
            </form>
            <button className="btn btn-danger float-right" onClick={this.deletePending}>
              Decline
            </button>
          </div>
        </div>
    );
  }
}
