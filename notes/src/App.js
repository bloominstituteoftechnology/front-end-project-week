import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {fetchNotes} from './actions/index';
import { connect } from 'react-redux';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import NoteEdit from './components/NoteEdit'
import NoteDetails from './components/NoteDetails';
import NoteTags from './components/NoteTags';

import { Switch, Route, Link, withRouter } from 'react-router-dom';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
    }
  }

  handleSearchInput = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      search: event.target.value
    })
  }

  clearSearch = () => {
    this.setState({
      search: ''
    })
  }

  render() {

    let newNotes = this.props.notes;
    if(this.state.search.length > 0){
      newNotes = this.props.notes.filter(note => note.title.includes(this.state.search) || note.content.includes(this.state.search) || note.tags.includes(this.state.search))
      }

    return (
     <div className='App'>

      <div className = 'navigation'>
      <h1>Lambda Notes</h1>
      <Link to ='/'>
      <div className = 'nav-link' onClick={this.clearSearch}>
      View Your Notes
      </div>
      </Link>

      <Link to='/form'>
      <div className = 'nav-link'>
      + Create New Note
      </div>
      </Link>

      <div className = 'search-bar'>
      <input type = 'text' placeholder='Search...' value = {this.state.search} onChange = {this.handleSearchInput} ></input>
      </div>
      </div>

      <div className = 'application'>
        <Switch>
          <Route exact path = '/'
          render={(props) => <NoteList {...props} notes={newNotes} />} />
          <Route exact path = '/form' component={NoteForm} />
          <Route exact path='/notes/:id' render={(props) => <NoteDetails {...props} notes={this.props.notes} />} />
          <Route exact path='/notes/edit/:id' render={(props) => <NoteEdit {...props} notes = {this.props.notes} />} />
          <Route exact path = '/notes/tags/:tag' render={(props) => <NoteTags {...props} notes={this.props.notes} />} />
        </Switch>

      </div>
      </div>


    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    noteDeleted: state.noteDeleted,
    notesFetched: state.notesFetched,
    needsRefresh: state.needsRefresh
  }
}

export default withRouter(connect(mapStateToProps, {
  fetchNotes
})(App));
