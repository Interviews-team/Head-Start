import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Event extends Component {
  state = {};
  render() {
    let { img, title, url, page, event_id } = this.props;
    return (
      <div className="col-md-12 mt-3">
        <div className="card bg-dark text-white">
          <img
            className="card-img"
            src={img}
            alt="img"
            style={{ objectFit: "cover", maxHeight: "250px" }}
          />
          <div className="card-img-overlay">
            <h5>{title}</h5>
            <p>{url}</p>
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
