import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Post from "../../components/Post";

export default class HrQuestionsPage extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getHrPosts();
  }

  getHrPosts = () => {
    axios
      .get(`http://localhost:9000/get-hr-posts`)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    let { role, _id } = this.props.loggedInUser;
    let hrPosts = this.state.posts.map(post => (
      <Post
        key={post._id}
        question={post.question}
        answer={post.answer}
        user_id={post.user_id}
        field={post.field}
        post_id={post._id}
        loggedInUser={this.props.loggedInUser}
        page="HrQuestionsPage"
      />
    ));
    return (
      <div>
        {role === "hrAdmin" ? (
          <Link to={{ pathname: "/AddQuestionPage", state: { user_id: _id } }}>
            add post
          </Link>
        ) : null}
        <h1>HrQuestion</h1>
        <br />
        <br />
        {hrPosts}
      </div>
    );
  }
}
