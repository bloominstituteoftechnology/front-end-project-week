import React, { Component } from "react";
import Menu from "./components/menu";
import Notes from "./components/notes";
import NewNote from "./components/newnote";
import NoteFocus from "./components/notefocus";
import EditNote from "./components/editnote";
import { Route } from "react-router-dom";
import dummydata from "./dummydata";
import "./CSS/listview.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: dummydata,
      newtitle: "",
      newbody: "",
      id: 5,
      edittitle: "",
      editbody: "",
      deleting: false
    };
  }

  noteInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  noteSubmit = () => {
    let notes = this.state.notes.slice();
    let id = this.state.id;
    if (this.state.newtitle.trim() !== "" || this.state.newbody.trim() !== "") {
      id++;
      notes.push({
        id: id,
        title: this.state.newtitle,
        text: this.state.newbody
      });
      this.setState({ notes, newtitle: "", newbody: "", id });
    }
  };

  editNote = id => {
    let notesCopy = this.state.notes.slice();
    let editnote = notesCopy.find(note => note.id == id);
    this.setState({ edittitle: editnote.title, editbody: editnote.text });
  };

  submitEdit = id => {
    let notesCopy = this.state.notes.map(note =>Object.assign({}, note));
    let editnote = notesCopy.find(note => note.id == id);
    editnote.title = this.state.edittitle;
    editnote.text = this.state.editbody;
    if ((this.state.edittitle.trim() !== "" || this.state.editbody.trim() !== "")){
      this.setState({notes: notesCopy})
    }
  };

  deleteModal = () => {
    let deleting = !this.state.deleting
    this.setState({ deleting });
  };

  noteDelete = id => {
    let notesCopy = this.state.notes.slice();
    let notesLeft = notesCopy.filter(note => note.id != id);
    console.log(notesLeft);
    this.setState({ notes: notesLeft, deleting: false });
  };

  render() {
    return (
      <div className="page">
        <Menu deleting={this.state.deleting}/>
        <Route
          exact
          path="/"
          render={props => <Notes {...props} notes={this.state.notes} />}
        />
        <Route
          exact
          path="/new"
          render={props => (
            <NewNote
              {...props}
              noteInput={this.noteInput}
              noteSubmit={this.noteSubmit}
            />
          )}
        />
        <Route
          exact
          path="/notes/:id"
          render={props => (
            <NoteFocus
              {...props}
              editNote={this.editNote}
              notes={this.state.notes}
              noteDelete={this.noteDelete}
              deleteModal={this.deleteModal}
              deleting={this.state.deleting}
            />
          )}
        />
        <Route
          exact
          path="/notes/edit/:id"
          render={props => (
            <EditNote
              {...props}
              noteInput={this.noteInput}
              submitEdit={this.submitEdit}
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
