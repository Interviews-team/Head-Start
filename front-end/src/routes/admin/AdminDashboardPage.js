import React, { Component } from "react";
import { Link } from "react-router-dom";
import Event from "../../components/Event";
import PendingAdmin from "../../components/PendingAdmin";
import PendingQuestion from "../../components/PendingQuestion";

export default class AdminDashboardPage extends Component {
  render() {
    return (
      <div style={{ color: "red" }}>
        <h1>Admin Dashboard</h1>
        <Link style={{ color: "red" }} to="/AddEventPage">
          Add Event
        </Link>{" "}
        |{" "}
        <Link style={{ color: "red" }} to="/AddQuestionPage">
          Add Question
        </Link>{" "}
        <br />
        <Event />
        <PendingAdmin />
        <PendingQuestion />
      </div>
    );
  }
}
