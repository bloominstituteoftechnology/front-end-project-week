import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import NoteList from "./NoteList";
import NoteView from "./NoteView";
import NoteEdit from "./NoteEdit";
import NoteCreate from "./NoteCreate";
import "./App.css";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra dui eu erat vestibulum scelerisque. Pellentesque iaculis, enim at fringilla imperdiet, velit ligula ornare magna, eu cursus nulla justo a leo. Aenean condimentum porta dui. Nullam iaculis et sem nec viverra. Ut rhoncus metus mi, at malesuada mauris volutpat sed. Nullam vulputate, elit at interdum vestibulum, velit erat tincidunt mi, eu sodales felis ligula vel nulla. Quisque sed magna vel ante faucibus egestas. Fusce congue ligula mauris, et aliquet lorem tincidunt sed. In ultricies aliquet erat, sed iaculis leo.";
const defaultNotes = [
  { id: 1, title: "Test Note 1", content: lorem, tags: [] },
  { id: 2, title: "Test Note 2", content: lorem, tags: [] },
  { id: 3, title: "Test Note 3", content: lorem, tags: [] },
  { id: 4, title: "Test Note 4", content: lorem, tags: [] },
  { id: 5, title: "Test Note 5", content: lorem, tags: [] },
  { id: 6, title: "Test Note 6", content: lorem, tags: [] },
  { id: 7, title: "Test Note 7", content: lorem, tags: [] }
];

class App extends Component {
  constructor() {
    super();
    let noteData;
    const storedData = localStorage.getItem('notes');
    if (storedData) {
      noteData = JSON.parse(storedData);
    } else {
      noteData = defaultNotes;
    }
    let id;
    const storedID = localStorage.getItem('nextID');
    if (storedID) {
      id = Number(JSON.parse(storedID));
    } else {
      id = noteData.length + 1;
    }
    this.state = {
      notes: noteData,
      nextID: id
    };
  }

  deleteNote = id => {
    const newNotes = this.state.notes.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(newNotes));
    this.setState({notes: newNotes});
  }

  editNote = newNote => {
    let notes = this.state.notes
    notes = notes.map(note => {
      if (newNote.id === note.id) {
        return newNote;
      }
      return note;
    });
    localStorage.setItem('notes', JSON.stringify(notes));
    this.setState({notes: notes});
  }

  createNote = newNote => {
    localStorage.setItem('notes', JSON.stringify([...this.state.notes, newNote]));
    this.setState({notes: [...this.state.notes, newNote]});
  }

  getID = () => {
    const id = this.state.nextID;
    localStorage.setItem('nextID', JSON.stringify(id + 1));
    this.setState({nextID: id + 1});
    return id;
  }

  render() {
    return (
      <div className="App">
        <div className="App-sidebar">
          <Sidebar />
        </div>
        <div className="App-content">
          <Route
            path="/notes"
            render={() => <NoteList notes={this.state.notes} />}
          />
          <Route path="/create" render={props => <NoteCreate {...props} create={this.createNote} getID={this.getID}/>} />
          <Route path="/view/:id" render={props => <NoteView {...props} notes={this.state.notes} delete={this.deleteNote}/>} />
          <Route path="/edit/:id" render={props => <NoteEdit {...props} notes={this.state.notes} edit={this.editNote}/>} />
        </div>
      </div>
    );
  }
}

export default App;
