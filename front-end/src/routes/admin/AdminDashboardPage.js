import React, { Component } from "react";
import { Link } from "react-router-dom";
import Event from "../../components/Event";
import PendingAdmin from "../../components/PendingAdmin";
import PendingQuestion from "../../components/PendingQuestion";
import User from "../../components/User";
import Post from "../../components/Post";

export default class AdminDashboardPage extends Component {
  render() {
    return (
      <div style={{ color: "red" }}>
        <h1>Admin Dashboard</h1>
        {/* OWNER */}
        {/* remember to add field and new admin*/}
        <Link style={{ color: "red" }} to="/AddEventPage">
          Add Event
        </Link>
        {/* <Event />
        <User />
        <PendingAdmin /> */}
        <br />

        {/* HRADMIN and TECHADMIN*/}
        <Link style={{ color: "red" }} to="/AddQuestionPage">
          Add Question
        </Link>
        {/* <PendingQuestion />
        <Post /> */}
      </div>
    );
  }
}
