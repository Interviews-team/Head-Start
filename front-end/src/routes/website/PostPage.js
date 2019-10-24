import React, { Component } from "react";
import Comment from "../../components/Comment";
import axios from "axios";

export default class PostPage extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.getPostComments();
  }

  getPostComments = () => {
    let id = this.props.location.state.post_id
    axios
      .get(`http://localhost:9000/get-post-comments/${id}`)
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    let {question, answer, field, user_id, post_id, loggedInUser} = this.props.location.state

      return (
        <div>
          <h1>Post Page </h1>
          <h3>Post Id :</h3> {post_id}
          <h3>Post Question :</h3>
          {question}
          <h3>Post Answer :</h3>
          {answer}
          <h3>Post field :</h3>
          {field}
          <h3>Post User Id :</h3>
          {user_id}
          <h3>Post Comments :</h3>
          {this.state.comments.map(comment => {
            return <Comment key={comment._id} comment={comment.comment} user={user_id} user_id={loggedInUser._id} />;
          })}
        </div>
      );
  }
}
