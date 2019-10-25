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
    let id = this.props.location.state.post_id;
    axios
      .get(`http://localhost:9000/get-post-comments/${id}`)
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err));
  };

  addComment = event => {
    event.preventDefault()

    let user_id = this.props.location.state.loggedInUser._id
    let post_id = this.props.location.state.post_id
    let comment = event.target['comment'].value
    event.target['comment'].value = ''

    axios.post('http://localhost:9000/add-comment', {comment, user_id, post_id})
      .then(res => this.getPostComments())

  }

  render() {
    let {
      question,
      answer,
      field,
      user_id,
      post_id,
      loggedInUser
    } = this.props.location.state;

    let comments = this.state.comments.map(comment => (
      <Comment
        key={comment._id}
        comment={comment.comment}
        id = {comment._id}
        user={user_id}
        user_id={loggedInUser._id}
      />
    ));
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
        {comments}
        <form onSubmit={this.addComment}>
          <input type='text' name='comment' placeholder='write your comment...'/>
          <button type='submit' className='btn btn-primary' >comment</button>
        </form>
      </div>
    );
  }
}
