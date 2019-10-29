import React, { Component } from "react";
import Comment from "../../components/Comment";
import axios from "axios";
// import PostPageImage from "../../images/Comments.jpg";

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
    event.preventDefault();

    let user_id = this.props.location.state.loggedInUser._id;
    let post_id = this.props.location.state.post_id;
    let comment = event.target["comment"].value;
    event.target["comment"].value = "";

    axios
      .post("http://localhost:9000/add-comment", { comment, user_id, post_id })
      .then(res => this.getPostComments());
  };

  deleteComment = _id => {
    let user_id = this.props.loggedInUser._id;
    axios
      .post("http://localhost:9000/delete-user-comment", { _id, user_id })
      .then(res => {
        this.setState({ comments: res.data });
      });
  };

  deletePost = _id => {
    axios
      .post("http://localhost:9000/delete-post", { _id })
      .then(res => this.props.history.goBack());
  };

  render() {
    let {
      question,
      answer,
      field,
      post_id,
      loggedInUser
    } = this.props.location.state;

    let comments = this.state.comments.map(comment => (
      <Comment
        key={comment._id}
        comment={comment.comment}
        _id={comment._id}
        deleteComment={this.deleteComment}
        user={comment.user_id}
        user_id={loggedInUser._id}
      />
    ));
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="card">
            <div className="card-header">
              <h3 className="float-left">{question}</h3>
              {(loggedInUser.role === "hrAdmin" && field === "HR") ||
              (loggedInUser.role === "techAdmin" && field !== "HR") ||
              loggedInUser.role === "owner" ? (
                <button
                  className="btn btn-danger float-right"
                  onClick={() => this.deletePost(post_id)}
                >
                  Delete Post
                </button>
              ) : null}
            </div>
            <div className="card-body">
              <h5 className="card-title">{answer}</h5>
              <p className="card-text">{field}</p>
            </div>
            <dir>
              <h6 style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Comments
              </h6>
              {comments}
            </dir>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 ">
            <form onSubmit={this.addComment} className="form-group">
              <input
                type="text"
                className="form-control"
                name="comment"
                placeholder="write your comment..."
              />
              <button type="submit" className="btn btn-success mt-3">
                Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
