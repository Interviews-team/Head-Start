import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Event extends Component {

  deleteEvent() {
    this.props.deleteEvent(this.props.event_id)
  }

  render() {
    let { img, title, description, url, page, event_id } = this.props;
    return (
      <div className="col-md-12 mt-3">
        <div className="card mb-3">
          <img
            style={{ backgroundSize: "cover", height: "150px" }}
            className="card-img-top"
            src={img}
            alt="Card img cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <a className="card-text" href={url}>
              {url}
            </a>
            <p className="card-text">
              <Link
                className="float-left"
                to={{
                  pathname: "/EventPage",
                  state: { event_id, img, title, url, page, description }
                }}
                style={{ textDecoration: "none" }}
              >
                Read more
              </Link>
              {this.props.page !== "LandingPage" ? (
                <button
                  className="btn btn-danger float-right"
                  onClick={() => this.deleteEvent()}
                >
                  X
                </button>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
