import React, { Component } from "react";
import axios from "axios";

export default class UserProfilePage extends Component {
  state = {
    user: {
      name: null,
      email: null,
      mobileNumber: null,
      field: null
    }
  };

  componentDidMount() {
    let { name, email, mobileNumber, field } = this.props.loggedInUser;
    this.setState({
      user: {
        name,
        email,
        mobileNumber,
        field
      }
    });
  }

  updateProfile = event => {
    event.preventDefault();

    let _id = this.props.loggedInUser._id;
    let name = event.target["name"].value;
    let email = event.target["email"].value;
    let mobileNumber = event.target["mobileNumber"].value;
    let field = event.target["field"].value;

    if (
      name !== this.state.user.name ||
      email !== this.state.user.email ||
      mobileNumber !== this.state.user.mobileNumber ||
      field !== this.state.user.field
    ) {
      let user = { _id, name, email, mobileNumber, field };
      axios.post(`http://localhost:9000/update-user`, user).then(res => {
        this.props.getLoggedInUser();
      });
    }
  };

  render() {
    let { name, email, mobileNumber } = this.state.user;
    console.log(this.state.user);
    const cardWidth = {
      width: "30%",
      position: "absolute",
      marginLeft: "320px"
    };

    const cardColor = {
      boxShadow: "0 0 10px 3px darkgray"
    };

    return (
      <body>
        <div className="container mt-5 ">
          <div className="row mt-5">
            <div className="w-100 mt-5">
              <main className="col-md-4" style={cardWidth}>
                <div class=" card bg-light" style={cardColor}>
                  <div class="card-header text-center p-4">
                    <h1 className="text-dark">Update Information</h1>
                  </div>
                  <div class="card-body text-dark p-4 ">
                    <form onSubmit={this.updateProfile}>
                      <div className="form-group">
                        <h6>Name:</h6>
                        <input
                          defaultValue={name}
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                      <h6>E-mail:</h6>
                      <div className="form-group">
                        <input
                          defaultValue={email}
                          name="email"
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                      <h6>Mobile Number:</h6>
                      <div className="form-group">
                        <input
                          defaultValue={mobileNumber}
                          name="mobileNumber"
                          type="text"
                          className="form-control"
                          id="mobileNumber"
                          placeholder="Mobile Number"
                        />
                      </div>
                      <h6>Field:</h6>
                      <div className="form-group">
                        <select
                          defaultValue="Default"
                          name="field"
                          className="form-control"
                        >
                          <option disabled>Select Field</option>
                          <option value="HR"> Human Resources </option>
                          <option value="IT"> Information Technology </option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Edit Profile
                      </button>
                    </form>
                  </div>
                </div>

                <br />
              </main>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
