import React, { Component } from "react";
import { Link } from "react-router-dom";
import Post from "../../components/Post";

export default class TechnicalQuestionsPage extends Component {
  render() {
    return (
      <div>
        <h1>Technical Question</h1>
        <Link to="/AddQuestionPage">+</Link>
        <br />
        <Link to="/PostPage">Post Page</Link>
        <br />
        <Post />
      </div>
    );
  }
}
