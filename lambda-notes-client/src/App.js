import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from "react-emotion";
import './index.css';

import { deleteNote, editNote, addNote } from './store/actions'; 

import Home from './Home';
import NotesContainer from './containers/NotesContainer';
import AddNoteForm from './components/forms/AddNoteForm';
import NoteDescription from './components/notes/NoteDescription';
import EditNoteForm from './components/forms/EditNoteForm';


const MainContainer = styled("div")`
  background-color: #F3F3F3;
  max-width: 1200px;
  width: 100%;
  height: auto;
  margin: auto;
  position: relative;
  border-left: 1px solid black;
  border-right: 1px solid black;

  .main-header {
    width: 25%;
    height: 100%;
    background-color: #D7D7D7;
    padding: 25px 20px;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;

    .logo {
      text-decoration: none;
      font-size: 4.5rem;
      font-weight: bold;
      line-height: 43px;
      color: #4A494A;
    }

    nav {
      display: flex;
      flex-direction: column;
      margin-top: 18px;
      .link {
        display: flex;
        margin-top: 20px;
        padding: 18px;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        font-size: 2rem;
        font-weight: bold;
        background-color: #2AC0C4;
        border: solid 1px #939797;
        &:hover {
        background-color: #23a0a4;
      }
      }
    }
  }
`


// Handles - Routing, passing initial state, modal ~&&~ delete, edit, add notes*/
class App extends Component {
  state = {
    atHomePage: false,
    isModalOpen: false
  }

  atHomeToggle = () => {
    this.setState(prevState => {
      return { atHomePage: !prevState.atHomePage }
    })
  }

  handleModal = () => {
    this.setState(prevState => {
      return {isModalOpen: !prevState.isModalOpen}
    });
  }

  deleteNote = (id) => {
    this.props.deleteNoteHandler(id)
  }

  editNote = (content) => {
    this.props.editNoteHandler(content);
  }
  
  addNote = (content) => {
    this.props.addNoteHandler(content);
  }

  render() {
    return (
      <Router>
        <MainContainer>
          <header className="main-header">
            <div>
              <NavLink className="logo" exact strict to="/">
                Lambda Notes
              </NavLink>
            </div>
            <nav>
              {!this.state.atHomePage ? (
                <NavLink className="link" exact strict to="/notes">
                  View Your Notes
                </NavLink>
              ) : null}
              {!this.state.atHomePage ? (
                <NavLink className="link" to="/notes/add-note/">
                  +Create New Note
                </NavLink>
              ) : null}
            </nav>
          </header>

          {/* Routes */}
          <Route
            exact
            strict
            path="/"
            render={props => (
              <Home {...props} atHomeToggle={this.atHomeToggle} />
            )}
          />

          <Route exact strict path="/notes" component={NotesContainer} />

          <Route
            path="/notes/add-note/"
            render={props => (
              <AddNoteForm
                {...props}
                notes={this.props.notes}
                addNote={this.addNote}
              />
            )}
          />

          <Route
            exact
            strict
            path="/notes/:id"
            render={props => (
              <NoteDescription
                {...props}
                notes={this.props.notes}
                handleModal={this.handleModal}
                isModalOpen={this.state.isModalOpen}
                deleteNote={this.deleteNote}
              />
            )}
          />

          <Route
            path="/notes/:id/edit"
            render={props => (
              <EditNoteForm
                {...props}
                notes={this.props.notes}
                editNote={this.editNote}
              />
            )}
          />
        </MainContainer>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

const mapDispatchToProps = dispatch => ({
  deleteNoteHandler: id => {
    dispatch(deleteNote(id));
  },

  editNoteHandler: content => {
    dispatch(editNote(content));
  },

  addNoteHandler: content => {
    dispatch(addNote(content));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
