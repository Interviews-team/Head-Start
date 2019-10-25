import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios'

export default class AskQuestionPage extends Component {
  
  askQuestion = event => {
    event.preventDefault();
    let question = {
      question: event.target["question"].value,
      field: event.target["field"].value,
      user_id: this.props.loggedInUser._id
    };

    axios
      .post("http://localhost:9000/ask-question", question)
      .catch(err => console.log(err));

    this.props.history.push("/");
  };

  render() {
    if(this.props.loggedInUser.role === null) {return <Redirect to='/LoginPage' /> }
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
              <select name="field" >
                <option value="software" defaultValue>Software</option>
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
