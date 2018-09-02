import React, { Component } from "react";
import "./index.css";

class DeleteNote extends Component {
  render() {
    let toggle = this.props.toggle;
    return (
      <div className={toggle ? "delete_wrapper" : "hidden"}>
        <div>
          <h4>Are you sure you want to delete this?</h4>
        </div>
        <div classname="modal_wrapper">
          <div className="button_red" onClick={this.props.showModal}>DELETE</div>
          <div className="button" onClick={this.props.showModal}>NO</div>
        </div>
      </div>
    );
  }
}

export default DeleteNote;
