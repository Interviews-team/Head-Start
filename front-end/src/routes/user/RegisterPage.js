import React, { Component } from "react";
import axios from "axios";

export default class RegisterPage extends Component {
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
// check if the email is already exist 
  isFormValid = async event => {
    event.preventDefault();
    let name = event.target["name"].value;
    let email = event.target["email"].value;
    let mobileNumber = event.target["mobileNumber"].value;
    let password = event.target["password"].value;
    let field = event.target["field"].value;
    let gender = event.target["gender"].value;
    //Name
    let nameReg = /^[a-zA-Z][a-zA-Z][^#&<>"~;.-_=+*!@%^&()[\]/,$^%{}?123456789]{2,29}$/;
    //Email
    let emailReg = /[^@#&<>";/,$^%{}?]+@[^#&<>";./,$^%{}?123456789]+\.com+/;
    //Mobile Number
    let mobileNumberReg = /^[0-9]{1}[0-9]{9}$/;

    if (
      nameReg.test(name) &&
      emailReg.test(email) &&
      mobileNumberReg.test(mobileNumber) &&
      password &&
      gender &&
      field
    ) {
      console.log("USER REG: ", this.state.user);
      let user = {
        name,
        email,
        mobileNumber,
        password,
        gender,
        field,
        role: "user",
        isLoggedIn: true
      };
      await this.setState({ user });
      this.registerUser(this.state.user);
    }
  };

  // REGISTER USER - Mohammad Alaa Aldein & HANI
  registerUser = user => {
    console.log("USER REG: ", user);
    axios
      .post("http://localhost:9000/register-user", user)
      .then(res => this.props.getLoggedInUser())
      .catch(error => console.log(error));
    this.props.history.push("/");
  };
  // END VALIDATE REGISTER FUNCTIONS
  render() {
    return (
      <div className="container w-25 mt-5">
        <h1>Register Form</h1>
        <form onSubmit={this.isFormValid}>
          <div className="form-group">
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              name="mobileNumber"
              type="text"
              className="form-control"
              id="mobileNumber"
              placeholder="Mobile Number"
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
              minLength="8"
            />
          </div>
          <div className="form-group">
            <select defaultValue="Default" name="field">
              <option disabled>Select Field</option>
              <option value="Pharmacy"> Pharmacy </option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Civil Engineering"> Civil Engineering </option>
            </select>
          </div>
          <div className="form-group">
            <label>
              <input name="gender" type="radio" value="Male" defaultChecked />
              Male
            </label>
            <label>
              <input name="gender" type="radio" value="Female" />
              Female
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}
//need to edit option based on DB
