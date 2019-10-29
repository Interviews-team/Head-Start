import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";

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
      <div className="col-md-12 mt-3">
        <div id="card-container" className="card">
          <div id="card-id" className="card-header">
            <h3><i className="far fa-question-circle"></i> {question}</h3>
          </div>
          <div className="card-body">
            {loggedInUser.role === null ? null : (
              <div>
                <div className="ml-4">
                  <h4><i className="fas fa-envelope-open-text"></i>  {answer}</h4>
                  <p><i className="fab fa-cuttlefish"></i> {field}</p>
                </div>
                {loggedInUser.role === "hrAdmin" &&
                field === "HR" &&
                page !== "LandingPage" ? (
                  <button 
                    className="btn btn-danger float-right"
                    onClick={() => this.props.deletePost(post_id)}
                  >
                    Delete Post
                  </button>
                ) : null}
                {loggedInUser.role === "techAdmin" &&
                field !== "HR" &&
                page !== "LandingPage" ? (
                  <button
                    className="btn btn-danger float-right"
                    onClick={() => this.props.deletePost(post_id)}
                  >
                    Delete Post
                  </button>
                ) : null}
                {loggedInUser.role === "owner" && page !== "LandingPage" ? (
                  <button
                    className="btn btn-danger float-right"
                    onClick={() => this.props.deletePost(post_id)}
                  >
                   Delete Post
                  </button>
                ) : null}
              </div>
            )}
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
              className="float-left"
            >
              <h3>Read More</h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
