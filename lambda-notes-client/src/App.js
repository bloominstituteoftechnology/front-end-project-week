import React, { Component } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import styled from "react-emotion";
import './index.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { updateNotes } from './store/actions';


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


class App extends Component {
  state = {
    atHomePage: false,
    isModalOpen: false
  }

  componentDidMount() {
    if (localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt')
      const reqOptions = {
        headers: {
          Authorization: token,
        }
      }
      axios.get('http://localhost:8000/protected/notes', reqOptions)
      .then(res => {
        this.props.updateNotesHandler(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      this.props.history.push('/')
    }
  }

  logout = () => {
    this.props.history.push('/')
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

  render() {
    return (
        <MainContainer>
          <header className="main-header">
            <div>
              <NavLink className="logo" exact strict to="/">
                Lambda Notes
              </NavLink>
            </div>
            <nav>
              {!this.state.atHomePage ? (
                <div>
                  <NavLink className="link" exact strict to="/notes">
                    View Your Notes
                  </NavLink>
                  <NavLink className="link" to="/notes/add-note/">
                  +Create New Note
                  </NavLink>
                  <button className="link" onClick={this.logout}>
                  Log Out
                  </button>
                </div>
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
                handleModal={this.handleModal}
                isModalOpen={this.state.isModalOpen}
              />
            )}
          />

          <Route
            path="/notes/:id/edit"
            render={props => (
              <EditNoteForm
                {...props}
              />
            )}
          />
        </MainContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateNotesHandler: lePackage => {
    dispatch(updateNotes(lePackage));
  }
});

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(App)
