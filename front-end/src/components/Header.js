import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

export default class Header extends Component {
  render() {
    let role = this.props.loggedInUser.role;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-around">
          <a className="navbar-brand" href="/">
            LOGO
          </a>
          <Link className="p-2 bd-highlight" to="/TechnicalQuestionsPage">
            Technical Questions
          </Link>
          <Link className="p-2 bd-highlight" to="/HrQuestionsPage">
            Hr Questions
          </Link>
          <Link className="p-2 bd-highlight" to="/EventsPage">
            Events Page
          </Link>
          {role === null ? (
            <>
              <Link className="p-2 bd-highlight" to="/LoginPage">
                Login
              </Link>
              <Link className="p-2 bd-highlight" to="/RegisterPage">
                Register
              </Link>
            </>
          ) : role === "user" ? (
            <>
              <Link className="p-2 bd-highlight" to="/UserProfilePage">
                User Profile
              </Link>
              <Link className="p-2 bd-highlight" to="/UserDashboardPage">
                User Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link to="/AdminDashboardPage">Admin Dashboard</Link>
            </>
          )}
          {role === null ? null : <Link to="/LogoutPage">Logout</Link>}
        </nav>
      </div>
    );
  }
}
