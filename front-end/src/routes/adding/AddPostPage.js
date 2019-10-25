import React, { Component } from "react";
import axios from "axios";

export default class AddQuestionPage extends Component {
  addPost = event => {
    event.preventDefault();

    let question = event.target["question"].value;
    let answer = event.target["answer"].value;
    let field = this.props.loggedInUser.field;
    let user_id = this.props.loggedInUser._id;

    event.target["question"].value = "";
    event.target["answer"].value = "";

    axios.post("http://localhost:9000/add-post", {
      question,
      answer,
      field,
      user_id
    });
  };

  render() {
    return (
      <div>
        <h1>Add Question</h1>
        <form onSubmit={this.addPost}>
          <input
            type="text"
            name="question"
            placeholder="write your question here ..."
          />
          <input
            type="text"
            name="answer"
            placeholder="write your answer here ..."
          />
          <button className="btn btn-primary">add</button>
        </form>
      </div>
    );
  }
}
