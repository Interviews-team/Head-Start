import React, { Component } from "react";
import axios from "axios";
import { storage } from "../../firebase";

export default class AddEventPage extends Component {
  state = {
    image: null,
    url: "",
    progress: 0
  };

  addEvent = e => {
    e.preventDefault();
    console.log(this.state.url);
    let event = {
      title: e.target["title"].value,
      img_path: this.state.url,
      url: e.target["url"].value,
      description: e.target["description"].value
    };

    axios
      .post("http://localhost:9000/add-event", event)
      .catch(err => console.log(err));

    this.props.history.push("/AdminDashboardPage");
  };

  getImage = event => {
    const image = event.target.files[0];
    this.setState(() => ({ image }));
  };

  fileUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
  };

  render() {
    const cardWidth = {
      width: "30%",
      position: "absolute",
      marginLeft: "150px"
    };
    return (
      <div className="container-fluied ">
        <div className="row ">
          <div className="w-100">
            {/* <img src={addEventImage} className="w-100" style={img}/> */}
            <div className=" w-50 m-auto">
              <div className="container">
                <div class="card bg-light mt-4 " style={cardWidth}>
                  <div class="card-header text-center centered">
                    <h1>Add Event</h1>
                  </div>
                  <div class="card-body">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="validatedCustomFile"
                        name="img_path"
                        onChange={this.getImage}
                        required
                      />
                      <progress
                        className="mt-2 w-50 h-75"
                        value={this.state.progress}
                        max="100"
                      />
                      <button
                        className="btn btn-danger ml-5 mt-2 w-25"
                        onClick={this.fileUpload}
                      >
                        Upload
                      </button>
                      <br/>
                      <br/>
                      <div>
                        <img src={this.state.url} alt="Img"></img>
                      </div>
                      <label
                        className="custom-file-label"
                        htmlFor="validatedCustomFile"
                      >
                        Choose file...
                      </label>
                      <div className="invalid-feedback">
                        Example invalid custom file feedback
                      </div>
                    </div>
                    <form onSubmit={this.addNewEvent}>
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
                        <label htmlFor="exampleInputPassword1">Event URL</label>
                        <input
                          type="text"
                          className="form-control"
                          name="url"
                          placeholder="URL"
                        />
                      </div>
                      <div class="md-form amber-textarea active-amber-textarea">
                        <label for="form22">Event Description here:</label>

                        <textarea
                          id="form22"
                          name="description"
                          class="md-textarea form-control"
                          rows="4"
                        ></textarea>
                      </div>
                      <br />
                      <button type="submit" className="btn btn-secondary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// state = {
//   image: null,
//   url: "",
//   progress: 0
// };
// consoleFun = event => {
//   const image = event.target.files[0];
//   this.setState(() => ({ image }));
// };
// fileUpload = () => {
//   const { image } = this.state;
//   // console.log(storage.ref(images/${image.name}).put(image));
//   const uploadTask = storage.ref(images/${image.name}).put(image);
//   // console.log(uploadTask.on());
//   uploadTask.on(
//     "state_changed",
//     snapshot => {
//       const progress = Math.round(
//         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//       );
//       // console.log(progress)
//       this.setState({ progress });
//     },
//     error => {
//       console.log(error);
//     },
//     () => {
//       storage
//         .ref("images")
//         .child(image.name)
//         .getDownloadURL()
//         // .getDownloadURL()
//         .then(url => {
//           console.log(url);
//           this.setState({ url });
//         });
//       // console.log(storage);
//     }
//   );
// };
// render() {
//   return (
//     <div>
//       <progress className="mt-2" value={this.state.progress} max="100" />
//       <br />
//       <input className="mt-2" type="file" onChange={this.consoleFun} />
//       <br />
//       <button className="btn btn-danger mt-2" onClick={this.fileUpload}>
//         Upload
//       </button>
//       <br />
//       <br />
//       <img src={this.state.url} alt="Img"></img>
//     </div>
//   );
// }
// }
