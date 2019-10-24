import React, { Component } from "react";
import { Link } from "react-router-dom";
import Event from "../../components/Event";
import Post from "../../components/Post";

export default class LandingPage extends Component {
  render() {
    console.log(this.props);
    let { events, posts, loggedInUser } = this.props;
    let randomEvents = events.slice(0, 5);
    let eventsToShow = randomEvents.map(event => (
      <Event
        key={event._id}
        event_id={event._id}
        img={event.img_path}
        title={event.title}
        url={event.url}
        page="LandingPage"
      />
    ));

    let length = posts.length;
    let randomPosts = [];
    if (length > 1) {
      for (let i = 0; i < 2; i++) {
        let postToPush = posts[Math.floor(Math.random() * (length - 1))];
        if (randomPosts.indexOf(postToPush) > -1) {
          i--;
        } else {
          randomPosts.push(postToPush);
        }
      }
    }
    console.log("RANDOM POSTS: ", randomPosts);
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

    return (
      <>
        <h3>
          Want to increase your chances in getting the job? HEADSTART is the
          right choice ...
        </h3>
        <br /> <Link to="/EventsPage">Events</Link>
        {eventsToShow}
        {postsToShow}
      </>
    );
  }
}
