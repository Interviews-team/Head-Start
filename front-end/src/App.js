import React, { Component } from "react";
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AhmadGhzawi from './components/AhmadGhzawi'
import AhmadNsour from './components/AhmadNsour'
import Mohammad from './components/Mohammad'
import Hani from './components/Hani'

import AddEvent from "./routes/adding/AddEvent"
import AddField from "./routes/adding/AddField"
import AddNewAdmin from "./routes/adding/AddNewAdmin"
import AddQuestion from "./routes/adding/AddQuestion"
import AdminDashboard from "./routes/admin/AdminDashboard"
import PendingAdmin from "./routes/admin/PendingAdmin"
import PendingQuestion from "./routes/admin/PendingQuestion"
import AskQuestion from "./routes/user/AskQuestion"
import Login from "./routes/user/Login"
import Register from "./routes/user/Register"
import UserProfile from "./routes/user/UserProfile"
import UserDashboard from "./routes/user/UserDashboard"
import AboutUs from "./routes/website/AboutUs"
import Event from "./routes/website/Event"
import HrQuestion from "./routes/website/HrQuestion"
import JoinUs from "./routes/website/JoinUs"
import Landing from "./routes/website/Landing"
import TechnicalQuestion from "./routes/website/TechnicalQuestion"

class App extends Component {
  state = {
    users:[]
  }

  componentDidMount(){
    this.getUsers()
  }

  getUsers(){
    axios
      .get('http://localhost:9000/get-users')
      .then( response => this.setState({ users: response.data }))
  }

  render() {
    console.log(this.state);
    return (
      <>
        <h1>HELLO</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/AddEvent" component={AddEvent} />
            <Route exact path="/AddField" component={AddField} />
            <Route exact path="/AddNewAdmin" component={AddNewAdmin} />
            <Route exact path="/AddQuestion" component={AddQuestion} />
            <Route exact path="/AdminDashboard" component={AdminDashboard} />
            <Route exact path="/PendingAdmin" component={PendingAdmin} />
            <Route exact path="/PendingQuestion" component={PendingQuestion} />
            <Route exact path="/AskQuestion" component={AskQuestion} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/UserDashboard" component={UserDashboard} />
            <Route exact path="/UserProfile" component={UserProfile} />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/Event" component={Event} />
            <Route exact path="/HrQuestion" component={HrQuestion} />
            <Route exact path="/JoinUs" component={JoinUs} />
            <Route exact path="/Landing" component={Landing} />
            <Route exact path="/TechnicalQuestion" component={TechnicalQuestion} />
          </Switch>
        </BrowserRouter>
        <AhmadNsour />
        <AhmadGhzawi />
        <Mohammad />
        <Hani />
      </>
    );
  }
}

export default App;
