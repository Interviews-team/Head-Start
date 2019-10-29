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
    axios
      .post("http://localhost:9000/delete-user-post", { _id, user_id })
      .then(res => this.setState({ posts: res.data }));
  };

  deletePending = _id => {
    let user_id = this.props.loggedInUser._id;
    axios
      .post("http://localhost:9000/delete-pending", { _id, user_id })
      .then(res => {
        this.getPendings();
      });
  };

  render() {
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
        page="UserDashboardPage"
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
      <PendingQuestion
        key={pending._id}
        {...pending}
        page="UserDashboardPage"
        deletePending={this.deletePending}
      />
    ));

    return (
      <div className="container-fluid">
        <div className="row mt-3 mb-3">
          <h3 className="mt-3 mb-3 col-md-2">User Dashboard</h3>
        </div>
        <div className="row bg-light">
          <div className="col-md-6 mt-3">
            <h4 style={{ fontWeight: "lighter", textDecoration: "none", fontSize: "27px" }}>
            <i class="far fa-clone"></i> Posts
            </h4>
            {postsToShow}
          </div>

          <div className="col-md-3 mt-3">
            <h4 style={{ fontWeight: "lighter", textDecoration: "none", fontSize: "27px" }}>
            <i class="far fa-comment-dots"></i> Comments
            </h4>
            {commentsToShow}
          </div>

          <div className="col-md-3 mt-3">
            <h4 style={{ fontWeight: "lighter", textDecoration: "none", fontSize: "27px" }}>
            <i class="far fa-clock"></i> Pending
            </h4>
            {pendingsToShow}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
