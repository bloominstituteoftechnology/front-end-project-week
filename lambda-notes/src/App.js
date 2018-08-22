import React, { Component } from "react";
import { Route } from "react-router-dom";
import { MainNav } from "./components/mainNav/MainNav";
import { Notes } from "./components/noteList/Notes";
import { IndividualNote } from "./components/noteList/IndividualNote";
import { EditNote } from "./components/modifyNote/EditNote";
import { CreateNote } from "./components/modifyNote/CreateNote";
// import { DeleteNote } from "./components/modifyNote/DeleteNote";

import "./css_styles/app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 0,
          title: "Note 0",
          description: "We have a fantastic little sky! There it is."
        },
        {
          id: 1,
          title: "Note 1",
          description: "We have a fantastic little sky! There it is."
        },
        {
          id: 2,
          title: "Note 2",
          description: "We have a fantastic little sky! There it is."
        },
        {
          id: 3,
          title: "Note 3",
          description: "We have a fantastic little sky! There it is."
        },
        {
          id: 4,
          title: "Note 4",
          description: "We have a fantastic little sky! There it is."
        },
        {
          id: 5,
          title: "Note 5",
          description: "We have a fantastic little sky! There it is."
        },
        {
          id: 6,
          title: "Note 6",
          description: "We have a fantastic little sky! There it is."
        },
        {
          id: 7,
          title: "Note 7",
          description: "We have a fantastic little sky! There it is."
        },
        {
          id: 8,
          title: "Note 8",
          description: "We have a fantastic little sky! There it is."
        },
        {
          id: 9,
          title: "Note 9",
          description: "We have a fantastic little sky! There it is."
        }
      ],
      noteTitle: "",
      noteDescription: "",
      update: false
    };
  }

  componentDidUpdate(prevProps) {
    console.log("COMPONENT DDID MOUNT ON INDIVIDUAL", this.state);
    if (this.props.notes !== prevProps.notes) {
      this.setState({ notes: this.props.notes });
    }
  }

  inputChangeHandler = event => {
    // console.log("InputChangeHandler", event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  submitNewNoteHandler = event => {
    event.preventDefault();
    // console.log("Working Submit Handler", this.props);
    let newNotesArray = this.state.notes.slice();
    // gets last item in note array
    let lastIndex = this.state.notes.slice(-1)[0];
    // get id from item and add 1 for new id
    lastIndex = lastIndex.id + 1;
    // console.log(lastIndex, "LastIndex");
    let newNote = {
      id: lastIndex,
      title: this.state.noteTitle,
      description: this.state.noteDescription
    };
    newNotesArray.push(newNote);
    // console.log("NewNote", newNotesArray);
    this.setState({ notes: newNotesArray, noteTitle: "", noteDescription: "" });
    // console.log("HISTORY", this.props);
    // this.props.history.push("/");
  };

  modifyNoteHandler = event => {
    event.preventDefault();
    let newNotesArray = this.state.notes.slice();
    let noteNumber = event.target.attributes.getNamedItem("notenumber").value;

    newNotesArray[noteNumber].title = this.state.noteTitle;
    newNotesArray[noteNumber].description = this.state.noteDescription;
    // console.log("Modififed Note", newModifiedArray);
    // console.log("Modififed Note Array", newNotesArray);
    this.setState({ notes: newNotesArray, noteTitle: "", noteDescription: "" });
  };

  deleteNoteHandler = iNumber => {
    console.log("INDEX NUMBER DELETE HANDLER", iNumber);
    let indexNumber = parseInt(iNumber, 10);
    let newNotesArray = this.state.notes.slice();
    // newNotesArray.splice(indexNumber, 1);
    // console.log("FIRING!!!!!!", newNotesArray[0].id, indexNumber);
    newNotesArray = newNotesArray.filter(note => note.id !== indexNumber);
    console.log("DELETEHANDLER", this.props);
    // newNotesArray = newNotesArray.splice(indexNumber, 1);
    // console.log("removedItem", removedItem);
    // console.log("newNotesArray", newNotesArray);
    this.setState({ notes: newNotesArray, update: true });
  };

  render() {
    console.log("Main App Notes", this.state.notes);
    return (
      <div className="mainAppDiv">
        <Route path={"/"} component={MainNav} />
        <Route
          exact
          path={"/"}
          render={props => <Notes {...props} notes={this.state.notes} />}
        />
        <Route
          path={"/notes/:id"}
          render={props => (
            <IndividualNote
              {...props}
              notes={this.state.notes}
              deleteNoteHandler={this.deleteNoteHandler}
            />
          )}
        />
        <Route
          path={"/create"}
          render={props => (
            <CreateNote
              {...props}
              // notes={this.state.notes}
              // noteTitle={this.state.noteTitle}
              // noteDescription={this.state.noteDescription}
              inputChangeHandler={this.inputChangeHandler}
              submitNewNoteHandler={this.submitNewNoteHandler}
              // createNewNoteSubmitted={this.state.createNewNoteSubmitted}
            />
          )}
        />
        <Route
          path={"/edit/:id"}
          render={props => (
            <EditNote
              {...props}
              notes={this.state.notes}
              inputChangeHandler={this.inputChangeHandler}
              modifyNoteHandler={this.modifyNoteHandler}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
