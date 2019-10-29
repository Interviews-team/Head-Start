import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import JoinUsPageImage from "../../images/JoinUsPageImage.jpg";

export default class JoinUsPage extends Component {
  state = {
    msg: null
  };

  submitApplication = () => {
    axios
      .post("http://localhost:9000/application", this.props.loggedInUser)
      .then(res =>
        this.setState({
          msg:
            "Your Application Will be Reviewed! We Will Contact You As Soon As Possible. Please Check User Dashboard"
        })
      )
      .catch(err => console.log(err));

    setTimeout(() => {
      this.setState({ msg: null });
    }, 5000);
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
        <div className="col-md-12 ">
          <div class="mt-5 card text-center w-50 m-auto">
            <div class="card-header">
              <h1>
                <i class="fas fa-users"></i> Join Us{" "}
              </h1>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                Our members make a visible difference by serving as community
                leaders using their experience to create positive, lasting
                change in our communities.
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
        {this.state.msg === null ? null : (
          <div
            className="alert alert-success w-50 mt-3"
            style={{
              textAlign: "center",
              margin: "0 auto"
            }}
            role="alert"
          >
            {this.state.msg}
          </div>
        )}
      </div>
    );
  }
}
