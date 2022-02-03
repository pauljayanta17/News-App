import React, { Component } from "react";

export default class NewsItems extends Component {
  constructor() {
    super();
    this.state = {
      btnColor: "dark",
    };
  }

  onMouseOverHandle=()=>{
    this.setState({
      btnColor:"success"
    })
  }

  onMouseOutHandle=()=>{
    this.setState({
      btnColor:"dark"
    })
  }
  render() {
    return (
      <div className="card mx-2 my-2" id="newsitems">
        <img
          src={this.props.imageUrl}
          className="card-img-top rounded"
          style={{height: "75%"}}
          alt="Loading"
        />
        <div className="card-body">
        <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">
            {this.props.content && this.props.content}
          </p>
          <div className="d-flex justify-content-center align-self-end">
            <a
              href={this.props.url}
              target="/"
              className={`btn btn-sm btn-${this.state.btnColor}`}
              onMouseOver={this.onMouseOverHandle}
              onMouseOut={this.onMouseOutHandle}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
