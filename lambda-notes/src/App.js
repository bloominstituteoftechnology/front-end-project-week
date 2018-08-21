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
          title: "Bake Bread",
          description: "Make bread for the cat"
        },
        {
          id: 1,
          title: "Bake Cookies",
          description: "Make cookies for the cat"
        },
        {
          id: 2,
          title: "Bake Lasagna",
          description: "Make lasagna for the cat"
        },
        {
          id: 3,
          title: "Bake Mac",
          description: "Make mac for the cat"
        },
        {
          id: 4,
          title: "Bake Steak",
          description: "Make steak for the cat"
        },
        {
          id: 5,
          title: "Bake Rice",
          description: "Make rice for the cat"
        },
        {
          id: 6,
          title: "Bake Salad",
          description: "Make salad for the cat"
        },
        {
          id: 7,
          title: "Bake Tea",
          description: "Make tea for the cat"
        },
        {
          id: 8,
          title: "Bake Fish",
          description: "Make fish for the cat"
        },
        {
          id: 9,
          title: "Bake Tacos",
          description: "Make tacos for the cat"
        }
      ],
      noteTitle: "",
      noteDescription: "",
      isOpen: false,
      loading: false,
      success: false
    };
  }

  inputChangeHandler = event => {
    // console.log("InputChangeHandler", event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  submitNewNoteHandler = event => {
    event.preventDefault();
    console.log("Working Submit Handler", this.props);
    let newNotesArray = this.state.notes.slice();
    // gets last item in note array
    let lastIndex = this.state.notes.slice(-1)[0];
    // get id from item and add 1 for new id
    lastIndex = lastIndex.id + 1;
    console.log(lastIndex, "LastIndex");
    let newNote = {
      id: lastIndex,
      title: this.state.noteTitle,
      description: this.state.noteDescription
    };
    newNotesArray.push(newNote);
    console.log("NewNote", newNotesArray);
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
    console.log("Modififed Note Array", newNotesArray);
    this.setState({ notes: newNotesArray, noteTitle: "", noteDescription: "" });
  };

  render() {
    console.log("noteTitle", this.state.noteTitle);
    console.log("noteDescription", this.state.noteDescription);
    console.log("noteDescription", this.state.notes);
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
            <IndividualNote {...props} notes={this.state.notes} />
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
        {/* <Route
          path={"/delete/:id"}
          render={props => <DeleteNote {...props} notes={this.state.notes} />}
        /> */}
      </div>
    );
  }
}

export default App;
