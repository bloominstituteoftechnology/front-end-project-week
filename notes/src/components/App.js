import React, { Component } from 'react';
import './App.css';

import { Route, Switch, withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions'

import NotesList from './NotesList'
import NewNote from './NewNote'
// import Header from './Header';


class App extends Component {

  componentDidMount() {
    this.props.fetchNotes()
  }

  render() {
    console.log(this.props.notes);
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
          <Link to='/'> Home </Link>
          <Link to='/note-list'> Note List</Link>
          <Link to='/new-note'> New Note </Link>
          <Link to='/smurf-update'> Smurf Update </Link>
        </header>
        <section className='main-section'>
          <Route path='/note-list' render={props =>
            <NotesList
              {...props}
              noteList={this.props.notes}
             />
           } />
           <Route path='/new-note' render={props =>
             <NewNote
               {...props}
             />
           } />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    notes: state.notes,
  }
}

export default withRouter(connect(mapStateToProps,
  { fetchNotes})
  (App))
