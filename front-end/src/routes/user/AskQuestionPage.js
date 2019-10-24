import React, { Component } from "react";

export default class AskQuestionPage extends Component {
  state = {
    newQuestion: {},
    user_name: ""
  };
  askQuestion = e => {
    e.preventDefault();
    let newQuestion = {
      question: e.target["question"].value,
      field: e.target["feild"].value
    };
    this.props.askQuestion(newQuestion);
    this.setState({ newQuestion: newQuestion });
    //take user id with you
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h1> Ask Question </h1>
            <form onSubmit={this.askQuestion}>
              <label>Ask your question</label>
              <br />
              <textarea name="question"></textarea>
              <br />

              <label>Choose your field</label>
              <br />
              <select name="feild" defaultValue="Defualt">
                <option value="Defualt" disabled>
                  Choose your field
                </option>
                <option value="software">Software</option>
                <option value="multi-Media"> Multi Media </option>
                <option value="computer-engineer"> Computer Engineer</option>
              </select>

              <br />
              <br />
              <button type="submit" className="btn btn-success">
                Post Question
              </button>
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
