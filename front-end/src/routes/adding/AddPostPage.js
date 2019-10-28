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
    const cardShadow = {
      boxShadow: "0 0 10px 3px darkgray"
    };
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-4"></div>
          <main className="col-md-4 mt-4">
            <div class="card bg-light " style={cardShadow}>
              <div className="card-header text-center ">
                <h1 class="text-dark">Add Post</h1>
              </div>
              <div class="card-body text-dark p-4">
                <div class="card-subtitle mb-2 text-dark">
                  <form onSubmit={this.addPost}>
                    <div class="form-group">
                      <br />
                      <h3 for="exampleFormControlInput1">Question:</h3>
                      <input
                        type="text"
                        name="question"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="write your question here ..."
                      />
                    </div>
                    <br />
                    <div class="form-group">
                      <h3 for="exampleFormControlTextarea1">Answer:</h3>
                      <textarea
                        class="form-control"
                        name="answer"
                        id="exampleFormControlTextarea1"
                        rows="4"
                        placeholder="write your answer here ..."
                      ></textarea>
                      <br />
                      <button className="btn btn-secondary">Create Post</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
