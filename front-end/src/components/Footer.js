import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

export default class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-around ">
          <a className="navbar-brand" href="/">
            LOGO
          </a>
          <Link to="/AboutUsPage">AboutUs</Link>
          <Link to="/JoinUsPage">Join Us</Link>
          <Link to="/AskQuestionPage">Ask Question</Link>
        </nav>
      </div>
    );
  }
}
