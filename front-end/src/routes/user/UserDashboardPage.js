import React, { Component } from "react";
import axios from "axios";
import PendingQuestion from "../../components/PendingQuestion";
import Post from "../../components/Post";
import Comment from "../../components/Comment";

export default class UserDashboardPage extends Component {
  state = {
    posts: [],
    comments: [],
    pendings: []
  };

  componentDidMount() {
    this.getPosts();
    this.getComments();
    this.getPendings();
  }

  getPosts() {
    axios
      .post("http://localhost:9000/get-user-posts", this.props.loggedInUser)
      .then(res => {
        this.setState({ posts: res.data });
      });
  }

  getComments() {
    axios
      .post("http://localhost:9000/get-user-comments", this.props.loggedInUser)
      .then(res => {
        this.setState({ comments: res.data });
      });
  }

  deleteComment = _id => {
    let user_id = this.props.loggedInUser._id;
    axios
      .post("http://localhost:9000/delete-user-comment", { _id, user_id })
      .then(res => {
        this.setState({ comments: res.data });
      });
  };

  getPendings() {
    axios
      .post(
        "http://localhost:9000/get-user-pending-questions",
        this.props.loggedInUser
      )
      .then(res => {
        this.setState({ pendings: res.data });
      });
  }

  deletePost = _id => {
    let user_id = this.props.loggedInUser._id;
    axios.post('http://localhost:9000/delete-user-post', {_id, user_id})
    .then (res => this.setState({posts: res.data}))
  };

  render() {
    console.log(this.state.comments);
    let { posts, comments, pendings } = this.state;

    let postsToShow = posts.map(post => (
      <Post
        key={post._id}
        question={post.question}
        answer={post.answer}
        user_id={post.user_id}
        field={post.field}
        post_id={post._id}
        loggedInUser={this.props.loggedInUser}
        deletePost={this.deletePost}
        page="HrQuestionsPage"
      />
    ));

    let commentsToShow = comments.map(comment => (
      <Comment
        key={comment._id}
        comment={comment.comment}
        _id={comment._id}
        deleteComment={this.deleteComment}
        user={comment.user_id}
        user_id={this.props.loggedInUser._id}
      />
    ));

    let pendingsToShow = pendings.map(pending => (
      <PendingQuestion key={pending._id} question={pending.question} />
    ));

    return (
      <div>
        <h1>User Dashboard</h1>
        <h1>Posts</h1>
        {postsToShow}
        <br />

        <h1>Comments</h1>
        {commentsToShow}
        <br />

        <h1>Pending</h1>
        {pendingsToShow}
      </div>
    );
  }
}
