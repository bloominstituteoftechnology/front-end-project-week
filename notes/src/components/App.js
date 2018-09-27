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
import Authenticate from '../Authentication/Authenticate'
// import Header from './Header';



class App extends Component {

  state = {
    filter: '',
  }

  componentDidMount() {
    this.props.fetchNotes()
  }

  componentDidUpdate() {
    (this.props.state.notesSaved || this.props.state.noteDeleted || this.props.state.noteUpdated)
    ? this.props.fetchNotes()
    : console.log('notes saved!');
    console.log('CompUpdate:', this.props.notes);
    // this.props.fetchNotes()
  }

  handleFilter = e => {
    this.setState({ [e.target.name] : e.target.value})
  }

  render() {
    console.log('App.js:', this.props.notes);
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
               {console.log('Appnotes:', this.props.notes)}
             <NotesList
               {...props}
               noteList={this.props.notes}
               filter={this.state.filter}
              />
              <NoteOptions
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

export default Authenticate(withRouter(connect(mapStateToProps, { fetchNotes })(App)))
