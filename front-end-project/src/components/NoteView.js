import React from 'react';
import { NavLink } from 'react-router-dom';
import { toggleModal, toggleModalBack, deleteNote } from '../actions'
import { connect } from 'react-redux'
import '../styles/NoteView.css'

const NoteView = props => {
const individualNote = props.notes.filter(note => { return note.id.toString() === props.match.params.id.toString()})
console.log(individualNote[0].title)
    return (
        <div>
            {props.deleting ?
                <div className="modal-body">
                    <h2 className="modal-text"> Are you sure you want to delete this? </h2>
                    <div className="modalButtons">
                        {console.log('ID?', props.match.params.id)}
                        <NavLink to="/"><button className="deleteButton" onClick={()=>props.deleteNote(props.match.params.id)}>Delete</button></NavLink><button className="cancelButton" onClick={props.toggleModalBack}>Cancel</button>
                    </div>
                </div> : null}
            <div className="main-text" style={{background: props.deleting ? 'gray' : '#F3F3F3', opacity: props.deleting? '.4' : '1'}}>
                <div className="noteViewButtons">
                    <NavLink to="/edit">edit</NavLink>
                    <span onClick={props.toggleModal} className="delete"> delete </span></div>
                <div className="row yourNotes" onClick={props.toggleModalBack}>
                    
                    <h3 style={{ textAlign: "left" }} className="noteName"> {individualNote[0].title.title} </h3>
                </div>
                <div onClick={props.toggleModalBack}>
                    <div className="note">
                        <p>{individualNote[0].title.content}</p>
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

export default connect(mapStateToProps, { toggleModal, toggleModalBack, deleteNote })(NoteView)