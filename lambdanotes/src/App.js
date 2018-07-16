import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/sidebar/sidebar";
import { notesData } from "./data";
import ListNotes from "./components/notes/listnotes";
import NewNote from "./components/functions/newnote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 0,
          tags: ["tag", "otherTag"],
          title: "Note Title",
          textBody: "Note Body"
        }
      ],
      title: "",
      textBody: ""
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lambda Notes Front-End-Project</h1>
        </header>
        <SideBar />
        <ListNotes notes={this.state.notes} />
        <NewNote
          // tvalue={this.state.title}
          // bvalue={this.state.textBody}
          editNoteHandler={this.editNoteHandler}
          handleSubmitNote={this.handleSubmitNote}
          placeholder={this.state.placeholder}
        />
      </div>
    );
  }
}

export default App;
