import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default class LoginPage extends Component {
  state = {
    email: null,
    password: null,
    emailMsg: null,
    passwordMsg: null,
    invalid: null
  };

  login = async event => {
    event.preventDefault();
    let email = event.target["email"].value;
    let password = event.target["password"].value;

    let emailReg = /[^@#&<>";/,$^%{}?]+@[^#&<>";./,$^%{}?123456789]+\.com+/;
    let passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (emailReg.test(email) && passwordReg.test(password)) {
      await this.setState({
        email,
        password
      });
      this.checkLogin();
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

  checkLogin = () => {
    let email = this.state.email;
    let password = this.state.password;
    axios
      .post("http://localhost:9000/login-user", { email, password })
      .then(res => {
        if (res.data !== null) {
          this.props.checkLogin(res.data);
          this.props.history.goBack();
        } else {
          this.setState({
            invalid: (
              <p style={{ color: "red", fontWeight: "bold" }}>
                Invalid Email or Password
              </p>
            )
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div id="mainDiv" className="text-center" >
        <div className="login-page">
          <form onSubmit={this.login} className="login-form">
            <div className="form">
              Login
              <input name="email" type="text" placeholder="Email" />
              {this.state.emailMsg}
              <br />
              <br />
              <input name="password" type="password" placeholder="Password" />
              {this.state.passwordMsg}
              <br />
              <br />
              {this.state.invalid}
              <button className="mb-3 btn btn-primary">Login</button>
              <p className="message">
                Do not have an account?
                <Link to="/RegisterPage">  Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
