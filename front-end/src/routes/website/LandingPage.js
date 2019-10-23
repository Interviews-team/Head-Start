import React, { Component } from "react";
import { Link } from "react-router-dom";
import Event from "../../components/Event";
import Post from "../../components/Post";

export default class LandingPage extends Component {
  render() {
    return (
        <>
        <br /> <Link to="/EventsPage">Events</Link>
        <Event />
        <Post />
      </>
    );
  }
}
