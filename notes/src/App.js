import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {fetchNotes} from './actions/index';
import { connect } from 'react-redux';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

import { Switch, Route, Link, withRouter } from 'react-router-dom';

class App extends Component {

  componentDidMount(){
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="App">

      <div className = 'container'>

      <div className = 'navigation'>
      
      <h1>Lambda Notes</h1>
      <Link to ='/' onClick={this.props.fetchNotes}>
      <div className = 'nav-link'>
      View Your Notes
      </div>
      </Link>

      <Link to='/form'>
      <div className = 'nav-link'>
      + Create New Note
      </div>
      </Link>
      </div>

      <div className = 'application'>
        
        <Switch>
          <Route exact path = '/'
          render={(props) => <NoteList {...props} notes={this.props.notes} />} />
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

export default withRouter(connect(mapStateToProps, {
  fetchNotes
})(App));
