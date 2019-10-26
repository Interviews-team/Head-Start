import React, { Component } from "react";
import axios from "axios";

import Event from "../../components/Event";

export default class EventsPage extends Component {
  state = {
    events: []
  };
  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    axios.get("http://localhost:9000/get-events").then(response => {
      this.setState({ events: response.data });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.events.map(event => {
              return (
                <Event
                  key={event._id}
                  title={event.title}
                  img={event.img_path}
                  description={event.description}
                  url={event.url}
                  page="EventsPage"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
