import React, { Component } from "react";

export default class PendingQuestion extends Component {
  answerPending = event => {
    event.preventDefault();
    let post = {
      _id: this.props._id,
      question: this.props.question,
      answer: event.target["answer"].value,
      field: this.props.field,
      user_id: this.props.user_id
    };
    this.props.answerPending(post);
  };

  deletePending() {
    this.props.deletePending(this.props._id);
  }

  render() {
    return (
      <div className="col-md-12 mt-3">
        <div className="card">
          {this.props.page === "UserDashboardPage" ? (
            <div className="card-body">
              <h5>{this.props.question}</h5>
              <h6>{this.props.field}</h6>
              {this.props.status === "answered" ? (
                <h5 className="badge badge-success float-left">
                  {this.props.status}
                </h5>
              ) : (
                <h5 className="badge badge-warning float-left">
                  {this.props.status}
                </h5>
              )}

              <button
                className="btn btn-danger float-right"
                onClick={() => this.deletePending()}
              >
                X
              </button>
            </div>
          ) : (
            <>
              <div className="card-header">
                <h4>{this.props.question}</h4>
              </div>
              <div className="card-body">
              <h6>{this.props.field}</h6>
                <form onSubmit={this.answerPending}>
                  <div className="form-group">
                    <textarea
                      type="text"
                      name="answer"
                      className="form-control"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-success float-left">
                    Answer
                  </button>
                </form>
                <button
                  className="btn btn-danger float-right"
                  onClick={this.deletePending}
                >
                  DELETE
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
