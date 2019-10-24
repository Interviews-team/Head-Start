import React, { Component } from "react";

export default class EventPage extends Component {
  state = {};
  render() {
    // console.log(this.props.location.state.event_id);
    return (
      <div>
        <h1>EventPage</h1>
        <p>{this.props.location.state.event_id}</p>
        <p>{this.props.location.state.title}</p>
        <p>{this.props.location.state.url}</p>
        <p>{this.props.location.state.img}</p>
      </div>
    );
  }
}
