import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/RegisterPage.css";

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
    },

    nameMsg: null,
    emailMsg: null,
    mobileNumberMsg: null,
    passwordMsg: null,
    alreadyExists: null
  };

  isFormValid = async event => {
    event.preventDefault();
    let name = event.target["name"].value;
    let email = event.target["email"].value;
    let mobileNumber = event.target["mobileNumber"].value;
    let password = event.target["password"].value;
    let field = event.target["field"].value;
    let gender = event.target["gender"].value;

    let nameReg = /^[a-zA-Z][a-zA-Z][^#&<>"~;.-_=+*!@%^&()[\]/,$^%{}?123456789]{1,29}$/;
    let emailReg = /[^@#&<>";/,$^%{}?]+@[^#&<>";./,$^%{}?123456789]+\.com+/;
    let mobileNumberReg = /^[0-9]{1}[0-9]{9}$/;
    let passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (
      nameReg.test(name) &&
      emailReg.test(email) &&
      mobileNumberReg.test(mobileNumber) &&
      passwordReg.test(password) &&
      gender &&
      field
    ) {
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
      await this.setState({
        user,
        nameMsg: null,
        emailMsg: null,
        mobileNumberMsg: null,
        passwordMsg: null
      });
      this.registerUser(this.state.user);
    }

    if (!nameReg.test(name)) {
      this.setState({
        nameMsg: (
          <ul style={{ color: "red", textAlign: "left" }}>
            Name is Invalid!<li>should be like "Abcd efgh" or "abcd efgh"</li>
            <li>maximum length of 30 characters</li>
            <li>minimum length of 3 characters</li>
          </ul>
        )
      });
    } else {
      this.setState({
        nameMsg: null
      });
    }
    if (!emailReg.test(email)) {
      this.setState({
        emailMsg: (
          <ul style={{ color: "red", textAlign: "left" }}>
            Email is Invalid!<li>should be like "test@test.test"</li>
          </ul>
        )
      });
    } else {
      this.setState({
        emailMsg: null
      });
    }
    if (!mobileNumberReg.test(mobileNumber)) {
      this.setState({
        mobileNumberMsg: (
          <ul style={{ color: "red", textAlign: "left" }}>
            Mobile Number is Invalid!<li>should be 10 digits long</li>
          </ul>
        )
      });
    } else {
      this.setState({
        mobileNumberMsg: null
      });
    }
    if (!passwordReg.test(password)) {
      this.setState({
        passwordMsg: (
          <ul style={{ color: "red", textAlign: "left" }}>
            Password is Invalid! <li>should be 8 characters long or more</li>
            <li>should contain at least one digit</li>
            <li>should contain at least one lower case</li>
            <li>should contain at least one upper case</li>
          </ul>
        )
      });
    } else {
      this.setState({
        passwordMsg: null
      });
    }
  };

  registerUser = user => {
    axios
      .post("http://localhost:9000/register-user", user)
      .then(res => {
        console.log(res.data);
        if (res.data !== null) {
          this.setState({
            alreadyExists: (
              <p style={{ color: "red", fontWeight: "bold" }}>
                This Email Address Already Has an Account!
              </p>
            )
          });
        } else {
          this.setState({ alreadyExists: null });
          this.props.getLoggedInUser();
          this.props.history.push("/");
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div id="mainDiv" className="text-center">
        <div class="login-page">
          <div class="form">
            Register
            <form onSubmit={this.isFormValid} class="login-form">
              <input name="name" type="text" placeholder="Name" />
              {this.state.nameMsg}
              <input name="email" type="text" placeholder="Email" />
              {this.state.emailMsg}

              <input
                name="mobileNumber"
                type="mobileNumber"
                placeholder="Mobile Number"
              />
              {this.state.mobileNumberMsg}
              <input name="password" type="password" placeholder="Password" />
              {this.state.passwordMsg}
              <select defaultValue="Default" name="field">
                <option disabled>Select Field</option>
                <option value="HR"> Human Resources </option>
                <option value="IT">Information Technology</option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Civil Engineering"> Civil Engineering </option>
              </select>
              <label className="mr-3">
                <input name="gender" type="radio" value="Male" defaultChecked />
                Male
              </label>
              <label className="ml-3">
                <input name="gender" type="radio" value="Female" />
                Female
              </label>
              {this.state.alreadyExists}
              <button>Register</button>
              <p class="message">
                Already have an account? <Link to="/LoginPage"> Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
