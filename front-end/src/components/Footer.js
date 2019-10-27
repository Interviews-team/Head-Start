import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-around ">
          <a className="navbar-brand" href="/">
            Head Start
          </a>
          <Link to="/AboutUsPage">AboutUs</Link>
          {this.props.loggedInUser.role === "user" ? (
            <Link to="/JoinUsPage">Join Us</Link>
          ) : null}
          {this.props.loggedInUser.role === "user" ? (
            <Link to="/AskQuestionPage">Ask a Question</Link>
          ) : null}
        </nav>
      </div>
    );
  }
}
