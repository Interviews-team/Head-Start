import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

//start importing components
import AddField from "./components/AddField";
import AddNewAdmin from "./components/AddNewAdmin";
import Comment from "./components/Comment";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PendingAdmin from "./components/PendingAdmin";
import PendingQuestion from "./components/PendingQuestion";
import Post from "./components/Post";
//end importing components

//start importing routes
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
//end importing routes

class App extends Component {
  state = {
    users: ["Ahmad"]
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get("http://localhost:9000/get-users")
      .then(response => this.setState({ users: response.data }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Router>
          <Header />

          <Link to="/">Home</Link>
          <Route
            exact
            path="/"
            render={props => (
              <>
                <br /> <Link to="/EventPage">Events</Link>
                <Event />
                <Post />
              </>
            )}
          ></Route>{" "}
          <Route exact path="/AddEventPage" component={AddEventPage} />
          <Route path="/AddQuestionPage" component={AddQuestionPage} />

          <Route path="/AdminDashboardPage" component={AdminDashboardPage} />

          <Route path="/AskQuestionPage" component={AskQuestionPage} />
          <Route path="/LoginPage" component={LoginPage} />
          <Route path="/RegisterPage" component={RegisterPage} />
          <Route path="/UserDashboardPage" component={UserDashboardPage} />
          <Route path="/UserProfilePage" component={UserProfilePage} />

          <Route path="/AboutUsPage" component={AboutUsPage} />
          <Route path="/EventPage" component={EventPage} />
          <Route path="/EventsPage" component={EventsPage} />
          <Route path="/HrQuestionsPage" component={HrQuestionsPage} />
          <Route path="/JoinUsPage" component={JoinUsPage} />
          <Route path="/PostPage" component={PostPage} />
          <Route path="/TechnicalQuestionsPage" component={TechnicalQuestionsPage} />

          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
