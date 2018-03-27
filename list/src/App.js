import React, { Component } from "react";
import logo from "./logo.svg";
import { NoteContainer } from "./components/noteContainer";

import "./App.css";

class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: "Title1",
        content:
          "Lorem ipsum dolor sit amet, ut eum novum rationibus mediocritatemLorem ipsum dolor sit amet, ut eum novum rationibus mediocritatemLorem ipsum dolor sit amet, ut eum novum rationibus mediocritatem"
      },
      { id: 1, title: "Title2", content: "testContent2" },
      {
        id: 2,
        title: "Title1",
        content:
          "Lorem ipsum dolor sit amet, ut eum novum rationibus mediocritatemLorem ipsum dolor sit amet, ut eum novum rationibus mediocritatemLorem ipsum dolor sit amet, ut eum novum rationibus mediocritatem"
      },
      {
        id: 3,
        title: "Title1",
        content:
          "Lorem ipsum dolor sit amet, ut eum novum rationibus mediocritatemLorem ipsum dolor sit amet, ut eum novum rationibus mediocritatemLorem ipsum dolor sit amet, ut eum novum rationibus mediocritatem"
      }
    ],

    newNote: { id: 0, title: "", content: "" },

  };

  componentDidMount() {
    this.setState();
  }

  handleChange = event => {
    console.log(this.state);
    const { name, value } = event.target;
    const {newNote, notes} = this.state;
    this.setState({newNote: {...newNote, [name]: value, id: notes.length}})
  };

  addNote = event => {
    event.preventDefault();
    const notesList = this.state.notes;
    notesList.push(this.state.newNote);
    this.setState({
      newNote: {},
      notes: notesList
    });
    const form = document.getElementById("inputForm");
    form.reset();
  };

  render() {
    return (
      <div className="App">
        <NoteContainer notes={this.state.notes} />
        <form id="inputForm">
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            value={this.state.title}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="content"
            value={this.state.content}
          />
          <button onClick={this.addNote} />
        </form>
      </div>
    );
  }
}

export default App;
