import React, { Component } from 'react';
import './ViewNote.css';
import { Link } from 'react-router-dom';

// import NotePreview from '../NotePreview/NotePreview';

class ViewNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: props.initialData.notes
        }
    }    

    // //Function to open modal
    // openModal() {
    



    // }

    // // let modalButtonDelete = document.querySelector('modal-button-delete');
    // // let modalButtonNo = document.querySelector('modal-button-no');


    openModal() {
        let modal = document.querySelector('delete');
        let modalButtonDelete = document.querySelector('modal-button-delete');
        let modalButtonNo = document.querySelector('modal-button-no');    

        modal.style.display = 'block';
    }


    render() {
        console.log(document.querySelector('.delete-link'));
        return (
            <div className="view-note">
                <div className="controls">
                    <Link className="edit-link" to={`/edit/${this.props.match.params.id}`}>edit</Link>
                    <div 
                        className="delete-link" 
                        onClick={this.openModal()}
                    >delete</div>

                    <div className={"delete-modal display-none"} id="delete-modal" >
                        <div className="modal-content">
                            <p className="modal-warning-message">
                                Are you sure you want to delete this?
                            </p>
                            <div className="modal-button-group">
                                <div 
                                    className="modal-button-delete"
                                    // onClick={() => props.handleDelete(props.todo.id)}
                                >Delete</div>
                                <div className="modal-button-no">No</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="displayed-note-for-reading">
                    <div className="displayed-note-for-reading-title">{this.state.notes[this.props.match.params.id].title}</div>
                    <div className="displayed-note-for-reading-content">{this.state.notes[this.props.match.params.id].content}</div>
                </div>
            </div>
        )
    }
}

{/* <Link to={`/view/${noteToMap.id}`} key={noteToMap.id}>
<NotePreview 
title={noteToMap.title}
content={noteToMap.content}
key={noteToMap.id}
/>
</Link> */}

export default ViewNote;