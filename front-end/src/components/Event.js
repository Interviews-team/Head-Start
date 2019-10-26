import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Event extends Component {
  state = {};
  render() {
    let { img, title, url, page, event_id } = this.props;
    return (
      <div className="col-md-6 mt-3">
        <div className="card">
          <div className="card-header">
            <img src="" alt="img" />
            <h4>{title}</h4>
            <p>{url}</p>
            <p>{event_id}</p>
            <Link
              to={{
                pathname: "/EventPage",
                state: { event_id, img, title, url, page }
              }}
              style={{ textDecoration: "none" }}
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
