import React, { Component } from "react";
// import { Link } from "react";
import { connect } from "react-redux";
import { getNotes, getNote, addNote, deleteNote } from "../../store/actions";

import "./style.css";
// import NoteList from "../NoteList";


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        tags: [],
        title: "",
        textBody: "",
      }
    }

  componentDidMount() {
    this.props.getNotes();
  }

    render() {
      return (
        <div className="App">
        {this.props.loading ? (
          <h3>Loading notes...</h3>
        ) : (
          <div className="App-intro">
            <h1>Here's the notes, ya'll</h1>
            <h2>Your Notes:</h2>
            <ul>
              {this.props.notes.map( (note, index) => {
                return<li key={index}>
                    Title: {note.title} <br />
                    Text: {note.textBody} <br />
                  </li>})}
            </ul>
          </div>
        )}
        {this.props.error !== "" ? <h4>{this.props.error}</h4> : null}
        </div>
    );
  }
}

  const mapStateToProps = state => {
    return {
      notes: state.notes,
      error: state.error,
      loading: state.loading,
    }
  };
  
  export default connect(mapStateToProps, { getNotes, getNote, addNote, deleteNote } )(App);