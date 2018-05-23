import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { fetchNote } from "./actions/notesAction";
import { getUser } from "./actions/userAction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import AddNoteForm from "./components/AddNoteForm";
import NotesList from "./components/NotesList";
import Note from "./components/Note";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNote();
    this.props.getUser();
  }

  render() {
    return (
      <div className="App">
        <NotesList />
      </div>
    );
  }
}

export default connect(null, { fetchNote, getUser } )(App);
