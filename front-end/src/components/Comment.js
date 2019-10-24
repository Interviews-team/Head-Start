import React, { Component } from "react";

export default class Comment extends Component {
  
  render() {
    let { comment, user,  user_id } = this.props;
      return (
        <div>
          <h1>{comment}</h1>
          {user === user_id ? <p>edit</p> : null}
        </div>
      );

  }
}
