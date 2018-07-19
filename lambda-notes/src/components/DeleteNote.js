import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';
import '../styles/DeleteNote.css';

const URL = 'https://killer-notes.herokuapp.com/note/';
const path = '/note/';

class DeleteNote extends Component {
    // routes back to single note view if user backs out of delete
    noDelete = id => {
        window.location.pathname = `${path}${id}`;
    }

    render() {
        return (
            <React.Fragment>
                {this.props.singleNote.kind ? null : (
                    <div className='delete-modal-container'>
                        <div className='delete-modal'>
                            <p className='modal-text'>Are you sure you want to delete this?</p>
                                <div className='modal-buttons'>
                                    <button type='button' className='delete-btn' onClick={() => this.props.deleteNote(URL, this.props.singleNote._id)}>Delete</button>
                                    <button type='button' className='no-btn' onClick={() => this.noDelete(this.props.singleNote._id)}>No</button>
                                </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        singleNote: state.singleNote,
    }
}

export default connect(mapStateToProps, { deleteNote })(DeleteNote);