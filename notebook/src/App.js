import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummyData";
import uuid from 'uuid';
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import NoteList from "./Component/NoteList";
import NoteForm from "./Component/NoteForm";
import Note from "./Component/Note";


// import EditNote from "./Component/EditNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: dummyData,
      _id: uuid(),
      title: '',
      textBody:'',
    };
  }

  changeNote = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNote = event => {
    event.preventDefault();
    const notes = this.state.notes;
    notes.push({_id: this.state._id, title: this.state.title, textBody: this.state.textBody});
    this.setState({notes, _id:'', title: '', textBody: ''});

  };


  render() {
    //Build out sidebar
    //Route Notelist
    //Route NoteForm

    return (
      <div className="App">
        <aside className="sidebar-left">
          <h1>Lambda Notes</h1>
          <Link to={"/"}>
            <button>View Your Notes</button>
          </Link>
          <Link to={"/noteform"}>
            <button>Create New Note</button>
          </Link>
        </aside>
        <div className="notes-container">
          <Route
            exact
            path="/"
            render={() => {
              return <NoteList notes={this.state.notes} />;
            }}
          />
          <Route
            exact
            path="/noteform"
            render={() => {
              return (
                <NoteForm
                  handleAddNote={this.addNote}
                  handleNoteChange={this.changeNote}
                  _id={this.state._id}
                  title={this.state.title}
                  textBody={this.state.textBody}
                />
                
              );
            }}
          />
          <Route  path="/note" Component={<Note/>} />
          
        </div>
      </div>
    );
  }
}

export default App;
