import React, { Component } from 'react';
import DeleteNote from '../DeleteNote/DeleteNote';
import { Link } from 'react-router-dom';

const NoteView = props => {
    return (
        <div className="noteView-container">
            <div>
                <h4>
                    
                </h4>
                <div className="noteView-Content">
                    <Link to="#" className="edit_link">edit</Link>
                    <a href="#" className="edit_link" onClick={props.showModal}>delete</a>
                </div>
            </div>
            <DeleteNote toggle={props.toggle} updateParent={props.showModal} />
        </div>
    );
}

export default NoteView;