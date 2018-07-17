import React, { Component } from 'react';
import './ViewNote.css';

import NotePreview from '../NotePreview/NotePreview';

class ViewNote extends Component {

    constructor() {
        super();
        this.state = {
            notes: []
        }
    }    

    // //Function to open modal
    // openModal() {
    //     let modal = document.querySelector('delete-link');
    
    //     let modalButtonDelete = document.querySelector('modal-button-delete');
    //     let modalButtonNo = document.querySelector('modal-button-no');    

    //     modal.addEventListener('click', openModal);
    //     modal.style.display = 'block';
    // }

    // // let modalButtonDelete = document.querySelector('modal-button-delete');
    // // let modalButtonNo = document.querySelector('modal-button-no');


    render() {
        return (
            <div className="view-note">
                <div className="controls">
                    <a href="/edit">edit</a>
                    <div className="delete-link">delete</div>

                    <div className="delete-modal">
                        <div className="modal-content">
                            <p className="modal-warning-message">
                                Are you sure you want to delete this?
                            </p>
                            <div className="modal-button-group">
                                <div className="modal-button-delete">Delete</div>
                                <div className="modal-button-no">No</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ViewNote;