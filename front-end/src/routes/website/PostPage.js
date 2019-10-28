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

  deletePost = _id => {
    axios
      .post("http://localhost:9000/delete-post", { _id })
      .then(res => this.props.history.goBack());
  };

  render() {
    const cardWidth = {
      width: "30%",
      position: "absolute",
      marginLeft: "320px"
    };

    const cardColor = {
      boxShadow:
        "0 1px 1px #000000,0 10px 0 -5px #eee,0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px #eee,0 20px 1px -9px rgba(0,0,0,0.15)",
      backgroundColor: "white",
      border: "1px solid #efefef",
      padding: "30px",
      borderBottom: "1px solid #cecece"
    };
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
        id={comment._id}
        user={user_id}
        user_id={loggedInUser._id}
      />
    ));
    return (
      <div>
        <body>
          <div className="container mt-5 ">
            <div className="row mt-5">
              <div className="w-100 mt-5">
                <main className="col-md-4" style={cardWidth}>
                  <div class=" card bg-light" style={cardColor}>
                    <div class="card-header text-center p-4">
                      <h1 className="text-dark">{question}</h1>
                    </div>
                    <div class="card-body text-dark p-4 ">
                      <form>
                        <div className="form-group">
                          <h2>Answer : {answer}</h2>
                        </div>
                        <div className="form-group">
                          <h2>Field : {field}</h2>
                        </div>
                        <div className="form-group  ">
                          <h2>Comments : {comments}</h2>
                        </div>
                        <form
                          onSubmit={this.addComment}
                          className="d-flex justify-content-end"
                        >
                          <input
                            type="text"
                            className="p-2"
                            name="comment"
                            placeholder="write your comment..."
                          />
                          <br />
                          <br />
                          <button type="submit" className="btn btn-primary m-1">
                            Replay
                          </button>
                          {(loggedInUser.role === "hrAdmin" &&
                            field === "HR") ||
                          (loggedInUser.role === "techAdmin" &&
                            field !== "HR") ||
                          loggedInUser.role === "owner" ? (
                            <button
                              className="btn btn-danger m-1 "
                              onClick={() => this.deletePost(post_id)}
                            >
                              Delete Post
                            </button>
                          ) : null}
                        </form>
                      </form>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
