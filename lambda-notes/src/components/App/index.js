import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchingNotes, getNote, addNote, deleteNote } from "../../store/actions";

import "./style.css";
import NoteList from "../NoteList";


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
    this.props.fetchingNotes();
  }

    render() {
      return (
        <div className="App">
        {this.props.loading ? (
          <h3>Loading notes...</h3>
        ) : (
          <div className="App-intro">
            <h1>Here's the notes, ya'll</h1>
            {/* <NoteList /> */}
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
      title: state.title,
      textBody: state.textBody,
      error: state.error,
      loading: state.loading,
    }
  };
  
  export default connect(mapStateToProps, { fetchingNotes, getNote, addNote, deleteNote } )(App);