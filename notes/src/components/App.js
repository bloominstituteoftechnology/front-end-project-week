import React, { Component } from 'react';
import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions'

import NotesList from './NotesList'
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
        </header>
        <section className='main-section'>
          <h2> Your Notes: </h2>
          <Route path='/' render={props =>
            <NotesList
              {...props}
              noteList={this.props.notes}
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
