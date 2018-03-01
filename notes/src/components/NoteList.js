import React from 'react';
import './NoteList.css';
import CreateNote from './CreateNote';
import notes from '../kitty-ipsum';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';

class NoteList extends React.Component {
  state = {
    notes: [],
    lastId: 9,
  };

  componentDidMount() {
    console.log("notes imported into NoteList: ", notes);
    this.setState({ notes: notes });
    console.log("state is now: ", this.state.notes);
  }

  render() {
    return (
      <div className="App">
        <div className="leftBar">
          <div>
            <h1>Lambda</h1>
            <h2>Notes</h2>
            <button className="btns"><NavLink to="/">View Your Notes</NavLink></button>
            <button className="btns" ><NavLink to="/createnote">+ Create New Note</NavLink></button>
          </div>
        </div>
        <div className="rightBar">
          <div>
            <div className="yourNotes">
              <h3>Your Notes:</h3>
            </div>
            {this.state.notes.map(note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function NoteCard({ note }) {
  const { id, title, text } = note;
  return (
    <div>
      <NavLink to={`/notes/${note.id}`}>
        <li key={note.id}>
          <div>
            <p className="noteTitle">{note.title}</p>
            <hr />
            <div>{note.text}</div>
          </div>
        </li>
      </NavLink>
    </div>
  );
}

export default NoteList;
