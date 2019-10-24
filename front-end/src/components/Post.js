import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Post extends Component {

  render() {
    console.log("POST PROPS: ", this.props);

    let {
      question,
      answer,
      field,
      user_id,
      page,
      post_id,
      loggedInUser
    } = this.props;

    console.log(loggedInUser.role === null);
    return (
      <Link
        to={loggedInUser.role === null ? { pathname: "/LoginPage"} : { pathname: "/PostPage", state: { question, answer, field, user_id, post_id, loggedInUser} }}
        style={{ textDecoration: "none" }}
      >
        <div>
          <h3>{question}</h3>
          {loggedInUser.role === null ? null : (
            <div>
              <h4>{answer}</h4>
              <p>{field}</p>
              <p>{post_id}</p>
            </div>
          )}
        </div>
      </Link>
    );
  }
}
