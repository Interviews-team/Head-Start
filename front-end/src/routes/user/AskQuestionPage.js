import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class AskQuestionPage extends Component {
  askQuestion = event => {
    event.preventDefault();
    let question = {
      question: event.target["question"].value,
      field: event.target["field"].value,
      user_id: this.props.loggedInUser._id,
      status: "Pending..."
    };

    axios
      .post("http://localhost:9000/ask-question", question)
      .catch(err => console.log(err));

    this.props.history.goBack();
  };

  render() {
    if (this.props.loggedInUser.role === null) {
      return <Redirect to="/LoginPage" />;
    }
    const cardStyle = {
      boxShadow: " 0 0 10px 3px darkgray"
    };

    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-3 mt-5"></div>
          <main className="col-md-6 mt-5">
            <div class="card bg-light mb-3 mt-5" style={cardStyle}>
              <div class="card-header text-center p-4">
                <h1 className="text-dark">
                  <b>Ask Question</b>
                </h1>
              </div>
              <div class="card-body text-dark p-4">
                <form onSubmit={this.askQuestion}>
                  <div class="form-group">
                    <h3 for="exampleFormControlTextarea1">Question:</h3>
                    <textarea
                      class="form-control"
                      name="question"
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="write your question here ..."
                    ></textarea>
                    <br />
                    <h3 for="">Field:</h3>
                    <select
                      defaultValue="Default"
                      name="field"
                      className="form-control"
                    >
                      <option disabled>Select Field</option>
                      <option value="HR"> Human Resources </option>
                      <option value="IT"> Information Technology </option>
                    </select>
                    <br />
                    <button className="btn btn-primary">Ask Question</button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
