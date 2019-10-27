import React, { Component } from "react";

export default class PendingQuestion extends Component {
  answerPending = event =>{
    event.preventDefault()
    let post = {
      _id: this.props._id,
      question: this.props.question,
      answer: event.target['answer'].value,
      field : this.props.field,
      user_id: this.props.user_id
    }
    this.props.answerPending(post)
  }

  deletePending (){
    this.props.deletePending(this.props._id)
  }

  render() {
    return (
      <>
        {this.props.page === "UserDashboardPage" ? (
          <div>
            <h1>Pending Question</h1>
            <p>{this.props.question}</p>
            <p>{this.props.status}</p>
          </div>
        ) : (
          <div>
            <h1>Pending Question</h1>
            <p>{this.props.question}</p>
            <form onSubmit={this.answerPending}>
              <input type="text" name="answer" />
              <button type="submit" className="btn btn-success">answer</button>
            </form>

            <button className='btn btn-danger' onClick={this.deletePending}>X</button>
          </div>
        )}
      </>
    );
  }
}
