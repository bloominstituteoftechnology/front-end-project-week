import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NotesList from './NotesList';
import Menu from './Menu';
import '../styles/App.css';

const getURL = 'https://killer-notes.herokuapp.com/note/get/all';

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes(getURL);
  }

  render() {
    return (
        <Router>
            <div className='App'>
              <Route path='/' component ={Menu} />
              <Route exact path='/' component={NotesList} />
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
