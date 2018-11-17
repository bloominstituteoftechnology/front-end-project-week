import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateNoteAction } from '../Actions/notesActions';


class UpdateNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            NoteTitle: '',
            NoteContent: '',
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    updateNoteHandler = e => {
        e.preventDefault();
        // console.log(e.target.children[1].value);
        console.log(this.props.history.goBack());
        // this.props.history.goBack();
        // window.location.reload();
        // this.props.updateNoteAction(e.target.children[1].value, e.target.children[2].value, );
    }

    render() {
        return (
            <div className='create-view'>
                <div className='notes-sidebar'>
                    <h1 className='title'>Lambda Notes</h1>
                    <NavLink to='/' className='navlink' exact activeClassName='navlink-selected'><button onClick={this.props.pageReload}>View Your Notes</button></NavLink>
                    <NavLink to='/create-new-note' className='navlink' exact activeClassName='navlink-selected'><button onClick={this.props.pageReload}>+ Create New Note</button></NavLink>
                </div>
                <div className='new-note-section'>
                    <form className='new-note-form' onSubmit={this.updateNoteHandler}>
                        <h4 className='notes-title'>Update Note:</h4>
                        <input className='note-title-input' name='NoteTitle' placeholder='Note Title' onChange={this.handleInputChange}></input>
                        <input className='note-content-input' name='NoteContent' placeholder='Note Content' onChange={this.handleInputChange}></input>
                        <button>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      notes: state.notes,
      loadingNotes: state.loadingNotes,
      notesLoaded: state.notesLoaded,
      addingNotes: state.addingNotes,
      updatingNotes: state.updatingNotes,
      deletingNotes: state.deletingNotes,
      error: state.error,
      noteId: state.noteId,
    }
}

export default connect(mapStateToProps, {updateNoteAction})(UpdateNote);