import React, { Component } from "react";

export default class Comment extends Component {
  
  render() {
    let { comment, user,  user_id, _id, deleteComment } = this.props;
      return (
        <div>
          <h1>{comment}</h1>
          {user === user_id ? <button className='btn btn-danger' onClick={()=>deleteComment(_id)}>X</button> : null}
        </div>
      );

  }
}
