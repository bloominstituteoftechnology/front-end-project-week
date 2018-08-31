import React, { Component } from 'react';
import DeleteNote from '../DeleteNote/DeleteNote';

const NoteView = props => {
    return (
        <div className="noteView-container">
            <div>
                <h4>
                    {}
                </h4>
                <div className="noteView-Content">
                    <a href="#" className="edit_link">edit</a>
                    <a href="#" className="edit_link" onClick={props.showModal}>delete</a>
                </div>
            </div>
            <DeleteNote toggle={props.toggle} />
        </div>
    );
}

export default NoteView;