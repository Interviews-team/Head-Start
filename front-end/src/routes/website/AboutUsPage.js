import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import AboutUsImage from "../../images/new.png";

export default class AboutUsPage extends Component {
  render() {
    const AboutUsPage = {
      backgroundImage: `url(${AboutUsImage})`
    };

    return (
      <div className="p-2 " style={AboutUsPage}>
        <div className="container mt-5 mb-5 w-75 ">
          <div className="row py-5 px-4 bg-light ">
            <div className="col-md-5 m-2 bg-white py-5 px-4">
              <h3> About Head Start </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda eligendi similique voluptatem ea laborum suscipit
                dolor eum vero enim atque perferendis, maxime vel quaerat, ab
                repellendus doloremque tempore ad a.
              </p>
            </div>
            <div className="col-md-1 m-2 mr-4 py-5 px-4"></div>

            <div className="col-md-5 m-2 bg-white  py-5 px-4">
              <h3> Our Vision </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda eligendi similique voluptatem ea laborum suscipit
                dolor eum vero enim atque perferendis, maxime vel quaerat, ab
                repellendus doloremque tempore ad a.
              </p>
            </div>
            <div className="col-md-5 m-2 bg-white  py-5 px-4">
              <h3> Our Goal </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda eligendi similique voluptatem ea laborum suscipit
                dolor eum vero enim atque perferendis, maxime vel quaerat, ab
                repellendus doloremque tempore ad a.
              </p>
            </div>
            <div className="col-md-1 m-2 mr-4 py-5 px-4"></div>

            <div className="col-md-5 m-2 bg-white py-5 px-4">
              <h3> Our Team </h3>
              <ul>
                <li>Ahmad Ghzawi</li>
                <li>Ahmad Nsour</li>
                <li>Mohammad Alaa Aldein</li>
                <li>Hani Abu Alinain</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
