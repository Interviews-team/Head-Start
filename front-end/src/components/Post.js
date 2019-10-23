import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Post extends Component {
  state = {};
  render() {
    let { question, answer, field, user_id, page, post_id } = this.props;
    if (page === "LandingPage") {
      return (
        <Link to={{pathname: '/PostPage', state:{post_id}} } style={{textDecoration: 'none'}}>
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
        <Link to={{pathname: '/PostPage', state:{post_id}} } style={{textDecoration: 'none'}}>
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

    return null
  }
}
