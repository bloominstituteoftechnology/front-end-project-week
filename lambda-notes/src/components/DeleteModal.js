import React from "react";

class DeleteModal extends React.Component {
  backToList() {
    this.props.history.push("/");
  }

  //makes sure user is taken back to full list view when the note they're viewing is deleted
  deleteAndGoBack = event => {
    event.preventDefault();
    this.props.deleteNote(
      event,
      parseInt(this.props.match.params.id),
      this.props.tags
    );
    this.backToList();
  };

  render() {
    return (
      <div
        className={this.props.show ? "modal show-modal" : "modal hide-modal"}
      >
        <section className="modal-content">
          <p>Are you sure you want to delete this?</p>
          <div className="button-wrapper">
            <button
              className="modal-delete-button"
              onClick={this.deleteAndGoBack}
            >
              Delete
            </button>
            <button
              className="modal-cancel-button"
              onClick={this.props.toggleModal}
            >
              No
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default DeleteModal;
