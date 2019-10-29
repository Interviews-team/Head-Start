import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class AskQuestionPage extends Component {
  state = {
    msg: null
  };

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
      .then(res => {
        this.setState({
          msg:
            "Your Question Will be Reviewed and Answered! Please Check User Dashboard"
        });
      })
      .catch(err => console.log(err));

    setTimeout(() => {
      this.setState({ msg: null });
    }, 5000);
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
            <div className="card bg-light mb-3 mt-5" style={cardStyle}>
              <div className="card-header text-center p-4">
                <h1 className="text-dark">
                  <i class="fas fa-question"></i> Ask Question
                </h1>
              </div>
              <div className="card-body text-dark p-4">
                <form onSubmit={this.askQuestion}>
                  <div className="form-group">
                    <h3 htmlFor="exampleFormControlTextarea1">Question:</h3>
                    <textarea
                      className="form-control"
                      name="question"
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="write your question here ..."
                    ></textarea>
                    <br />
                    <h3 htmlFor="">Field:</h3>
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
            {this.state.msg === null ? null : (
              <div
                className="alert alert-success"
                style={{ textAlign: "center" }}
                role="alert"
              >
                {this.state.msg}
              </div>
            )}
          </main>
        </div>
      </div>
    );
  }
}
