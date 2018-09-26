import React, { Component } from 'react';
import './App.css';
import * as actions from './actions';
import Notes from  './components/Notes'
import { connect } from 'react-redux';
import { withRouter, Route, Link } from 'react-router-dom';
import ViewNote from './components/ViewNote';
import NewNoteForm from './components/NewNoteForm';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <NavbarBrand>Lambda<br/>Notes</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink>
                <Link to="/">View Your Notes</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/note/add">+ Create New Note</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Route exact path="/" render={props => (
              <Notes {...props} notes={this.props.notes} fetchNotes={this.props.fetchNotes} fetchingNotes={this.props.fetchingNotes}/>
            )}
          />
          <Route path="/note/add" render={props => (
            <NewNoteForm {...props} addNote={this.props.addNote} />
          )}
          />
          <Route path="/notes/:id" render={props => (
              <ViewNote {...props} note={this.props.note} />
            )}
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    note: state.note,
    fetchingNotes: state.fetchingNotes,
    viewingNote: state.fetchingNotes,
    updatingNote: state.updatingNote,
    error: state.error
  }
}

export default withRouter(connect(mapStateToProps, actions)(App));