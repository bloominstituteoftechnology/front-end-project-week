import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Home from './Home';
import NotesContainer from './containers/NotesContainer';
import AddNoteFormContainer from './containers/AddNoteFormContainer';
import NoteDescription from './components/notes/NoteDescription';
import EditNoteFormContainer from './containers/EditNoteFormContainer';


class App extends Component {
  state = {
    atHome: false
  }

  atHomeToggle = () => {
    this.setState(prevState => {
      return { atHome: !prevState.atHome }
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div>
              <NavLink to="/">Lambda Notes</NavLink>
            </div>
            <nav>
              <NavLink to="/notes">View Your Notes</NavLink>
              {this.state.atHome ? null : <NavLink to="/notes/add-note">+Create New Note</NavLink>}
            </nav>
          </header>
          <Route exact path="/" render={props => <Home {...props} atHomeToggle={this.atHomeToggle} /> } />
          <Route exact path="/notes" component={ NotesContainer } />
          <Route path="/notes/add-note" component={ AddNoteFormContainer } />
          <Route path="/notes/:note-name" render={props => <NoteDescription {...props} notes={this.props.notes} /> } />
          <Route path="/notes/:note-name/edit" component={ EditNoteFormContainer } />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
})

export default connect(mapStateToProps, {})(App);
