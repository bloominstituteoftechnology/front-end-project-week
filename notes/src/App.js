import React, { Component } from 'react';
import './App.css';
import { fetchNotes, postNote, overlayToggle, deleteNote } from './actions';
import { connect } from 'react-redux';
import NoteListView from './components/NoteListView';
import CreateNote from './components/CreateNote';
import SideBar from './components/SideBar';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router';
import Note from './components/Note';
import { NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes,
      note: {
        tags: [],
        title: '',
        textBody: ''
      }
    }
  }



  componentDidMount() {
    console.log(this.props)
    this.props.fetchNotes();
     
  };

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
    this.props.postNote(this.state.note)

  }

  
  togglingOverlay = (ev) => {
    ev.preventDefault();
    this.props.overlayToggle();
  }

  deletingNote = (ev) => {
    this.props.overlayToggle();
    this.props.deleteNote(this.props.note._id);
  }

  render() {
    let overlay;
    if(this.props.overlay === true) {
        overlay = <div className='overlay'>
            <div className='overlay-box'>
              <p>Are you sure you want to delete this?</p>
              <div className='overlay-buttons'>
                <NavLink onClick={this.forceUpdateHandler} to='/'>
                  <button className='deletebutton' onClick={this.deletingNote}>Delete</button>
                </NavLink>
                  <button onClick ={this.togglingOverlay}>Cancel</button>
              </div>
            </div>
        </div>

    }
    return (
      <div className="App">
       {overlay}
        <SideBar className='sidebar-content' update={this.componentDidMount}></SideBar>
        <div className='content'>
        <Route exact path='/' render ={(props) => (
          <NoteListView {...props} noteContent={this.props.notes}/> 
        )}/>
        <Route exact path='/new-note' render ={(props) => (
          <CreateNote {...props} changeHandler={this.changeHandler} postHandler={this.postHandler}/> 
        )}/>
        <Route path={`/note/:id`} render ={(props) => (
          <Note {...props} Notes={this.props.notes}/>
        )}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingNotes: state.notesReducer.fetchingNotes,
    postingNote: state.notesReducer.postingNote,
    editingNote: state.notesReducer.editingNote,
    notes: state.notesReducer.notes,
    note: state.notesReducer.note,
    error: state.notesReducer.erorr,
    overlay: state.notesReducer.overlay,
    deletingNote: state.notesReducer.deletingNote
  };
};

export default withRouter(connect(
  mapStateToProps,
  { fetchNotes, postNote, overlayToggle, deleteNote}, 
)(App));
