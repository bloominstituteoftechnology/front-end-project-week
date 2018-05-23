import React, { Component } from 'react';
import _ from "underscore";
import './App.css';
import { connect } from "react-redux";
import { fetchNote, addNote, deleteNote } from "./actions/notesAction";
import Header from "./components/Header";
import AddNoteForm from "./components/AddNoteForm";
import Note from "./components/Note";


class App extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchNote()
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let note = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.addNote(note);
    this.setState({title: "", body: ""});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddNoteForm />
        {_.map(this.props.notes, (note, key) => {
          return (
            <Note
              title={note.title}
              key={key}
              body={note.body}
              id={key}
              deleteNote={this.props.deleteNote}/>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { fetchNote, addNote, deleteNote })(App);
