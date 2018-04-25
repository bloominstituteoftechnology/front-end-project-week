import React, { Component } from "react";

class ViewNote extends Component {
  render() {
    console.log(this.location);
    return (
      <div className="add-note">
        <h3>Note Name: </h3>
      </div>
    );
  }
}

export default ViewNote;
