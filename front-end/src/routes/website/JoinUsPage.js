import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import JoinUsPageImage from "../../images/JoinUsPageImage.jpg";

export default class JoinUsPage extends Component {
  submitApplication = () => {
    axios.post("http://localhost:9000/application", this.props.loggedInUser);
    this.props.history.goBack();
  };

  render() {
    if (this.props.loggedInUser.role === null) {
      return <Redirect to="/LoginPage" />;
    }
    const JoinUsPage = {
      backgroundImage: `url(${JoinUsPageImage})`,
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",
      backgroundSize: "cover",
      height: "88vh",
      backgroundRepeat: "no-repeat"
    };
    return (
      <div className="p-5 mt-5" style={JoinUsPage}>
        <div class="mt-5 card text-center w-50 m-auto">
          <div class="card-header">
            <h1> Join Us </h1>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              Our members make a visible difference by serving as community
              leaders using their experience to create positive, lasting change
              in our communities.
            </h5>
            <p class="card-text">
              WHY SHOULD YOU JOIN?
              <li>Contribute valuable service to the community</li>
              <li>
                Gain knowledge and experience through the study and discussion
                of timely and important topics
              </li>
              <li>
                discover new interests, develop new skills and learn about
                crucial issues in your community
              </li>
              <li>
                make professional contacts and develop lasting friendships as
                you meet others in League who share your interests
              </li>
            </p>
            <button
              className="btn btn-primary"
              onClick={this.submitApplication}
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    );
  }
}
