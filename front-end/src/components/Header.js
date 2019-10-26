import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    let role = this.props.loggedInUser.role;
    return (
      <div>
        <Link to="/TechnicalQuestionsPage">Technical Questions</Link> |{" "}
        <Link to="/HrQuestionsPage">Hr Questions</Link> |{" "}
        {role === null ? (
          <>
            <Link to="/LoginPage">Login</Link> |{" "}
            <Link to="/RegisterPage">Register</Link> |{" "}
          </>
        ) : (
          <>
            <Link to="/UserProfilePage">User Profile</Link> |{" "}
            <Link to="/UserDashboardPage">User Dashboard</Link> |{" "}
          </>
        )} 
        { role !== 'user' && role !== null ? (
          <>
            <Link to="/AdminDashboardPage">Admin Dashboard</Link> |{" "}
          </>
        ) : null}
        {role === null ? null : <Link to="/LogoutPage">Logout</Link>}
      </div>
    );
  }
}
