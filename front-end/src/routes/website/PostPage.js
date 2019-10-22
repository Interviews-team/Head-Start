import React, { Component } from "react";
import Comment from "../../components/Comment";

export default class PostPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1> Post Page </h1>
        <Comment />
      </div>
    );
  }
}
