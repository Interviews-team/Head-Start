import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

export default class Post extends Component {
  render() {
    let {
      question,
      answer,
      field,
      user_id,
      post_id,
      loggedInUser,
      page
    } = this.props;

    return (
      <div>
        <Link
          to={
            loggedInUser.role === null
              ? { pathname: "/LoginPage" }
              : {
                  pathname: "/PostPage",
                  state: {
                    question,
                    answer,
                    field,
                    user_id,
                    post_id,
                    loggedInUser
                  }
                }
          }
          style={{ textDecoration: "none" }}
        >
          <h3>{question}</h3>
        </Link>
        {loggedInUser.role === null ? null : (
          <div>
            <h4>{answer}</h4>
            <p>{field}</p>
            <p>{post_id}</p>

            {loggedInUser.role === "hrAdmin" &&
            field === "HR" &&
            page !== "LandingPage" ? (
              <button
                className="btn btn-danger"
                onClick={() => this.props.deletePost(post_id)}
              >
                X
              </button>
            ) : null}
            {loggedInUser.role === "techAdmin" &&
            field !== "HR" &&
            page !== "LandingPage" ? (
              <button
                className="btn btn-danger"
                onClick={() => this.props.deletePost(post_id)}
              >
                X
              </button>
            ) : null}
            {loggedInUser.role === "owner" &&
            field !== "HR" &&
            page !== "LandingPage" ? (
              <button
                className="btn btn-danger"
                onClick={() => this.props.deletePost(post_id)}
              >
                X
              </button>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
