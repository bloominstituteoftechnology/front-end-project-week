import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NotesList from './NotesList';
import ViewNote from './ViewNote';
import Menu from './Menu';
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
              <Route path='/note/:id' component={ViewNote} />
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
