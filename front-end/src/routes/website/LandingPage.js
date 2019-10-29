import React, { Component } from "react";
import Event from "../../components/Event";
import Post from "../../components/Post";
import LandingPageImage from "../../images/new.png";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    let { events, posts, loggedInUser } = this.props;
    let randomEvents = events.slice(0, 3);
    let eventsToShow = randomEvents.map(event => (
      <Event
        key={event._id}
        event_id={event._id}
        img={event.img_path}
        title={event.title}
        url={event.url}
        page="LandingPage"
        loggedInUser={loggedInUser}
      />
    ));

    let length = posts.length;
    let randomPosts = [];
    let count = loggedInUser.role === null ? 6 : 4;
    if (length > 1) {
      for (let i = 0; i < count; i++) {
        let postToPush = posts[Math.floor(Math.random() * (length - 1))];
        if (randomPosts.indexOf(postToPush) > -1) {
          i--;
        } else {
          randomPosts.push(postToPush);
        }
      }
    }
    let postsToShow = randomPosts.map(post => (
      <Post
        key={post._id}
        post_id={post._id}
        question={post.question}
        answer={post.answer}
        field={post.field}
        user_id={post.user_id}
        loggedInUser={loggedInUser}
        page="LandingPage"
      />
    ));

    const LandingPage = {
      backgroundImage: `url(${LandingPageImage})`,
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",
      backgroundSize: "cover",
      height: "88vh",
      backgroundRepeat: "no-repeat"
    };

    return (
      <>
        <div
          style={LandingPage}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h1 className="text-white font-weight-bold">
            Want to increase your chances in getting the job?
          </h1>
          <br />
          <h1 className="text-white font-weight-bold">
            HEAD START is the right choice ...
          </h1>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="row mt-5 ml-3 mb-3">
                <Link to="/EventsPage" className="text-dark">
                  <h3 className=" font-weight-bold">Events</h3>
                </Link>
              </div>
              {eventsToShow}
            </div>
            <div className="col-md-8">{postsToShow}</div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
}
