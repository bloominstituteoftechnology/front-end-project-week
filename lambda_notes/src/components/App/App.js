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
        <Sidebar />
        <header>Your Notes: </header>
        <div className="Notes-Container">
          {props.state.notes.map((note, index) => <NotesList id={index} note={note}/>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps)(App);
