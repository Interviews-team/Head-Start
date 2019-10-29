import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    let { role, name } = this.props.loggedInUser;
    return (
      <div>
        <nav id="nav-bar" className="navbar navbar-expand-lg navbar-dark" >
        <i className="fas fa-running"></i>
          <Link
            className="p-2 navbar-brand"
            to="/"
            style={{ textDecoration: "none", color: "white", fontSize: '36px' }}
          >
            HeadStart
          </Link>
          <div
            className="collapse navbar-collapse d-flex justify-content-end mr-5"
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
                <li className="nav-item mr-5">
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
                <li className="nav-item dropdown mr-5">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="/"
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
