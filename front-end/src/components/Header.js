//importing react-component
import React, { Component } from "react";
//import react-router-dom
import { Link } from "react-router-dom";

//create Header class
class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/TechnicalQuestionsPage">Technical Questions</Link> |{" "}
        <Link to="/HrQuestionsPage">Hr Questions</Link> | {" "}
        <Link to="/LoginPage">Login</Link> | {" "}
        <Link to="/RegisterPage">Register</Link>|{" "}
        <Link to="/UserProfilePage">User Profile</Link> |{" "} 
        <Link to="/UserDashboardPage">User Dashboard</Link> | {" "}
        <Link to="/AdminDashboardPage">Admin Dashboard</Link> | {" "} 
      </div>
    );
  }
}
//export Header class
export default Header;
