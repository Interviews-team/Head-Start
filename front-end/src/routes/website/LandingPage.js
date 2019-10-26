import React, { Component } from "react";
import { Link } from "react-router-dom";
import Event from "../../components/Event";
import Post from "../../components/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import LandingPageImage from "../../images/new.png";
import AboutUsPage from "./AboutUsPage";

export default class LandingPage extends Component {
  render() {
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
    console.log(LandingPageImage);

    //how to change image while scrolling
    return (
      <>
        <img src={LandingPageImage} alt="img" className="w-100  "></img>
        {/* <h3 className="">
          Want to increase your chances in getting the job? HEAD START is the
          right choice ...
        </h3> */}
        <AboutUsPage />
        <div className="container mb-5">
          <div className="row">{eventsToShow}</div>
        </div>
        <div className="container">
          <div className="row">{postsToShow}</div>
        </div>
      </>
    );
  }
}
