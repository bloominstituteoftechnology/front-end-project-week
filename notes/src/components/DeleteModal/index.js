import React from "react";

import "./deleteModal.css";

class DeleteModal extends React.Component {
  constructor() {
    super();

    this.state = {
      deleting: false
    };
  }

  delete = () => {
    this.setState({ deleting: true });
    return this.props.delete(this.props.id);
  };

  render() {
    return (
      <section className="delete-modal">
        <section className="modal">
          <p>Are you sure you want to delete this?</p>
          <section className="buttons-modal">
            <button onClick={this.delete} className="delete-btn">
              Delete
            </button>
            <button onClick={this.props.close} className="no-btn">
              No
            </button>
          </section>
          {this.state.deleting ? (
            <p className="loading">Deleting Note...</p>
          ) : null}
        </section>
      </section>
    );
  }
}

export default DeleteModal;
