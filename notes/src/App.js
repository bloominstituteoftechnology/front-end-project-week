import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import NotesList from "./components/NotesList";
import Note from "./components/SingleNote";
import NoteForm from "./components/AddNote";

import axios from "axios";
import Fuse from "fuse.js";
import styled from "styled-components";

const Nav = styled.nav`
  height: 100%;
  width: 275px;
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #d7d7d7;
  overflow-x: hidden;
  padding-top: 1%;
  box-sizing: border-box;
  border-right: 1px solid grey;

  h1 {
    color: #4a494a;
    width: auto;
    font-size: 3rem;

    margin: 0 auto;
    text-align: left;
    padding-left: 10%;
    margin-bottom: 10%;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  width: 80%;
  height: 7.5%;
  margin: 2% auto;
  background-color: #2ac0c4;
  font-weight: bold;
  text-align: center;
  line-height: 250%;
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
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.error(err));
  }

  addNote = data => {
    axios.post("https://fe-notes.herokuapp.com/note/create", data).then(res => {
      return axios
        .get("https://fe-notes.herokuapp.com/note/get/all")
        .then(res => this.setState({ notes: res.data, filtered: [] }))
        .catch(err => console.log(err));
    });
  };

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        return axios
          .get("https://fe-notes.herokuapp.com/note/get/all")
          .then(res => this.setState({ notes: res.data, filtered: [] }))
          .catch(err => console.error(err));
      });
  };

  editNote = (data, id) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, data)
      .then(res => {
        return axios
          .get("https://fe-notes.herokuapp.com/note/get/all")
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
      <div className="App">
        <Nav>
          <h1>Lambda Notes</h1>
          {/* <Link to="/">Home</Link> */}
          <Link to="/notes">View Your Notes</Link>
          <Link to="add-note">+ Create New Note</Link>
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
      </div>
    );
  }
}

export default App;
