import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import NotesList from "./components/NotesList";
import Note from "./components/SingleNote";
import NoteForm from "./components/AddNote";

import axios from "axios";
import Fuse from "fuse.js";
import styled from "styled-components";

const API = "https://fe-notes.herokuapp.com/note";

const AppWrapper = styled.div`
  box-sizing: border-box;
`;
const Nav = styled.nav`
  height: 100%;
  width: 250px;
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #d7d7d7;
  overflow-x: hidden;
  box-sizing: border-box;
  border-right: 1px solid grey;

  h1 {
    color: #4a494a;
    width: auto;
    font-size: 2.75rem;
    padding-top: 3%;
    margin: 0 auto;
    text-align: left;
    padding-left: 10%;
    margin-bottom: 10%;
  }
`;
const Link = styled(NavLink)`
  color: #ffffff;
  width: 80%;
  height: 7%;
  margin: 0 auto;
  margin-bottom: 8%;
  background-color: #2ac0c4;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;

  &:hover {
    background-color: #ffffff;
    color: #2ac0c4;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      filtered: []
    };
  }

  reset = () => {
    this.setState({ filtered: [] });
  };

  componentDidMount() {
    axios
      .get(`${API}/get/all`)
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.error(err));
  }

  addNote = data => {
    axios.post(`${API}/create`, data).then(res => {
      return axios
        .get(`${API}/get/all`)
        .then(res => this.setState({ notes: res.data, filtered: [] }))
        .catch(err => console.log(err));
    });
  };

  deleteNote = id => {
    axios.delete(`${API}/delete/${id}`).then(res => {
      return axios
        .get(`${API}/get/all`)
        .then(res => this.setState({ notes: res.data, filtered: [] }))
        .catch(err => console.error(err));
    });
  };

  editNote = (data, id) => {
    axios
      .put(`${API}/edit/${id}`, data)
      .then(res => {
        return axios
          .get(`${API}/get/all`)
          .then(res => this.setState({ notes: res.data, filtered: [] }))
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };

  searchFilter = e => {
    var options = {
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 0,
      keys: ["title"]
    };
    var fuse = new Fuse(this.state.notes, options);
    var result = fuse.search(e.target.value);
    this.setState({ filtered: result });
  };

  render() {
    return (
      <AppWrapper>
        <Nav>
          <h1>Lambda Notes</h1>
          <Link to="/notes">
            <span>View Your Notes</span>
          </Link>
          <Link to="/add-note">
            <span>+ Create New Note</span>
          </Link>
        </Nav>

        <Route
          exact
          path="/notes"
          render={props => (
            <NotesList
              {...props}
              notes={
                this.state.filtered.length > 0
                  ? this.state.filtered
                  : this.state.notes
              }
              search={this.searchFilter}
              reset={this.reset}
            />
          )}
        />
        <Route
          path="/notes/:id"
          render={props => (
            <Note
              {...props}
              notes={
                this.state.filtered.length > 0
                  ? this.state.filtered
                  : this.state.notes
              }
              delete={this.deleteNote}
            />
          )}
        />
        <Route
          path="/add-note"
          render={props => <NoteForm {...props} addNote={this.addNote} />}
        />
        <Route
          exact
          path="/edit-note/:id"
          render={props => (
            <NoteForm {...props} editNote={this.editNote} edit />
          )}
        />
      </AppWrapper>
    );
  }
}

export default App;
