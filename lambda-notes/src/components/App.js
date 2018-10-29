import React, { Component } from 'react';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import Note from './Note';
import NoteForm from './NoteForm';
import NotesView from './NotesView';
import SideBar from './SideBar';
import { Route } from 'react-router-dom';


class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    return (
      <div className="App">
      <div className='cardview'>

      <div className="sidebar">
      <SideBar />
      </div>
      
      <div className="main-page">
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
      path = 'note/:_id'
      render = {props =>(
        <Note {...props}
        notes = {this.props.notes}/>
      )}/>
      </div>
      </div>
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
