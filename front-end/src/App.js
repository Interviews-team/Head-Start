import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

//importing components
import Header from "./components/Header";
import Footer from "./components/Footer";

//importing routes
import AddEventPage from "./routes/adding/AddEventPage";
import AddPostPage from "./routes/adding/AddPostPage";

import AdminDashboardPage from "./routes/admin/AdminDashboardPage";

import AskQuestionPage from "./routes/user/AskQuestionPage";
import LoginPage from "./routes/user/LoginPage";
import LogoutPage from "./routes/user/LogoutPage";
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
    loggedInUser: {
      _id: null,
      name: null,
      email: null,
      mobileNumber: null,
      gender: null,
      field: null,
      role: null,
      isLoggedIn: null
    },
    users: [],
    posts: [],
    events: []
  };

  componentDidMount() {
    this.getLoggedInUser();
    this.getEvents();
    this.getPosts();
    console.log('Done By:\n Ahmad Nsour\n Ahmad Ghzawi\n Hani Abu Alinain\n Mohammad Alaa Aldein');
  }

  //USERS FUNCTIONS
  //Please write your code below and only below your name

  getLoggedInUser = () => {
    axios.get("http://localhost:9000/get-logged-in").then(response => {
      if (response.data !== null) {
        let loggedInUser = response.data;
        this.setState({ loggedInUser });
      } else {
        let loggedInUser = {
          _id: null,
          name: null,
          email: null,
          mobileNumber: null,
          gender: null,
          field: null,
          role: null,
          isLoggedIn: null
        };
        this.setState({ loggedInUser });
      }
    });
  };

  checkLogin = loggedInUser => {
    this.setState({ loggedInUser });
  };

  //POSTS FUNCTIONS
  //Please write your code below and only below your name
  getPosts = () => {
    axios.get("http://localhost:9000/get-posts").then(response => {
      this.setState({ posts: response.data });
    });
  };

  //EVENTS FUNCTIONS
  //Please write your code below and only below your name
  getEvents() {
    axios.get("http://localhost:9000/get-events").then(response => {
      this.setState({ events: response.data });
    });
  }

  render() {
    let { posts, events, loggedInUser } = this.state;
    return (
      <div>
        <Router>
          <Header loggedInUser={loggedInUser}/>

          <Link to="/">Home</Link>
          <Route
            exact
            path="/AddEventPage"
            component={routerProps => (
              <AddEventPage {...routerProps} addEvent={this.addEvent} />
            )}
          ></Route>
          <Route
            path="/AddPostPage"
            component={routerProps => (
              <AddPostPage {...routerProps} loggedInUser={loggedInUser} />
            )}
          ></Route>

          <Route
            path="/AdminDashboardPage"
            component={routerProps => <AdminDashboardPage {...routerProps} loggedInUser={loggedInUser} />}
          ></Route>
          <Route
            path="/AskQuestionPage"
            component={routerProps => (
              <AskQuestionPage {...routerProps} loggedInUser={loggedInUser} />
            )}
          ></Route>
          <Route
            path="/LoginPage"
            component={routerProps => (
              <LoginPage {...routerProps} checkLogin={this.checkLogin} />
            )}
          ></Route>
          <Route
            path="/RegisterPage"
            component={routerProps => (
              <RegisterPage
                {...routerProps}
                getLoggedInUser={this.getLoggedInUser}
              />
            )}
          ></Route>
          <Route
            path="/LogoutPage"
            component={routerProps => (
              <LogoutPage
                {...routerProps}
                loggedInUser={loggedInUser}
                getLoggedInUser={this.getLoggedInUser}
              />
            )}
          ></Route>
          <Route
            path="/UserDashboardPage"
            component={routerProps => (
              <UserDashboardPage {...routerProps} loggedInUser={loggedInUser} />
            )}
          ></Route>
          <Route
            path="/UserProfilePage"
            component={routerProps => (
              <UserProfilePage {...routerProps} loggedInUser={loggedInUser} getLoggedInUser={this.getLoggedInUser}/>
            )}
          ></Route>

          <Route
            path="/AboutUsPage"
            component={routerProps => <AboutUsPage {...routerProps} />}
          ></Route>
          <Route
            path="/EventPage"
            component={routerProps => <EventPage {...routerProps} />}
          ></Route>
          <Route
            path="/EventsPage"
            component={routerProps => (
              <EventsPage {...routerProps} loggedInUser={loggedInUser} />
            )}
          ></Route>
          <Route
            path="/HrQuestionsPage"
            component={routerProps => (
              <HrQuestionsPage {...routerProps} loggedInUser={loggedInUser} />
            )}
          ></Route>
          <Route
            path="/JoinUsPage"
            component={routerProps => (
              <JoinUsPage {...routerProps} loggedInUser={loggedInUser} />
            )}
          ></Route>
          <Route
            exact
            path="/"
            component={routerProps => (
              <LandingPage
                {...routerProps}
                events={events}
                posts={posts}
                loggedInUser={loggedInUser}
              />
            )}
          ></Route>
          <Route
            path="/PostPage"
            component={routerProps => <PostPage {...routerProps} />}
          ></Route>
          <Route
            path="/TechnicalQuestionsPage"
            component={routerProps => (
              <TechnicalQuestionsPage
                {...routerProps}
                loggedInUser={loggedInUser}
              />
            )}
          ></Route>

          <Footer />
        </Router>
      </div>
    );
  }
}
