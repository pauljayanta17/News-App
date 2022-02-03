import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="justify-content-center" style={{ marginTop: "12rem" }}>
        <div  className="spinner-border text-info" role="status"></div>
        <h5 className="text-white">Loading</h5>
      </div>
    );
  }
}
