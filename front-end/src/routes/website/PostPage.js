import React, { Component } from "react";
import Comment from "../../components/Comment";

export default class PostPage extends Component {
  state = {};
  render() {
    // console.log(this.props.location.state.post_id);
    return (
      <div>
        <h1> Post Page </h1>
        <Comment />
      </div>
    );
  }
}
