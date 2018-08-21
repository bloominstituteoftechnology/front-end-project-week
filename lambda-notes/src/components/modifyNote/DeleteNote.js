import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export class DeleteNote extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showModal: false
//     };
//     // got to bind here to make 'this' work in callback
//     this.handleOpenModal = this.handleOpenModal.bind(this);
//     this.handleCloseModal = this.handleCloseModal.bind(this);
//   }

//   handleOpenModal() {
//     this.setState({ showModal: true });
//   }

//   handleCloseModal() {
//     this.setState({ showModal: false });
//   }

//   render() {
//     return (
//       <div className="deleteNoteDiv">
//         <button onClick={this.handleOpenModal}>Delete</button>
//         <ReactModal
//           isOpen={this.state.showModal}
//           contentLabel="Minimal Modal Example"
//         >
//           <button onClick={this.handleCloseModal}>Close Modal</button>
//         </ReactModal>
//       </div>
//     );
//   }
// }
class DeleteNote extends Component {
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
    console.log("DELTE NOTE BUTTON", this.props);
    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}

          <div className="footer">
            <button
              onClick={() =>
                this.props.onApprove() & this.props.deleteNoteHandler()
              }
            >
              Delete
            </button>
            <button onClick={this.props.onClose}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteNote;
