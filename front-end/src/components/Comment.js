import React, { Component } from "react";

export default class Comment extends Component {
  state = {};
  render() {
    let { comments, user } = this.props;
    if (user === "Admin") {
      return (
        <div>
          <h1>{comments}</h1>
        </div>
      );
    } else {
      return null;
    }
  }
}
