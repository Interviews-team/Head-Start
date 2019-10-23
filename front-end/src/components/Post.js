import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Post extends Component {
  state = {};

  render() {
    console.log("POST");
    let {
      question,
      answer,
      field,
      user_id,
      page,
      post_id,
      post,
      comments,
      userRole
    } = this.props;
    if (page === "LandingPage") {
      return (
        <Link
          to={{ pathname: "/PostPage", state: { post_id } }}
          style={{ textDecoration: "none" }}
        >
          <div>
            <h3>{question}</h3>
            <h4>{answer}</h4>
            <p>{field}</p>
            <p>{post_id}</p>
          </div>
        </Link>
      );
    }

    if (page === "HrQuestionsPage") {
      return (
        <Link
          to={{ pathname: "/PostPage", state: { post_id } }}
          style={{ textDecoration: "none" }}
        >
          <div>
            <h3>{question}</h3>
            <h4>{answer}</h4>
            <p>{field}</p>
            <p>{post_id}</p>
            <p>hr</p>
          </div>
        </Link>
      );
    }

    if (page === "TechnicalQuestionsPage" && userRole === "Admin") {
      return (
        <div>
          <h1>Post Component</h1>
          <h3>Post_id:</h3>
          {post._id}
          <br />
          <h3>Post_Question:</h3>
          {post.question}
          <br />
          <h3>Post_answer:</h3>
          {post.answer}
          <br />
          <h3>Post_field:</h3>
          {post.field}
          <br />
          <h3>Post_user_id:</h3>
          {post.user_id}
          <br />
          <Link
            to={{
              pathname: "/PostPage",
              state: {
                id: post._id,
                question: post.question,
                answer: post.answer,
                field: post.field,
                user_id: post.user_id,
                user: userRole,
                comments: comments
              }
            }}
          >
            View Post
          </Link>
        </div>
      );
    } else if(userRole === 'user'){
      return (
        <div>
          <h1>Post Component</h1>
          <h3>Post_Question:</h3>
          {post.question}
          <br />
          <h3>Post_field:</h3>
          {post.field}
          <br />
          <Link
            to={{
              pathname: "/PostPage",
              state: {
                id: post._id,
                question: post.question,
                user: userRole,
                comments: comments
              }
            }}
          >
            View Post
          </Link>
        </div>
      );
    }
    return null
  }
}
