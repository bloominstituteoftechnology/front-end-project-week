import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { toggleModal, toggleModalBack, deleteNote } from '../actions'
import { connect } from 'react-redux'
import '../styles/NoteView.css'

const NoteView = props => {
    const notes = props.notes.filter(note => { return note.id.toString() === props.match.params.id.toString() })
    const individualNote = notes[0]
    return (
        <div>
            {props.deleting ?
                <div className="modal-body">
                    <h2 className="modal-text"> Are you sure you want to delete this? </h2>
                    <div className="modalButtons">
                        <NavLink to="/"><button className="deleteButton" onClick={() => props.deleteNote(props.match.params.id)}>Delete</button></NavLink><button className="cancelButton" onClick={props.toggleModalBack}>Cancel</button>
                    </div>
                </div> : null}
            <div className="main-text" style={{ background: props.deleting ? 'gray' : '#F3F3F3', opacity: props.deleting ? '.4' : '1' }}>
                <div className="noteViewButtons">
                    <NavLink to={`/edit/${props.match.params.id.toString()}`}>edit</NavLink>
                    <span onClick={props.toggleModal} className="delete"> delete </span></div>
                <div className="row yourNotes" onClick={props.toggleModalBack}>

                    <h3 style={{ textAlign: "left" }} className="noteName"> {individualNote.title.title} </h3>
                </div>
                <div onClick={props.toggleModalBack}>
                    <div className="note">
                        <p>{individualNote.title.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        deleting: state.notes.deleting,
        notes: state.notes.notes
    }
}

export default withRouter(connect(mapStateToProps, { toggleModal, toggleModalBack, deleteNote })(NoteView))