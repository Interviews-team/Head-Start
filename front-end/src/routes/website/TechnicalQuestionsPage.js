import React, { Component } from "react";
import { Link } from "react-router-dom";
import Post from "../../components/Post";

export default class TechnicalQuestionsPage extends Component {
  render() {
    // console.log("PROPS", this.props);
    const admin = this.props.users.filter(user => user.role === "Admin");
    let userRole = admin[0].role;
    if (admin[0].role === "Admin") {
      return (
        <div>
          <h1>Technical Question</h1>
          <Link to="/AddQuestionPage">Add New Question</Link>
          <br />
          {this.props.posts.map(post => {
            return (
              <Post
                key={post._id}
                post={post}
                page="TechnicalQuestionsPage"
                users={this.props.users}
                comments={this.props.comments}
                userRole={userRole}
              />
            );
          })}
          <br />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Technical Question</h1>
          <br />
          {this.props.posts.map(post => {
            return (
              <Post
                key={post._id}
                post={post}
                page="TechnicalQuestionsPage"
                users={this.props.users}
                comments={this.props.comments}
              />
            );
          })}
          <br />
        </div>
      );
    }
  }
}
