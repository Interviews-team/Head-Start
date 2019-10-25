import React, { Component } from "react";
import { Link } from "react-router-dom";
// import '/home/owner/Desktop/GHZAWI/github/react/Head-Start/images/ghz.png'

export default class Event extends Component {
  state = {};
  render() {
    let { img, title, url, page, event_id } = this.props;
    return (
      <Link
        to={{
          pathname: "/EventPage",
          state: { event_id, img, title, url, page }
        }}
        style={{ textDecoration: "none" }}
      >
        <div>
          <img src='/ghz.png' alt="asd" />
          <h4>{title}</h4>
          <p>{url}</p>
          <p>{event_id}</p>
        </div>
      </Link>
    );
  }
}
