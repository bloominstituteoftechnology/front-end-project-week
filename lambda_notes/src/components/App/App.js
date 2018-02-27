import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NotesList from '../NotesList/NotesList';
import Note from '../Note/Note';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const props = this.props;
    console.log('App props', this.props)
    return (
      <div className="App">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="Notes-Container">
          <h2>Your Notes: </h2>
          {props.notesState.notes.map((note, index) => <NotesList id={index} note={note}/>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notesState: state,
  }
}

export default connect(mapStateToProps)(App);
