import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import EditView from './EditView';
import {
  fetchNoteById,
  deleteNote
} from '../actions';
import { Note, Sidebar, DeleteModal } from '../components';

class NoteView extends React.Component {

  componentDidMount() {
    if (!this.props.loggedIn) {
      this.props.history.push('/')
    }
    const noteId = this.props.match.params.id;
    this.props.fetchNoteById(noteId);
  }


  render() {
    return(
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path='/:id/edit' render={(props) => (<EditView {...props} /> )}/>
            <Route path='/:id' render={(props) => (
              <Note {...props} note={this.props.note} />
            )} />

          </Switch>
          <Route exact path='/:id/delete' render={(props) => (
            <div className='modal'><DeleteModal {...props} deleteNote={this.props.deleteNote} />
          </div>)} />

      </div>

    )
  }
}



const mapStateToProps = state => {
  return{
    noteUpdated: state.notesReducer.noteUpdated,
    note: state.noteReducer.note,
    error: state.noteReducer.error,
    fetchingNote: state.noteReducer.fetchingNote,
    loggedIn: state.authReducer.loggedIn
  }
}


export default connect(
  mapStateToProps,
  {
    fetchNoteById,
    deleteNote,
  }
)(NoteView);
