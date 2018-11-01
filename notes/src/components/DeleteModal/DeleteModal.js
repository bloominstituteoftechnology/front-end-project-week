import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../../actions';

const DeleteModal = props => {
    return (
        <div className="modal">
            <p>
                Are you sure you want to delete this?
            </p>
            <div className="deleteButton">
                Delete
            </div>
            <div className="noButton">
                No
            </div>
        </div>
    )
}

export default connect(null,{

})(DeleteModal);