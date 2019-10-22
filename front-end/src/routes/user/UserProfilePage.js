import React, { Component } from "react";
import PendingQuestion from "../../components/PendingQuestion";
import Post from "../../components/Post";

export default class UserProfilePage extends Component {
  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <PendingQuestion />
        <Post />
      </div>
    );
  }
}
