import React, { Component } from "react";
import Menu from "./Components/Menu";
import NoteList from "./Components/NoteList";
import NewNote from "./Components/NewNote";
import SingleNote from "./Components/SingleNote";
import EditNote from "./Components/EditNote";
import { Route } from "react-router-dom";
import dummydata from './dummydata';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: dummydata,
      notetitle: "",
      notebody: "",
      id: null ,
      edittitle: "",
      edittext: "",
      deleting: false
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitNote = () => {
    let newnote = this.state.notes[(this.state.notes.length-1)].id;
    this.setState({id: newnote}, function () {
      let notes = this.state.notes.slice();
      let id = this.state.id;
      if (this.state.notetitle !== "" || this.state.notebody !== "") {
        id++;
        notes.push({
          id: id,
          title: this.state.notetitle,
          text: this.state.notebody
        });
        this.setState({ notes, notetitle: "", notebody: "", id })};
      })
  };

  editHandler = id => {
    let notecopy = this.state.notes.slice();
    let editnote = notecopy.find(note => note.id == id);
    this.setState({ edittitle: editnote.title, editbody: editnote.text });
  };

  submitChange = id => {
    let notecopy = this.state.notes.slice();
    let editnote = notecopy.find(note => note.id == id);
    editnote.title = this.state.edittitle;
    editnote.text = this.state.editbody;
    this.setState({ notes: notecopy });
  };

  deleteModal = () => {
    let deleting = !this.state.deleting
    this.setState({ deleting });
  };

  noteDelete = id => {
    let notecopy = this.state.notes.slice();
    let notesremaining = notecopy.filter(note => note.id != id)
    console.log(notesremaining);
    this.setState({ notes: notesremaining, deleting: false})
  }

  render() {
    return (
      <div className="App">
        <Menu deleting={this.state.deleting}/>
        <Route
          exact
          path="/"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
        <Route
          exact
          path="/newnote"
          render={props => (
            <NewNote
              {...props}
              inputHandler={this.inputHandler}
              submitNote={this.submitNote}
            />
          )}
        />
        <Route
          exact
          path="/notes/:id"
          render={props => (
            <SingleNote
              {...props}
              editHandler={this.editHandler}
              notes={this.state.notes}
              noteDelete={this.noteDelete}
              deleteModal={this.deleteModal}
              deleting={this.state.deleting}
            />
          )}
        />
        <Route
          exact
          path="/notes/editnote/:id"
          render={props => (
            <EditNote
              {...props}
              inputHandler={this.inputHandler}
              submitChange={this.submitChange}
              editbody={this.state.editbody}
              edittitle={this.state.edittitle}
              notes={this.state.notes}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
