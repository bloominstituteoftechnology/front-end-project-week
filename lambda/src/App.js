import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import axios from 'axios';

import NotesList from './sub-components/notesList';
import NewNote from './sub-components/newNote';

import { loadNotesAction, addNoteAction, updateNoteAction, deleteNoteAction } from './Actions/notesActions'

import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    }
  }
  //componentDidMount() for w/o redux:
  componentDidMount = () => {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response)
        this.setState({
          notes: response.data,
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
  windowReload = (e) => {
    window.location.reload();
}
  //componentDidMount() for with redux:
  // componentDidMount = () => {
  //   this.props.loadNotesAction();
  // }

  render() {
    return (
      <div className="App">
        <div>
          <Route exact path='/' render={ (props) => <NotesList {...props} notesList={this.state.notes} pageReload={this.windowReload} />} />
          <Route exact path='/create-new-note' render={ (props) => <NewNote {...props} pageReload={this.windowReload} />} />
        </div>
      </div>
    );
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
  }
}

export default connect(mapStateToProps, {loadNotesAction, addNoteAction, updateNoteAction, deleteNoteAction})(App);
