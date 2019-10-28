import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Event extends Component {
  state = {};
  render() {
    let { img, title, url, page, event_id } = this.props;
    return (
      <div className="col-md-12 mt-3">
        <div className="card mb-3">
          <img style={{backgroundSize: 'cover', maxHeight: '150px'}} className="card-img-top" src={img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <a className="card-text" href={url}>{url}</a>
            <p className="card-text">
              <Link
                to={{
                  pathname: "/EventPage",
                  state: { event_id, img, title, url, page }
                }}
                style={{ textDecoration: "none" }}
              >
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
