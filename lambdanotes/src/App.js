import React, { Component } from "react";
import "./App.css";
import ListView from "./components/views/listview";
import CreateNote from "./components/views/createnote";
import NoteView from "./components/views/noteview";
import EditNote from "./components/views/editnote";
import DeleteNote from "./components/functions/deletenote";
import { MainBack } from "./ReusableStyles";
import { Container } from "reactstrap";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 0,
          tags: ["tag", "otherTag"],
          title: "Note Title 0",
          textBody: "Note Body 0"
        },
        {
          id: 1,
          tags: ["tag", "otherTag"],
          title: "Note Title 1",
          textBody: "Note Body 1"
        },
        {
          id: 2,
          tags: ["tag", "otherTag"],
          title: "Note Title 2",
          textBody: "Note Body 2"
        }
      ],
      selected: ""
    };
  }

  // componentDidMount() {
  //   this.setState({ notes: notesData });
  // }

  editNoteHandler = e => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitNote = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({
      id: Math.random(),
      title: this.state.title,
      textBody: this.state.textBody
    });
    this.setState({ notes, title: "", textBody: "" });
  };

  selectHandler = note => {
    this.setState({ selected: note });
  };

  filterNote = () => {
    // let filteredNote = this.state.notes.slice();
    // filteredNote = filteredNote.filter(
    //   filtered => filtered.id === this.state.selected.id
    // );
    // return filteredNote;

    // let filteredNote = this.state.notes.slice();
    // filteredNote = filteredNote.filter(
    //   filtered => filtered.notes === this.state.selected
    // );
    return this.state.selected;
  };

  editSubmitHandler = () => {
    let editNote = this.state.selected;
    editNote.title = this.state.title;
    editNote.textBody = this.state.textBody;
    this.setState({
      title: editNote.title,
      textBody: editNote.textBody
    });
    return editNote;
  };

  submitDelete = () => {
    let notes = this.state.notes;
    notes = notes.filter(filtered => filtered.id !== this.state.selected.id);
    this.setState({ notes: notes });
  };

  render() {
    return (
      <MainBack>
        <Container fluid>
          <header className="App-header">
            <h1 className="App-title">Lambda Notes Front-End-Project</h1>
          </header>
          {/* <ListView
            notes={this.state.notes}
            selectHandler={this.selectHandler}
            selectedNote={this.state.selected}
          /> */}
          <Route
            exact
            path="/"
            render={props => (
              <ListView
                notes={this.state.notes}
                selectHandler={this.selectHandler}
                selectedNote={this.state.selected}
              />
            )}
          />
          {/* <CreateNote
            notes={this.state.notes}
            editNoteHandler={this.editNoteHandler}
            handleSubmitNote={this.handleSubmitNote}
          /> */}
          <Route
            exact
            path="/create"
            render={props => (
              <CreateNote
                notes={this.state.notes}
                editNoteHandler={this.editNoteHandler}
                handleSubmitNote={this.handleSubmitNote}
              />
            )}
          />
          {/* <NoteView notes={this.filterNote()} /> */}
          <Route
            path="/note/:id"
            render={props => <NoteView notes={this.filterNote()} />}
          />
          <EditNote
            notes={this.filterNote()}
            selectHandler={this.selectHandler}
            editNoteHandler={this.editNoteHandler}
            editSubmitHandler={this.editSubmitHandler}
          />
          {/* <Route
            path="/note/:id/edit"
            render={props => (
              <EditNote
                notes={this.filterNote()}
                selectHandler={this.selectHandler}
                editNoteHandler={this.editNote}
                editSubmitHandler={this.editSubmitHandler}
              />
            )}
          /> */}
          <DeleteNote
            notes={this.filterNote()}
            sumbitDelete={this.submitDelete}
          />
          {/* <Route
            path="/note/:id/delete"
            render={props => (
              <DeleteNote
                notes={this.filterNote()}
                submitDelete={this.submitDelete}
              />
            )}
          /> */}
        </Container>
      </MainBack>
    );
  }
}

export default App;
