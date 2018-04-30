import React from "react";
import ReactMarkdown from "react-markdown";
import "react-responsive-modal/lib/react-responsive-modal.css";
import Modal from "react-responsive-modal/lib/css";

class ViewCard extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="right-div">
        <div className="link-text-div">
          <span className="link-text" onClick={() => this.props.changeToEdit()}>
            <u>edit</u>
          </span>
          <span className="link-text" onClick={this.onOpenModal}>
            <u>delete</u>
          </span>
        </div>
        <div className="view-card">
          <h3 className="notes-h3 view-h3">{this.props.note.title}</h3>
          <ReactMarkdown
            source={this.props.note.text}
            className="notes-text-full"
            escapeHtml={false}
          />
        </div>
        <Modal
          modal="modal"
          open={open}
          onClose={this.onCloseModal}
          little
          showCloseIcon={false}
        >
          <div className="modal-content-div">
            <span>
              <b>Are you sure you want to delete this?</b>
            </span>
            <div className="modal-button-div">
              <button
                className="button delete-notes-button"
                onClick={e => this.props.removeNote(this.props.note.id)}
              >
                Delete
              </button>
              <button className="button" onClick={this.onCloseModal}>
                No
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ViewCard;
