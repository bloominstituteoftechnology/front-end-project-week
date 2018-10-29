import React, { Component } from 'react';
import './App.css';
import { fetchNotes, postNote } from './actions';
import { connect } from 'react-redux';
import NoteListView from './components/NoteListView';
import CreateNote from './components/CreateNote';
import SideBar from './components/SideBar';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      note: {
        tags: [],
        title: '',
        textBody: ''
      }
    }
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  changeHandler = (ev) => {
    if(ev.target.name === 'title'|| ev.target.name === 'textBody') {
      this.setState({note: {
        ...this.state.note,
        [ev.target.name]: ev.target.value
        }
      })
    } else {
      this.setState({[ev.target.name]: ev.target.value}); 
    }
  }

  postHandler = (ev) => {
    ev.preventDefault();
    this.props.postNote(this.state.note)
  }

  render() {
    return (
      <div className="App">
        <SideBar></SideBar>
        <Route exact path='/' render ={(props) => (
          <NoteListView {...props} noteContent={this.props.notes}/> 
        )}/>
        <Route exact path='/new-note' render ={(props) => (
          <CreateNote {...props} changeHandler={this.changeHandler} postHandler={this.postHandler}/> 
        )}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    fetchingNotes: state.notesReducer.fetchingNotes,
    postingNote: state.notesReducer.postingNote,
    notes: state.notesReducer.notes,
    error: state.notesReducer.erorr,
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes, postNote }
)(App);
