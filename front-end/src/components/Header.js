import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    let { role, name } = this.props.loggedInUser;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link
            className="p-2 navbar-brand"
            to="/LandingPage"
            style={{ textDecoration: "none", color: "white" }}
          >
            Head Start
          </Link>
          {/* <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <div
            className="collapse navbar-collapse d-flex justify-content-end mr-4"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/TechnicalQuestionsPage"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Technical Questions
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/HrQuestionsPage"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Hr Questions
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/EventsPage"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Events Page
                </Link>
              </li>

              {role === null ? (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/LoginPage"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>
                </li>
              ) : null}

              {role === null ? (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/RegisterPage"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Register
                  </Link>
                </li>
              ) : null}

              {role !== null ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {name}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    {role === null ? null : role === "user" ? (
                      <>
                        <Link
                          className="dropdown-item"
                          to="/UserProfilePage"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          User Profile
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/UserDashboardPage"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          User Dashboard
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          className="dropdown-item"
                          to="/UserProfilePage"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          User Profile
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/UserDashboardPage"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          User Dashboard
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/AdminDashboardPage"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Admin Dashboard
                        </Link>
                      </>
                    )}
                    {role === null ? null : (
                      <>
                        <div className="dropdown-divider"></div>
                        <Link
                          className="dropdown-item"
                          to="/LogoutPage"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Logout
                        </Link>
                      </>
                    )}
                  </div>
                </li>
              ) : null}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
