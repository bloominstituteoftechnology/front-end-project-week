import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';

const URL = 'https://killer-notes.herokuapp.com/note/';
const path = 'http://localhost:3000/note/';

class DeleteNote extends Component {
    noDelete = (event, id) => {
        event.preventDefault();
        window.location.href = `${path}${id}`;
    }

    render() {
        return (
            <div className='delete-modal'>
                <p className='modal-text'>Are you sure you want to delete this?</p>
                <button type='button' onClick={() => this.props.deleteNote(URL, this.props.singleNote._id)}>Delete</button>
                <button type='button' onClick={event => this.noDelete(event, this.props.id)}>No</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        singleNote: state.singleNote,
    }
}

export default connect(mapStateToProps, { deleteNote })(DeleteNote);