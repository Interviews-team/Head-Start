//importing react-component
import React, { Component } from "react";
//create Footer class
//import react-router-dom
import { Link } from "react-router-dom";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/AboutUsPage">AboutUs</Link> | {" "}
        <Link to="/JoinUsPage">Join Us</Link> |{" "}
        <Link to="/AskQuestionPage">Ask Question</Link>
      </div>
    );
  }
}
//export Footer class
export default Footer;
