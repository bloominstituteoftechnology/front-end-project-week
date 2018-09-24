import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {fetchNotes} from './actions/index';
import { connect } from 'react-redux';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {

  componentDidMount(){
    console.log(this.props.notes);
  }

  render() {
    return (
      <div className="App">

      <div className = 'container'>

      <div className = 'navigation'>
      <h1>Lambda Notes</h1>
      <div className = 'nav-link'>
      View Your Notes
      </div>
      <div className = 'nav-link'>
      + Create New Note
      </div>
      </div>

      <div className = 'application'>
        
        <Switch>
          <Route exact path = '/'
          render={() => <NoteList notes={this.props.notes} />} />
          <Route exact path = '/form' component={NoteForm} />
        </Switch>

        {/* <NoteForm />

        <NoteList notes={this.props.notes}/> */}

      </div>

      </div>


      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, {
  fetchNotes
})(App);
