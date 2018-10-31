import React from 'react';

class DeleteModal extends React.Component {
render() {
    return (
        <div className={this.props.show? "modal show-modal" : "modal hide-modal"}>
        <section className="modal-content">
        <p>Are you sure you want to delete this?</p>
        <div className="button-wrapper">
        <button className="modal-delete-button">Delete</button>
        <button className="modal-cancel-button" onClick={this.props.toggleModal}>No</button>
        </div>
        </section>
        </div>
    )
}
}

export default DeleteModal;