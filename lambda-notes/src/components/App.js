import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Menu';
import NotesList from './NotesList';
import NewNote from './NewNote';
import ViewNote from './ViewNote';
import DeleteNote from './DeleteNote';
import EditNote from './EditNote';
import '../styles/App.css';

const URL = 'https://killer-notes.herokuapp.com/note/get/';

class App extends Component {
  // fetches notes from api
  componentDidMount() {
    this.props.fetchNotes(URL);
  }

  render() {
    return (
      // handles component routing
        <Router>
            <div className='App'>
              <Route path='/' component ={Menu} />
              <Route exact path='/' component={NotesList} />
              <Route path='/create-note' component={NewNote} />
              <Route path='/note/:id' component={ViewNote} />
              <Route path='/note/:id/delete' component={DeleteNote} />
              <Route path='/edit/:id' component={EditNote} />
            </div>
        </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingNotes: state.fetchingNotes,
    notes: state.notes,
    error: state.error,
  }
}

export default connect(mapStateToProps, { fetchNotes })(App);
