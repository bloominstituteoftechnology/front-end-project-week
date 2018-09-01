import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import {getNotes} from './actions';
import Sidebar from "./components/Sidebar";
import Notes from "./components/Notes";
import Note from "./components/Note";
import NewNoteForm from "./components/NewNoteForm";
import EditNote from "./components/EditNote";
import Authenticate from "./Authenticate";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      username: "",
      title: "",
      text: "",
      term: ""
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ username: user });
    this.props.getNotes();
    console.log(this.props);
  }

  searchHandler = event => {
    this.setState({ term: event.target.value });
  };

  logOut() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNote = (event) => {
    event.preventDefault();
    this.props.addNote(newNote);
    const newNote = {
      title: this.state.title,
      textBody: this.state.text,
    };
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route
          exact
          path="/"
          render={props => (
            <Notes
              {...props}
              term={this.state.term}
            />
          )}
        />
      <Route
          exact
          path="/create-new-note"
          render={props => (
            <NewNoteForm
              {...props}
              title={this.state.title}
              text={this.state.text}
              addNote={this.addNote}
              handleInputChange={this.handleInputChange}
            />
          )}
        />
        <Route
          exact
          path="/notes/:id"
          render={props => (
            <Note
              {...props}
              notes={this.props.notes}
              title={this.state.title}
              text={this.state.text}
              deleteNote={this.deleteNote}
              handleInputChange={this.handleInputChange}
            />
          )}
        />
        <Route
          exact
          path="/notes/:id/edit"
          render={props => (
            <EditNote
              {...props}
              // notes={this.props.notes}
              editNote={this.editNote}
            />
          )}
        />
      </div>
      );
    }
  }


  const mapStateToProps = state => {
    const {notesReducer} = state;
    return{
      notes: notesReducer.notes,
   
      getting: notesReducer.getting,
      get: notesReducer.get,
      error: notesReducer.error,

    };
  };

export default connect(mapStateToProps,{getNotes})(Authenticate(App));
