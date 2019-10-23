import React, { Component } from "react";
import Comment from "../../components/Comment";

export default class PostPage extends Component {
  state = {};

  render() {
    if (this.props.location.state.user === "Admin") {
      return (
        <div>
          <h1>Post Page </h1>
          <h3>Post Id :</h3> {this.props.location.state.id}
          <h3>PostQuestion :</h3>
          {this.props.location.state.question}
          <h3>Post field :</h3>
          {this.props.location.state.field}
          <h3>Post User Id :</h3>
          {this.props.location.state.user_id}
          <h3>Post Comments :</h3>
          {this.props.location.state.comments.map(comment => {
            return <Comment comments={comment.comment} user={this.props.location.state.user} />;
          })}
        </div>
      );
    } else {
      return (
        <div>
          <h3>PostQuestion :</h3>
          {this.props.location.state.question}
        </div>
      );
    }
  }
}
