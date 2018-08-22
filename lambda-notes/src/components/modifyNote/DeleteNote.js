import React, { Component } from "react";

class DeleteNote extends Component {
  // constructor() {
  //   super();
  //   this.deleteHandler = this.props.
  // }
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: "0 auto",
      padding: 30
    };
    // console.log("DELETE NOTE BUTTON", this.props);
    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}

          <div className="footer">
            <button
              // onClick={() =>
              //   this.props.deleteNoteHandler(this.props.deleteNumber) &
              //   this.props.onApprove()
              // }
              onClick={() =>
                this.props.deleteNoteHandler(this.props.deleteNumber) &
                this.props.onApprove()
              }
            >
              Deleteinside
            </button>
            <button onClick={this.props.onClose}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteNote;
