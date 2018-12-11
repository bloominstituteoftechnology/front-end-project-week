import React from 'react';

import axios from 'axios';

import { connect } from 'react-redux';
import { deleteNoteAction } from '../Actions/notesActions';

import { NavLink } from 'react-router-dom';


class NoteProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        // console.log(this.state.note);
        // this.props.saveNoteId(this.props.match.params.id);
    }
    openDeleteModal = e => {
        const deleteModal = document.querySelector('.modal');
        if (deleteModal.style.display !== 'block') {
            deleteModal.style.display = 'block';
        }
        // console.log(e.target.style);
        // if (e.target.style.display !== 'block') {
        //     e.target.style.display = 'block';
        // }
    }
    closeDeleteModal = e => {
        const deleteModal = document.querySelector('.modal');
        if (deleteModal.style.display !== '') {
            deleteModal.style.display = '';
        }
    }
    deleteNoteHandler = e => {
        // e.preventDefault();
        // if (window.confirm('Are you sure you want to delete this note?')) {
        //     this.props.deleteNoteAction(this.props.match.params.id);
        // } 
        // else {
        //     console.log('user cancelled note deletion.')
        // }

        this.props.deleteNoteAction(this.props.match.params.id);
        // this.props.history.go('http://localhost:3000/');
       setTimeout(function() {
           window.location.href = 'http://localhost:3000/';
       }, 1000);

        // window.location.assign('http://localhost:3000/');
        // setTimeout(window.location.reload(false), 10000);

        // // window.location.reload();
        // this.props.history.goBack(2);
        // window.location.reload();
        
        // const functionOne = function(value, callback){
        //     this.props.
        // }

        // setTimeout(this.props.deleteNoteAction(this.props.match.params.id), 10);
        // setTimeout(this.props.history.goBack(2), 10);
        // setTimeout(window.location.reload, 10);
    }

    render() {
        return (
            <div className='note-view'>
                <div className="modal">
                    <div className="modal-content">
                        <span className="close">Are you sure you want to delete this?</span>
                        <div className='modal-buttons'>
                            <button className='delete-button' onClick={this.deleteNoteHandler}>Delete</button>
                            <button className='no-button' onClick={this.closeDeleteModal}>No</button>
                        </div>
                    </div>
                </div>
                <div className='note-view-allcontent'>
                    <div className='notes-sidebar'>
                        <h1 className='title'>Lambda Notes</h1>
                        <NavLink to='/' className='navlink' exact activeClassName='navlink-selected'><button onClick={this.props.pageReload}>View Your Notes</button></NavLink>
                        <NavLink to='/create-new-note' className='navlink' exact activeClassName='navlink-selected'><button onClick={this.props.pageReload}>+ Create New Note</button></NavLink>
                    </div>
                    <div key={this.props.match.params.id} id={this.props.match.params.id} className='specific-note'>
                        <div className='edit-delete-box'>
                            <div className='edit-delete-section'>
                                <NavLink to={`/note/${this.props.match.params.id}/update-note`} className='edit-navlink' onClick={this.props.pageReload}>edit</NavLink>
                                <span onClick={this.openDeleteModal}><u>delete</u></span>
                            </div>
                        </div>
                        <h4 className='specific-note-title'>{this.state.note.title}</h4>
                        <p className='specific-note-textbody'>{this.state.note.textBody}</p>
                    </div>
                </div>
       
                {/* <Route exact path='/notes/:id/update-note' render={ (props) => <UpdateNote {...props} pageReload={this.windowReload} />} /> */}
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

export default connect(mapStateToProps, {deleteNoteAction})(NoteProfile);