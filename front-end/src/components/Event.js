import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Event extends Component {
  state = {};
  render() {
    let {img, title, url, page, event_id} = this.props

    if (page === "LandingPage") {
      return (
        <Link to={{pathname: '/EventPage', state:{event_id}} } style={{textDecoration: 'none'}}>
          <div>
            <h3>{img}</h3>
            <h4>{title}</h4>
            <p>{url}</p>
            <p>{event_id}</p>
          </div>
        </Link>
      );
    }
  }
}
