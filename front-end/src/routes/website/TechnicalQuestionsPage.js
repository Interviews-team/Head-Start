import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Post from "../../components/Post";

export default class TechnicalQuestionsPage extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getTechnicalPosts();
  }

  getTechnicalPosts = () => {
    axios
      .get(`http://localhost:9000/get-technical-posts`)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    // console.log("PROPS", this.props);
    let { role, _id } = this.props.loggedInUser;
    return (
      <div>
        <h1>Technical Question</h1>
        {role === "techAdmin" ? (
          <Link to={{ pathname: "/AddQuestionPage", state: { user_id: _id } }}>
            add post
          </Link>
        ) : null}
        <br />
        {this.state.posts.map(post => {
          return (
            <Post
              key={post._id}
              question={post.question}
              answer={post.answer}
              user_id={post.user_id}
              field={post.field}
              post_id={post._id}
              loggedInUser={this.props.loggedInUser}
              page="TechnicalQuestionsPage"
            />
          );
        })}
        <br />
      </div>
    );
  }
}
