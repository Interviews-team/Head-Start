import React, { Component } from "react";
import Event from "../../components/Event";

export default class EventsPage extends Component {
  render() {
    return (
      <div>
        <h1> Event </h1>
        <Event />
      </div>
    );
  }
}