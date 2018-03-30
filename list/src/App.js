import React, { Component } from "react";
import logo from "./logo.svg";
import { Route } from 'react-router-dom'
import { NoteContainer, SideBar, AddNoteView, ViewNote, EditNote } from "./components";

import "./App.css";

class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: "Title1",
        content:
          "Lorem ipsum dolor sit amet, ut eum novum rationibus mediocritatemLorem ipsum dolor sit amet, ut eum novum rationibus mediocritatemLorem ipsum dolor sit amet, ut eum novum rationibus mediocritatem"
      },
      { id: 1, title: "Title2", content: "testContent2" },
      {
        id: 2,
        title: "Title1",
        content:
          "Lorem ipsum dolor sit amet, ut eum novum rationibus mediocritatemLorem ipsum dolor sit amet, ut eum novum rationibus mediocritatemLorem ipsum dolor sit amet, ut eum novum rationibus mediocritatem"
      },
      {
        id: 3,
        title: "Title1",
        content:
          "Lorem ipsum dolor sit amet, ut eum novum rationibus mediocritatemLorem ipsum dolor sit amet, ut eum novum rationibus mediocritatemLorem ipsum dolor sit amet, ut eum novum rationibus mediocritatem"
      }
    ],

    newNote: { id: 0, title: "", content: "" },

  };

  componentDidMount() {
    this.setState();
  }

  handleChange = event => {
    console.log(this.state);
    const { name, value } = event.target;
    const { newNote, notes } = this.state;
    this.setState({ newNote: { ...newNote, [name]: value, id: notes.length } })
  };

  addNote = event => {
    const notesList = this.state.notes;
    notesList.push(this.state.newNote);
    this.setState({
      newNote: { title: '', content: '', },
      notes: notesList
    });
  };

  editNote = id => {
    const { notes, newNote } = this.state
    console.log(this.state)
    const newArr = notes.map(note => note.id === id ? newNote : note)
    this.setState({ notes: newArr })
  };

  noteContainer = props => {
    return <NoteContainer notes={this.state.notes} {...props} />
  }

  renderNoteView = props => {
    return <AddNoteView handleChange={this.handleChange} addNote={this.addNote} note={this.state.newNote} {...props} />
  }

  indivNoteView = props => {
    const filteredNotes = this.state.notes.filter(note => +props.match.params.id === note.id)
    return <ViewNote notes={filteredNotes[0]} deleteNote={this.deleteNote} />
  }



  editNoteView = props => {
    const filteredNotes = this.state.notes.filter(note => +props.match.params.id !== note.id)
    return <EditNote note={filteredNotes[0]} handleChange={this.handleChange} editNote={this.editNote} {...props} {...this.state} />
  }


  deleteNote = id => {
    const { notes, newNote } = this.state;
    const delArr = notes.filter(note => note.id !== id);
    this.setState({ notes: delArr });
    console.log(delArr);
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path="/" render={this.noteContainer} />
        <Route path="/addNote" render={this.renderNoteView} />
        <Route path="/viewNote/:id" render={this.indivNoteView} />
        <Route path="/editNote/:id" render={this.editNoteView} />
      </div>
    );
  }
}

export default App;
