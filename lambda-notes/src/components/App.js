import React, { Component } from 'react';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import Note from './Note';
import NoteForm from './NoteForm';
import NotesView from './NotesView';
// import SideBar from './SideBar';
import { Route } from 'react-router-dom';


class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    return (
      <div className="App">
      {/* <SideBar /> */}

      <Route
      exact path = '/'
      render = {props =>(
        <NotesView {...props}
        notes = {this.props.notes} />
      )}/>

      <Route
      path = 'newnote'
      render = {props =>(
        <NoteForm {...props}
        notes = {this.props.notes} />
      )}/>

      <Route
      path = 'viewnote'
      render = {props =>(
        <Note {...props}
        notes = {this.props.notes}/>
      )}/>

      <NoteForm/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { noteReducer } = state;
  return {
    notes: noteReducer.notes,
    gettingNotes: noteReducer.gettingNotes,
    error: noteReducer.error
  }
}

export default connect(mapStateToProps, { getNotes })(App);
