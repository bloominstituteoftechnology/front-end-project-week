import React, { Component } from 'react';

class DeleteModal extends Component {
    render() {
        return (
            <div className="section__delete">
                <p>Are you sure you want to delete this?</p>
                <div className="button__main">Delete</div>
                <div className="button__main">Save</div>
            </div>
        );
    }
}

export default DeleteModal;