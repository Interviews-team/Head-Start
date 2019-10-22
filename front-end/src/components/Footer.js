import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/AboutUsPage">AboutUs</Link> |{" "}
        <Link to="/JoinUsPage">Join Us</Link> |{" "}
        <Link to="/AskQuestionPage">Ask Question</Link>
      </div>
    );
  }
}
