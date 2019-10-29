import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    msg: null
  };

  componentDidMount() {
    if (this.props.loggedInUser.role === "owner") {
      this.getUsers();
      this.getPendingAdmins();
    } else if (this.props.loggedInUser.role === "hrAdmin") {
      this.getPendingHrQuestions();
      this.getHrPosts();
    } else {
      this.getPendingTechQuestions();
      this.getTechnicalPosts();
    }
  }

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
      .then(res =>
        this.setState({ users: res.data, msg: "User Added Successfully!" })
      );

    setTimeout(() => {
      this.setState({ msg: null });
    }, 5000);
  };

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
    axios
      .post("http://localhost:9000/delete-user-post", { _id, user_id })
      .then(res => this.setState({ posts: res.data }));
  };

  getHrPosts = () => {
    axios
      .get(`http://localhost:9000/get-hr-posts`)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  getTechnicalPosts = () => {
    axios
      .get(`http://localhost:9000/get-technical-posts`)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  getPendingHrQuestions() {
    axios
      .get("http://localhost:9000/get-hr-pendings")
      .then(res => this.setState({ pendingQuestions: res.data }));
  }

  getPendingTechQuestions() {
    axios
      .get("http://localhost:9000/get-tech-pendings")
      .then(res => this.setState({ pendingQuestions: res.data }));
  }

  answerPending = post => {
    axios.post("http://localhost:9000/answer-pending", post).then(res => {
      if (this.props.loggedInUser.role === "hrAdmin") {
        this.getPendingHrQuestions();
      } else {
        this.getPendingTechQuestions();
      }
    });
  };

  acceptPending = admin => {
    axios
      .post("http://localhost:9000/accept-pending", admin)
      .then(res => this.getPendingAdmins());
  };

  deletePending = _id => {
    axios.post("http://localhost:9000/delete-pending", { _id }).then(res => {
      if (this.props.loggedInUser.role === "owner") {
        this.getPendingAdmins();
      } else if (this.props.loggedInUser.role === "hrAdmin") {
        this.getPendingHrQuestions();
      } else {
        this.getPendingTechQuestions();
      }
    });
  };

  deleteUser = _id => {
    console.log(_id);
    axios
      .post("http://localhost:9000/delete-user", { _id })
      .then(res => this.setState({ users: res.data }));
  };

  render() {
    let { role } = this.props.loggedInUser;
    let { users, posts, pendingAdmins, pendingQuestions } = this.state;

    let pendingAdminsToShow = pendingAdmins.map(pending => (
      <PendingAdmin
        key={pending._id}
        {...pending}
        acceptPending={this.acceptPending}
        deletePending={this.deletePending}
      />
    ));

    let usersToShow = users.map(user => (
      <User key={user._id} {...user} deleteUser={this.deleteUser} />
    ));

    let postsToShow = posts.map(post => (
      <Post
        key={post._id}
        {...post}
        loggedInUser={this.props.loggedInUser}
        deletePost={this.deletePost}
        page="AdminDashboardPage"
      />
    ));

    let pendingQuestionsToShow = pendingQuestions.map(pending => (
      <PendingQuestion
        key={pending._id}
        {...pending}
        page="AdminDashboardPage"
        answerPending={this.answerPending}
        deletePending={this.deletePending}
      />
    ));

    return (
      <div className="container-fluid">
        <div className="row mt-3 mb-3">
          <h3 className="mt-3 mb-3 col-md-2">Admin Dashboard</h3>
          <div className="col-md-9">
            {this.state.msg === null ? null : 
            <div
              className="alert alert-success"
              style={{ textAlign: "center" }}
              role="alert"
            >
              {this.state.msg}
            </div>
            }
          </div>
          {role === "owner" ? (
            <button className="btn btn-success font-weight-bold">
              <Link
                to="/addEventPage"
                className="col-md-1"
                style={{ textDecoration: "none", color: "white", fontSize: 20 }}
              >
                Add Event
              </Link>
            </button>
          ) : (
            <button className="btn btn-success font-weight-bold">
              <Link
                to="/addPostPage"
                className="col-md-1"
                style={{ textDecoration: "none", color: "white", fontSize: 20 }}
              >
                Add Post
              </Link>
            </button>
          )}
        </div>
        {role === "owner" ? (
          <div className="row bg-light">
            <div className="col-md-2 mt-3">
              <h3 className="font-weight-bold">Add User</h3>
              <form onSubmit={this.addAdmin}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter full name..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="emailHelp"
                    placeholder="Enter password..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    aria-describedby="emailHelp"
                    placeholder="Enter mobile number..."
                  />
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="Male"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="field">Field</label>
                  <select
                    defaultValue="Default"
                    name="field"
                    className="custom-select custom-select-sm"
                  >
                    <option disabled>Select Field</option>
                    <option value="HR"> Human Resources </option>
                    <option value="IT">Information Technology</option>
                  </select>
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="role">Role</label>
                  <select
                    defaultValue="Default"
                    name="role"
                    className="custom-select custom-select-sm"
                  >
                    <option value="owner">Owner</option>
                    <option value="hrAdmin">Hr Admin</option>
                    <option value="techAdmin">TECH Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-8 mt-3">
              <h3 className="font-weight-bold">Users</h3>

              <table className="table table-hover mt-4 bg-white">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Field</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{usersToShow}</tbody>
              </table>
            </div>
            <div className="col-md-2 mt-3">
              <h3 className="font-weight-bold">Pending Requests</h3>
              {pendingAdminsToShow}
            </div>
          </div>
        ) : role === "hrAdmin" ? (
          <div className="row bg-light">
            <div className="col-md-8 mt-3">
              <h3 className="font-weight-bold">Posts</h3>
              {postsToShow}
            </div>

            <div className="col-md-4 mt-3">
              <h3 className="font-weight-bold">Pending Questions</h3>
              {pendingQuestionsToShow}
            </div>
          </div>
        ) : (
          <div className="row bg-light">
            <div className="col-md-8 mt-3">
              <h3 className="font-weight-bold">Posts</h3>
              {postsToShow}
            </div>

            <div className="col-md-4 mt-3">
              <h3 className="font-weight-bold">Pending Questions</h3>
              {pendingQuestionsToShow}
            </div>
          </div>
        )}
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
