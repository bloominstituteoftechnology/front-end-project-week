import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateNoteAction } from '../Actions/notesActions';

import axios from 'axios';


class UpdateNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            NoteTitle: '',
            NoteContent: '',
            note: [],
        }
    }
    componentDidMount() {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
            .then(response => {
                console.log(response);
                this.setState({
                    note: response.data,
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    updateNoteHandler = e => {
        e.preventDefault();
        // console.log(e.target.children[2].value);
        // console.log(this.props.match.params.id);
        // console.log(this.state.NoteTitle, this.state.NoteContent);
        this.props.updateNoteAction(this.state.NoteTitle, this.state.NoteContent, this.props.match.params.id);
        setTimeout(function() {
            window.location.href = 'http://localhost:3000/';
        }, 1000);
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
                        <textarea className='note-content-input' name='NoteContent' placeholder='Note Content' onChange={this.handleInputChange}></textarea>
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