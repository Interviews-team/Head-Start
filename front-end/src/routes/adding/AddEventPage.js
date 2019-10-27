import React, { Component } from "react";
import axios from "axios";
import {storage} from '../../firebase'

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
    return (
      <div className="container">
        <h1>Add Event</h1>
        <div>
          <progress className="mt-2" value={this.state.progress} max="100" />
          <br />
          <input className="mt-2" type="file" name="img_path" onChange={this.getImage}/>
          <br />
          <button className="btn btn-danger mt-2" onClick={this.fileUpload}>
            Upload
          </button>
          <br />
          <br />
          <img src={this.state.url} alt="Img"></img>
        </div>
        <form onSubmit={this.addEvent}>
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
