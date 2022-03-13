import React from "react";

function Spinner () {
    return (
      <div className="justify-content-center" style={{ marginTop: "12rem" }}>
        <div  className="spinner-border text-danger" role="status"></div>
        <h5 className="text-white">Loading</h5>
      </div>
    );

}

export default Spinner;
