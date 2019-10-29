import React, { Component } from "react";
import axios from "axios";
import Event from "../../components/Event";
import EventsImage from "../../images/events.jpg";

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

  deleteEvent = _id => {
    axios
      .post("http://localhost:9000/delete-event", { _id })
      .then(res => this.setState({ events: res.data }));
  };

  render() {
    const EventsPage = {
      backgroundImage: `url(${EventsImage})`,
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",
      backgroundSize: "cover",
      height: "87vh",
      backgroundRepeat: "no-repeat"
    };

    return (
      <div className="overflow-auto" style={EventsPage}>
        <div className="container mt-5 md-5 w-75">
          <div className="row py-5 px-4">
            {this.state.events.map(event => {
              return (
                <div className="col-md-4" key={event._id}>
                  <Event
                    key={event._id}
                    event_id={event._id}
                    title={event.title}
                    img={event.img_path}
                    description={event.description}
                    url={event.url}
                    deleteEvent={this.deleteEvent}
                    page="EventsPage"
                    loggedInUser={this.props.loggedInUser}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
