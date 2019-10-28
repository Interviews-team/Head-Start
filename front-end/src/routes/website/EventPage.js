import React, { Component } from "react";

export default class EventPage extends Component {
  render() {
    const cardWidth = {
      width: "30%",
      position: "absolute",
      marginLeft: "320px"
    };

    const cardColor = {
      boxShadow:
        "0 1px 1px #000000,0 10px 0 -5px #eee,0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px #eee,0 20px 1px -9px rgba(0,0,0,0.15)",
      backgroundColor: "white",
      border: "1px solid #efefef",
      padding: "30px",
      borderBottom: "1px solid #cecece"
    };
    return (
      <div>
        <body>
          <div className="container mt-5 ">
            <div className="row mt-5">
              <div className="w-100 mt-5">
                <main className="col-md-4" style={cardWidth}>
                  <div class=" card bg-light" style={cardColor}>
                    <div class="card-header text-center p-4">
                      <h1 className="text-dark"></h1>
                    </div>
                    <div class="card-body text-dark p-4 ">
                      <form>
                        <div className="form-group">
                          <h2>
                            Event image:{" "}
                            <img
                              className="img-thumbnail"
                              src={this.props.location.state.img}
                            ></img>{" "}
                          </h2>
                        </div>
                        <div className="form-group">
                          <h2>
                            Event title: {this.props.location.state.title}
                          </h2>
                        </div>
                        <div className="form-group">
                          <h2>Event url: {this.props.location.state.url} </h2>
                        </div>
                      </form>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
