import React, { Component } from 'react';
import './App.css';

import { Route, withRouter, Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions'

import NotesList from './NotesList'
import NewNote from './NewNote'
import EditNote from './EditNote'
import NoteOptions from './NoteOptions'
import SearchBar from './SearchBar.js'
// import Header from './Header';



class App extends Component {

  state = {
    filter: 'Note',
  }

  componentDidMount() {
    this.props.fetchNotes()
  }

  handleFilter = e => {
    this.setState({ [e.target.name] : e.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
          <NavLink
            className='nav-link'
            to='/note-list'> View Your Notes </NavLink>
          <NavLink
            className='nav-link'
            to='/new-note'> + Create New Note </NavLink>
        </header>
        <section className='main-section'>
          <Route exact path='/note-list' render={props =>
            <React.Fragment>
              <h2 className='notes-title'> Your Notes: </h2>
              <SearchBar
                handleFilter={this.handleFilter}
                filter={this.state.filter} />
              <NotesList
                {...props}
                noteList={this.props.notes}
                filter={this.state.filter}
               />
             </React.Fragment>
           } />
           <Route path='/note-list/:id' render={props =>
             <React.Fragment>
             <NoteOptions
               {...props}
               noteList={this.props.notes}
              />
             <NotesList
               {...props}
               noteList={this.props.notes}
              />
              </React.Fragment>
            } />
           {/* <Route path='/note-list/:id' component={Note} /> */}
           <Route path='/new-note' render={props =>
             <NewNote
               {...props}
             />
           } />
           <Route path='/edit-note/:id' render={props =>
             <EditNote
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

export default withRouter(connect(mapStateToProps, { fetchNotes })(App))
