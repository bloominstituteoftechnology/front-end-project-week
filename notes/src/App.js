import React, { Component } from 'react';
import './App.css';
import { fetchNotes, postNote, overlayToggle, deleteNote, loginStatusToggle, loginAttempt } from './actions';
import { connect } from 'react-redux';
import NoteListView from './components/NoteListView';
import CreateNote from './components/CreateNote';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
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
        Title: '',
        Content: '',
        user_id: this.props.userId,
      },
      user: {
        username: '',
        password: ''
      }
    }
  }



  componentDidMount() {
    this.props.fetchNotes();
    if(this.props.loginStatus) {
      this.setState({note: {
        ...this.state.note,
        user_id: 1
      }})
    } else {
      this.setState({note: {
        ...this.state.note,
        user_id: null
      }})
    }
     
  };

  changeHandler = (ev) => {
    if(ev.target.name === 'Title'|| ev.target.name === 'Content') {
      this.setState({note: {
        ...this.state.note,
        [ev.target.name]: ev.target.value
        }
      })
    } else if (ev.target.name === 'username'|| ev.target.name === 'password') {
      this.setState({user: {
        ...this.state.user,
        [ev.target.name]: ev.target.value
      }})
    } else {
      this.setState({[ev.target.name]: ev.target.value}); 
    }
  }

  postHandler = (ev) => {
    this.props.postNote(this.state.note).then(() => this.props.fetchNotes())

  }

  loginHandler = (ev) => {
    this.props.loginAttempt(this.state.user)
    .then(() => 
    window.location = "/notes",
    this.props.loginStatusToggle());
  }

  
  togglingOverlay = (ev) => {
    ev.preventDefault();
    this.props.overlayToggle();
  }

  deletingNote = (ev) => {
    console.log(this.props.note[0])
    this.props.overlayToggle();
    this.props.deleteNote(this.props.note[0].id).then(() => this.props.fetchNotes());
  }

  render() {
    let overlay;
    if(this.props.overlay === true) {
        overlay = <div className='overlay'>
            <div className='overlay-box'>
              <p>Are you sure you want to delete this?</p>
              <div className='overlay-buttons'>
                <NavLink onClick={this.forceUpdateHandler} to='/notes'>
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
        <Route exact path='/' component={HomePage}/>
        <Route path='/login' render ={(props) => (
          <Login {...props} changeHandler={this.changeHandler} loginHandler={this.loginHandler}/> 
        )}/>
        <Route path='/register' render ={(props) => (
          <Register {...props} changeHandler={this.changeHandler} registerHandler={this.registerHandler}/> 
        )}/>
        <Route path='/notes' render ={(props) => (
          <SideBar {...props} update={this.componentDidMount} toggleLogin={this.props.loginStatusToggle} loginStatus={this.props.loginStatus}/> 
        )}/>
        <div className='content'>
        <Route exact path='/notes' render ={(props) => (
          <NoteListView {...props} noteContent={this.props.notes}/> 
        )}/>
        <Route exact path='/notes/new-note' render ={(props) => (
          <CreateNote {...props} changeHandler={this.changeHandler} postHandler={this.postHandler}/> 
        )}/>
        <Route path={`/notes/:id`} render ={(props) => (
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
    deletingNote: state.notesReducer.deletingNote,
    loginStatus: state.notesReducer.loginStatus,
    userId: state.notesReducer.userId
  };
};

export default withRouter(connect(
  mapStateToProps,
  { fetchNotes, postNote, overlayToggle, deleteNote, loginStatusToggle, loginAttempt}, 
)(App));
