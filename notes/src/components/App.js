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
import PaginationContainer from './PaginationContainer'
import FileUpload from './FileUpload'

let filteredNoteList = ''

class App extends Component {

  state = {
    filter: '',
    active: 'page0',
  }

  componentDidMount() {
    this.props.fetchNotes()
  }

  componentDidUpdate() {
    (this.props.state.notesSaved || this.props.state.noteDeleted || this.props.state.noteUpdated)
    ? this.props.fetchNotes()
    : ''
  }

  handleFilter = e => {
    this.setState({ [e.target.name] : e.target.value})
  }

  handlePagination = value => {
    this.setState({ active: value})
  }


  render() {

    filteredNoteList = this.props.state.notes.filter(item =>
      (JSON.stringify(item.title)+JSON.stringify(item.content))
      .toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <div className="App">
      {/* <FileUpload /> */}
        <header className="App-header">
          <h1 className="App-title">Luisan Notes</h1>
          <NavLink
            className='nav-link'
            to='/note-list'> View Your Notes </NavLink>
          <NavLink
            className='nav-link'
            to='/new-note'> + Create New Note </NavLink>
          <Route exact path='/note-list' render={props =>
            <PaginationContainer
              {...props}
              active={this.state.active}
              handlePagination={this.handlePagination}
              modulo={parseInt(filteredNoteList.length/9)+1}
             />
           } />
        </header>
        <section className='main-section'>
          <Route exact path='/note-list' render={props =>
            <React.Fragment>
                <h2 className='notes-title'> Notes: </h2>
                <SearchBar
                  handleFilter={this.handleFilter}
                  filter={this.state.filter} />
              <NotesList
                {...props}
                noteList={filteredNoteList}
                filter={this.state.filter}
                active={this.state.active}
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
               active={this.state.active}
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
