import React, { Component } from "react";
import axios from 'axios'
import AhmadGhzawi from './components/AhmadGhzawi'
import AhmadNsour from './components/AhmadNsour'
import Mohammad from './components/Mohammad'
import Hani from './components/Hani'

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
        <AhmadNsour />
        <AhmadGhzawi />
        <Mohammad />
        <Hani />
      </>
    );
  }
}

export default App;
