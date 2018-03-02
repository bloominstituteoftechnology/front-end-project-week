import React from 'react';
import './NoteList.css';
import CreateNote from './CreateNote';
import kitty from '../kitty-ipsum';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';

class NoteList extends React.Component {
  state = {
    notes:[],
  };

  componentDidMount() {
    console.log("notes imported into NoteList: ", kitty);
    this.setState({ notes: kitty });
    console.log("state is now: ", this.state.notes);
  }

  render() {
    return (
      <div className="App">
        <div className="leftBar">
          <div>
            <h1>Lambda</h1>
            <h2>Notes</h2>
            <NavLink to="/"><button className="btns">View Your Notes</button></NavLink>
            
            <NavLink to="/createnote"><button className="btns">+Create New Note</button></NavLink>
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
