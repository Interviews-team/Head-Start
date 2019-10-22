import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

//importing components
import Event from "./components/Event";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";

//importing routes
import AddEventPage from "./routes/adding/AddEventPage";
import AddQuestionPage from "./routes/adding/AddQuestionPage";

import AdminDashboardPage from "./routes/admin/AdminDashboardPage";

import AskQuestionPage from "./routes/user/AskQuestionPage";
import LoginPage from "./routes/user/LoginPage";
import RegisterPage from "./routes/user/RegisterPage";
import UserDashboardPage from "./routes/user/UserDashboardPage";
import UserProfilePage from "./routes/user/UserProfilePage";

import AboutUsPage from "./routes/website/AboutUsPage";
import EventPage from "./routes/website/EventPage";
import EventsPage from "./routes/website/EventsPage";
import HrQuestionsPage from "./routes/website/HrQuestionsPage";
import JoinUsPage from "./routes/website/JoinUsPage";
import PostPage from "./routes/website/PostPage";
import TechnicalQuestionsPage from "./routes/website/TechnicalQuestionsPage";

export default class App extends Component {
  state = {
    users: ["users"],
    posts: ['posts'],
    comments: ['comments'],
    fields: ['fields'],
    pending: ['pending'],
    events: ['events']
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios.get("http://localhost:9000/get-users").then(response => {
      this.setState({ users: response.data });
    });
  }

  getPosts() {
    axios.get("http://localhost:9000/get-posts").then(response => {
      this.setState({ posts: response.data });
    });
  }

  getComments() {
    axios.get("http://localhost:9000/get-comments").then(response => {
      this.setState({ comments: response.data });
    });
  }

  getFields() {
    axios.get("http://localhost:9000/get-fields").then(response => {
      this.setState({ fields: response.data });
    });
  }

  getPending() {
    axios.get("http://localhost:9000/get-pending").then(response => {
      this.setState({ pending: response.data });
    });
  }

  getEvents() {
    axios.get("http://localhost:9000/get-events").then(response => {
      this.setState({ events: response.data });
    });
  }

  render() {
    console.log(this.state.users);
    return (
      <div>
        <Router>
          <Header />

          <Link to="/">Home</Link>
          <Route exact path="/">
            <>
              <br /> <Link to="/EventsPage">Events</Link>
              <Event />
              <Post />
            </>
          </Route>

          <Route exact path="/AddEventPage">
            <AddEventPage />
          </Route>
          <Route path="/AddQuestionPage">
            <AddQuestionPage />
          </Route>

          <Route path="/AdminDashboardPage">
            <AdminDashboardPage />
          </Route>

          <Route path="/AskQuestionPage">
            <AskQuestionPage />
          </Route>
          <Route path="/LoginPage">
            <LoginPage />
          </Route>
          <Route path="/RegisterPage">
            <RegisterPage />
          </Route>
          <Route path="/UserDashboardPage">
            <UserDashboardPage />
          </Route>
          <Route path="/UserProfilePage">
            <UserProfilePage />
          </Route>

          <Route path="/AboutUsPage">
            <AboutUsPage />
          </Route>
          <Route path="/EventPage">
            <EventPage />
          </Route>
          <Route path="/EventsPage">
            <EventsPage />
          </Route>
          <Route path="/HrQuestionsPage">
            <HrQuestionsPage />
          </Route>
          <Route path="/JoinUsPage">
            <JoinUsPage />
          </Route>
          <Route path="/PostPage">
            <PostPage />
          </Route>
          <Route path="/TechnicalQuestionsPage">
            <TechnicalQuestionsPage />
          </Route>

          <Footer />
        </Router>
      </div>
    );
  }
}

