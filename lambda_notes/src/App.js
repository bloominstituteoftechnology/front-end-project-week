import React, { Component } from "react";
import "./App.css";
import ListView from "./components/ListView";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CreateNew from "./components/CreateNew";
import ViewNote from "./components/ViewNote";
import dummyNotes from "../src/NoteData/dummyNotes";
import Update from "./components/Update";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      count: 9
    };
    this.createNew = this.createNew.bind(this);
    this.newUpdate = this.newUpdate.bind(this);
    this.deleteNote= this.deleteNote.bind(this);
  }
  componentDidMount() {
    this.setState({
      notes: dummyNotes
    });
  }

  deleteNote(id){
    //use filter to evalute on current copy of state
    let filteredNotes= this.state.notes.filter(note=> note.id != id)
    this.setState({
      notes: filteredNotes,
    })
}

  newUpdate(note){
    let clonedNotes = this.state.notes
    console.log("inside update", note.id, typeof(note.id), "clonedNotes", clonedNotes)
    const updatedindex = clonedNotes.findIndex(ele => note.id == ele.id)
    console.log("updatedIndex", updatedindex, "clonedNotes", clonedNotes)
       clonedNotes.splice(Number(updatedindex),1,note)
    this.setState({
      notes: clonedNotes, 
    })
  }

  createNew(note) {
    note.id = this.state.count;
    console.log("I am createNew", note)
    this.setState({
      notes: [...this.state.notes, note],
      count: this.state.count + 1
    });

  }
  render() {
    return (
      <div className="App">
        
        
          <ul className="routerDiv">
          <div>
            <h1>Lambda Notes </h1>
          </div>
            <li>
              <Link to="/">ListView </Link>
            </li>
            <li>
              <Link to="/CreateNew">CreateNew</Link>
            </li>
          </ul>

          <Route
            exact
            path="/"
            render={() => <ListView notes={this.state.notes} />}
          />

          <Route
            path="/ViewNote/:id"
            render={props =>
              <ViewNote
                note={
                  this.state.notes.filter(
                    note => props.match.params.id == note.id
                  )[0]
                  }
                  deleteNote = {this.deleteNote}
              />}
          />
          <Route path="/CreateNew" render= {() => <CreateNew createNote={this.createNew} />} />
          <Route path="/Update/:id" render={() => <Update updateNote= {this.newUpdate} /> } />
        </div>
      // </div>
    );
  }
}

export default App;
