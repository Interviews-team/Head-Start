import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Post from "../../components/Post";
import TechnicalQuestionsImage from "../../images/1.jpg";

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

  deletePost = _id => {
    axios
      .post("http://localhost:9000/delete-tech-post", { _id })
      .then(res => this.setState({ posts: res.data }));
  };

  render() {
    const TechnicalQuestionsPage = {
      backgroundImage: `url(${TechnicalQuestionsImage})`,
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",
      backgroundSize: "cover",
      height: "88vh",
      backgroundRepeat: "no-repeat",
      backgroundPositionY: "bottom"
    };

    let { role } = this.props.loggedInUser;
    return (
      <div>
        <div className="overflow-auto" style={TechnicalQuestionsPage}>
          {role === "techAdmin" ? (
            <button className="btn btn-success font-weight-bold float-right mt-5 mr-5">
              <Link
                to="/AddPostPage"
                className="col-md-1"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: 20
                }}
              >
                Add Post
              </Link>
            </button>
          ) : null}
          <div className="container md-5 w-75">
            <div className="row py-5 px-4">
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
                    deletePost={this.deletePost}
                    page="TechnicalQuestionsPage"
                  />
                );
              })}
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
