import React, { Component } from "react";
import { Link } from "react-router-dom";
import Post from "../../components/Post";

export default class HrQuestionsPage extends Component {
  render() {
    let { posts } = this.props;
    let hrPosts = posts.filter(post => post.field === "HR");
    let postsToShow = hrPosts.map(post => (
      <Post
        key={post._id}
        question={post.question}
        answer={post.answer}
        user_id={post.user_id}
        page="HrQuestionsPage"
      />
    ));
    return (
      <div>
        <h1>HrQuestion</h1>
        <Link to="/AddQuestionPage">+</Link>
        <br />
        <br />
        {postsToShow}
      </div>
    );
  }
}
