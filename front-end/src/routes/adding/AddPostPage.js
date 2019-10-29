import React, { Component } from "react";
import axios from "axios";

export default class AddQuestionPage extends Component {
  state = {
    msg: null
  };

  addPost = event => {
    event.preventDefault();

    let question = event.target["question"].value;
    let answer = event.target["answer"].value;
    let field = this.props.loggedInUser.field;
    let user_id = this.props.loggedInUser._id;

    event.target["question"].value = "";
    event.target["answer"].value = "";

    axios
      .post("http://localhost:9000/add-post", {
        question,
        answer,
        field,
        user_id
      })
      .then(res =>
        this.setState({
          msg: "Post Added Successfully!"
        })
      )
      .catch(err => console.log(err));

    setTimeout(() => {
      this.setState({ msg: null });
    }, 5000);
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
            <div className="card bg-light " style={cardShadow}>
              <div className="card-header text-center ">
                <h1 className="text-dark">Add Post</h1>
              </div>
              <div className="card-body text-dark p-4">
                <div className="card-subtitle mb-2 text-dark">
                  <form onSubmit={this.addPost}>
                    <div className="form-group">
                      <br />
                      <h3 for="exampleFormControlInput1">Question:</h3>
                      <input
                        type="text"
                        name="question"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="write your question here ..."
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <h3 for="exampleFormControlTextarea1">Answer:</h3>
                      <textarea
                        className="form-control"
                        name="answer"
                        id="exampleFormControlTextarea1"
                        rows="4"
                        placeholder="write your answer here ..."
                      ></textarea>
                      <br />
                      <button className="btn btn-primary">Create Post</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {this.state.msg === null ? null : (
              <div
                className="alert alert-success mt-4"
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
