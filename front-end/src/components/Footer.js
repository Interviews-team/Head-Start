import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  state = {};
  render() {
    return (
      <nav
        id="footer-identity"
        className="navbar navbar-expand-lg fixed-bottom"
      >
        <Link
          className="p-2 navbar-brand"
          to="/"
          style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
        >
          <i className="fas fa-running"></i> HeadStart
        </Link>

        <ul className="social-media">
          <li>/ Follow Us</li>
          <li>
            <a href="">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>

        <div
          className="collapse navbar-collapse d-flex justify-content-end mr-5"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              {this.props.loggedInUser.role !== "user" ? (
                <Link
                  to="/AboutUsPage"
                  className="nav-link mr-5"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About Us
                </Link>
              ) : (
                <Link
                  to="/AboutUsPage"
                  className="nav-link"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About Us
                </Link>
              )}
            </li>
            <li>
              {this.props.loggedInUser.role === "user" ? (
                <Link
                  to="/JoinUsPage"
                  className="nav-link"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Join Us
                </Link>
              ) : null}
            </li>
            <li>
              {this.props.loggedInUser.role === "user" ? (
                <Link
                  to="/AskQuestionPage"
                  className="nav-link mr-5"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Ask a Question
                </Link>
              ) : null}
            </li>
            {/* <li>Follow Us</li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
