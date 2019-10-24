import React, { Component } from "react";
import axios from "axios";

export default class UserProfilePage extends Component {
  state = {
    user: {
      _id: null,
      name: null,
      email: null,
      mobileNumber: null,
      gender: null,
      field: null,
      role: null,
      isLoggedIn: null
    }
  };

  componentDidMount() {
    let user = this.props.loggedInUser;
    this.setState({ user });
  }
  updateProfile = event => {
    event.preventDefault();

    let _id = this.props.loggedInUser._id
    let name = event.target["name"].value;
    let email = event.target["email"].value;
    let mobileNumber = event.target["mobileNumber"].value;
    let field = event.target["field"].value;

    if (
      name !== this.state.user.name ||
      email !== this.state.user.email ||
      mobileNumber !== this.state.user.mobileNumber ||
      field !== this.state.user.field
    ){
      let user = {_id, name, email, mobileNumber, field}
      axios.post(`http://localhost:9000/update-user`, user)
    }
  };

  render() {
    let {
      _id,
      name,
      email,
      mobileNumber,
      gender,
      field,
      role,
      isLoggedIn
    } = this.state.user;
    return (
      <div>
        <h1>User Profile</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Field</th>
            </tr>
          </thead>
          </table>
          
              <form onSubmit={this.updateProfile}>
                
                  <input defaultValue={name} name="name" />
                
                
                  <input defaultValue={email} name="email" />
                
                
                  <input defaultValue={mobileNumber} name="mobileNumber" />
                
                
                  <input defaultValue={field} name="field" />
                
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
           
        
      </div>
    );
  }
}
