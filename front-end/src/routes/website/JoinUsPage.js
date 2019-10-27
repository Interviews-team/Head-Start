import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class JoinUsPage extends Component {
  
  submitApplication = () => {
    axios.post('http://localhost:9000/application', this.props.loggedInUser)
    this.props.history.goBack()
  }

  render() {
    if(this.props.loggedInUser.role === null) {return <Redirect to='/LoginPage' /> }
    return (
      <div>
        <h1> Join Us </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ab
          nesciunt molestiae neque voluptatibus, porro impedit ducimus
          consequuntur excepturi nihil laboriosam ullam adipisci magni vero
          deleniti, recusandae officiis odit reiciendis.
        </p>
        <button className='btn btn-primary' onClick={this.submitApplication}>submit application</button>
      </div>
    );
  }
}
