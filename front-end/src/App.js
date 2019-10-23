import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

//importing components
import Header from "./components/Header";
import Footer from "./components/Footer";

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
import LandingPage from "./routes/website/LandingPage";
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


//USERS FUNCTIONS
//Please write your code below and only below your name
  getUsers() {
    axios.get("http://localhost:9000/get-users").then(response => {
      this.setState({ users: response.data });
    });
  }

//FIELDS FUNCTIONS
//Please write your code below and only below your name
getFields() {
  axios.get("http://localhost:9000/get-fields").then(response => {
    this.setState({ fields: response.data });
  });
}

//POSTS FUNCTIONS
//Please write your code below and only below your name
  getPosts() {
    axios.get("http://localhost:9000/get-posts").then(response => {
      this.setState({ posts: response.data });
    });
  }

//COMMENTS FUNCTIONS
//Please write your code below and only below your name
  getComments() {
    axios.get("http://localhost:9000/get-comments").then(response => {
      this.setState({ comments: response.data });
    });
  }

//PENDINGS FUNCTIONS
//Please write your code below and only below your name
  getPending() {
    axios.get("http://localhost:9000/get-pending").then(response => {
      this.setState({ pending: response.data });
    });
  }

//EVENTS FUNCTIONS
//Please write your code below and only below your name
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
          <Route exact path="/">
            <LandingPage />
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

