import React, { Component } from "react";

export default class Comment extends Component {
  render() {
    let { comment, user, user_id, _id, deleteComment } = this.props;
    return (
      <div className="col-md-12 mt-3">
        <div className="card">
          <div className="card-body">
            <h5 className="float-left">{comment}</h5>
            {user === user_id ? (
              <button
                className="btn btn-danger float-right"
                onClick={() => deleteComment(_id)}
              >
                X
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
