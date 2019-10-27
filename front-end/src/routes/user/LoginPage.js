import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";

export default class LoginPage extends Component {
  state = {
    email: null,
    password: null
  };

  login = event => {
    event.preventDefault();
    let email = event.target["email"].value;
    let password = event.target["password"].value;

    axios
      .post("http://localhost:9000/login-user", { email, password })
      .then(res => {
        if (res.data !== null) {
          this.props.checkLogin(res.data);
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err));
  };
  //regular expression check
  render() {
    return (
      <div className="container w-25">
        <h1>Login</h1>
        <form onSubmit={this.login}>
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
              name="password"
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <Link to="/registerPage">
          if you do not have an account, create one...
        </Link>
      </div>
    );
  }
}
