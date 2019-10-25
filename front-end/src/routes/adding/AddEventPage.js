import React, { Component } from "react";
import axios from "axios";

export default class AddEventPage extends Component {
  addEvent = e => {
    e.preventDefault();

    let event = {
      title: e.target["title"].value,
      img_path: e.target["img_path"].files[0].name,
      url: e.target["url"].value,
      description: e.target["description"].value
    };

    axios
      .post("http://localhost:9000/add-event", event)
      .catch(err => console.log(err));

    this.props.history.push("/AdminDashboardPage");
  };

  // consoleLOg = event => {
  //   console.log(event.target.files[0].name);
  // };

  render() {
    return (
      <div className="container">
        <h1>Add Event</h1>
        <img alt=""></img>
        <form onSubmit={this.addEvent}>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="validatedCustomFile"
              name="img_path"
              accept="image/*"
              required
              // onChange={this.consoleLOg}
            />
            <label className="custom-file-label" htmlFor="validatedCustomFile">
              Choose file...
            </label>
            <div className="invalid-feedback">
              Example invalid custom file feedback
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              aria-describedby=""
              placeholder="Add Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"> Event URL</label>
            <input
              type="text"
              className="form-control"
              name="url"
              placeholder="URL"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1"> Description </label>
            <br />
            <textarea name="description"></textarea>
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
