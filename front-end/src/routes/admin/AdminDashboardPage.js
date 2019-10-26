import React, { Component } from "react";
import { Link } from "react-router-dom";
import Event from "../../components/Event";
import PendingAdmin from "../../components/PendingAdmin";
import PendingQuestion from "../../components/PendingQuestion";
import User from "../../components/User";
import Post from "../../components/Post";
import axios from "axios";

export default class AdminDashboardPage extends Component {
  state = {
    users: [],
    fields: [],
    posts: [],
    comments: [],
    pendingAdmins: [],
    pendingQuestions: [],
    events: []
  };

  componentDidMount() {
    this.getUsers();
    this.getEvents();
    this.getPendingAdmins();
  }

  addField = event => {
    event.preventDefault();
    let field = event.target["field"].value;
    event.target["field"].value = "";

    axios
      .post("http://localhost:9000/add-field", { field })
      .then(res => this.setState({ fields: res.data }));
  };

  addAdmin = event => {
    event.preventDefault();
    let name = event.target["name"].value;
    let email = event.target["email"].value;
    let password = event.target["password"].value;
    let mobileNumber = event.target["mobileNumber"].value;
    let field = event.target["field"].value;
    let gender = event.target["gender"].value;
    let role = event.target["role"].value;

    event.target["name"].value = "";
    event.target["email"].value = "";
    event.target["password"].value = "";
    event.target["mobileNumber"].value = "";
    event.target["field"].value = "";
    event.target["gender"].value = "";

    axios
      .post("http://localhost:9000/add-admin", {
        name,
        email,
        password,
        mobileNumber,
        field,
        gender,
        role
      })
      .then(res => this.setState({ users: res.data }));
  };

  getEvents() {
    axios.get("http://localhost:9000/get-events").then(response => {
      this.setState({ events: response.data });
    });
  }

  getUsers() {
    axios.get("http://localhost:9000/get-users").then(response => {
      this.setState({ users: response.data });
    });
  }

  getPendingAdmins() {
    axios.get("http://localhost:9000/get-pending-admins").then(response => {
      this.setState({ pendingAdmins: response.data });
    });
  }

  deletePost = _id => {
    let user_id = this.props.loggedInUser._id;
    axios.post('http://localhost:9000/delete-user-post', {_id, user_id})
    .then (res => this.setState({posts: res.data}))
  };

  render() {
    let { role } = this.props.loggedInUser;
    let {
      users,
      fields,
      posts,
      comments,
      pendingAdmins,
      pendingQuestions,
      events
    } = this.state;

    let eventsToShow = events.map(event => (
      <Event
        key={event._id}
        title={event.title}
        img={event.img_path}
        description={event.description}
        url={event.url}
        page="AdminDashboardPage"
      />
    ));

    let pendingAdminsToShow = pendingAdmins.map(pending => (
      <PendingAdmin key={pending._id} {...pending} />
    ));

    let usersToShow = users.map(user => <User key={user._id} {...user} />);

    let postsToShow = posts.map(post => (
      <Post key={post._id} {...post} deletePost={this.deletePost} page="AdminDashboardPage" />
    ));

    let pendingQuestionsToShow = pendingQuestions.map(pending => (
      <PendingQuestion key={pending._id} {...pending} />
    ));

    return (
      <div>
        {role === "owner" ? (
          <div>
            <form onSubmit={this.addField}>
              <input type="text" name="field" placeholder="add new field" />
              <button type="submit" className="btn btn-primary">
                add field
              </button>
            </form>
            <br />
            <br />
            <br />
            <Link to="addEventPage">add event</Link>
            <br />
            <br />
            <br />
            <form onSubmit={this.addAdmin}>
              <input type="text" name="name" placeholder="name..." />
              <input type="email" name="email" placeholder="email..." />
              <input type="password" name="password" placeholder="password" />
              <input
                type="text"
                name="mobileNumber"
                placeholder="mobile number..."
              />
              <input type="text" name="field" placeholder="field..." />
              <div className="form-group">
                <label>
                  <input
                    name="gender"
                    type="radio"
                    value="Male"
                    defaultChecked
                  />
                  Male
                </label>
                <label>
                  <input name="gender" type="radio" value="Female" />
                  Female
                </label>
              </div>
              <select name="role">
                <option value="owner">Owner</option>
                <option value="hrAdmin">Hr Admin</option>
                <option value="techAdmin">TECH Admin</option>
                <option value="user">User</option>
              </select>
              <button type="submit" className="btn btn-primary">
                add admin
              </button>
            </form>
            <br />
            <br />
            <br />
            {eventsToShow}
            {pendingAdminsToShow}
            {usersToShow}
          </div>
        ) : (
          <>
            <Link to="addPostPage">add post</Link>
            <br />
            <br />
            <h3>POSTS</h3>
            {postsToShow}
            <br />
            <br />
            <h3>Pending Q</h3>
            {pendingQuestionsToShow}
          </>


        )}
      </div>
    );
  }
}
