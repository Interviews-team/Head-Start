import React, { Component } from "react";
// import image from "../../Images/event.jpg"

export default class AddEventPage extends Component {
  state = {
    title: "",
    img_path: "nullForTest",
    url: "",
    description: ""
  };
  addNewEvent = event => {
    let newEvent = {
      title: event.target["title"].value,
      img_path: event.target["img_path"].value,
      url: event.target["url"].value,
      description: event.target["description"].value
    };
    this.props.addEvent(newEvent);
    this.setState({ newEvent });
    this.props.history.push("/EventsPage");
  };

  render() {
    return (
      <div className="container">
        <h1>Add Event</h1>
        <img alt=""></img>
        <form onSubmit={this.addNewEvent}>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="validatedCustomFile"
              name="img_path"
              accept="image/*"
              required
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
