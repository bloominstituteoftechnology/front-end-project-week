import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { deleteNote } from "../actions"

const DeleteNote = props => {
    if (props.note) {
        const { id } = props.note
        return (
            <>
            <h5>Are you sure you want to delete this?</h5>
            <button onClick={() => props.deleteNote(id)}>Delete</button>
            <Link to ={`/${id}`}>
            <button>No</button></Link>
            </>
        )
    } else {
        return <p>Note Deleted</p>
    }
}   

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params
    return {
        note: state.notes.find(note => note.id === id)
    }
}

export default connect(mapStateToProps, { deleteNote })(DeleteNote)