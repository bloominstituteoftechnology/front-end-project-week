import React, { Component } from "react";
import { Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import ViewNotes from "./components/ViewNotes";
import ExpandedNote from "./components/ExpandedNote";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      notes: [
        {
          title: "E plurbus unum",
          content: "dolla dolla bills yall",
          id: 0
        },
        {
          title: "backflip?",
          content: "I sure hope so",
          id: 1
        },
        {
          title: "Best idea ever",
          content: "Shoot, I forgot :(",
          id: 2
        },
        {
          title: "uhh some other note",
          content: "yea...",
          id: 3
        },
        {
          title: "uhh some other note",
          content: "yea...",
          id: 4
        },
        {
          title: "uhh some other note",
          content: "yea...",
          id: 5
        },
        {
          title: "uhh some other note",
          content: "yea...",
          id: 6
        }
      ],
      selected: 0
    };
  }

  selectNote = id => {
    this.setState({ selected: id });
  };

  changeHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  saveNote = ev => {
    ev.preventDefault();
    if (this.state.title === "" || this.state.content === "") {
      alert("Please fill in all of the required fields");
    } else {
      this.setState({
        notes: [
          ...this.state.notes,
          {
            title: this.state.title,
            content: this.state.content,
            id: this.state.notes.length
          }
        ],
        title: "",
        content: ""
      });
      alert("Note saved!");
    }
  };

  saveEdit = (ev, id) => {
    ev.preventDefault();
    // this.setState({
    //   notes: [
    //     ...this.state.notes.filter(note => {
    //       return note.id !== id;
    //     }),
    //     {
    //       title: this.state.title,
    //       content: this.state.content,
    //       id: id
    //     }
    //   ],
    //   title: "",
    //   content: ""
    // });
    if (this.state.text === "" || this.state.content === "") {
      alert("Please fill in all of the required fields");
    } else {
      const notesCopy = this.state.notes;
      this.setState({
        notes: [
          ...notesCopy.slice(0, id),
          {
            title: this.state.title,
            content: this.state.content,
            id: id
          },
          ...notesCopy.slice(id + 1, notesCopy.length)
        ],
        title: "",
        content: ""
      });
      alert("edit saved!");
    }
  };

  deleteNote = (ev, id) => {
    ev.preventDefault();
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id < id) {
          return note;
        }
        return {
          title: note.title,
          content: note.content,
          id: note.id - 1
        };
      })
    });
    if (this.state.notes.length > 1) {
      this.setState({
        notes: [
          ...this.state.notes.filter(note => {
            return note.id !== id;
          })
        ]
      });
    } else {
      this.setState({
        notes: []
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <SideBar />

          <Route
            exact
            path="/"
            render={props => (
              <ViewNotes
                {...props}
                notes={this.state.notes}
                selectNote={this.selectNote}
              />
            )}
          />
          <Route
            exact
            path="/:id(\d+)"
            render={props => (
              <ExpandedNote
                {...props}
                note={this.state.notes[this.state.selected]}
                deleteNote={this.deleteNote}
              />
            )}
          />
          <Route
            exact
            path="/create"
            render={props => (
              <CreateNote
                {...props}
                changeHandler={this.changeHandler}
                title={this.state.title}
                content={this.state.content}
                saveNote={this.saveNote}
              />
            )}
          />
          <Route
            exact
            path="/:id/edit"
            render={props => (
              <EditNote
                {...props}
                note={this.state.notes[this.state.selected]}
                changeHandler={this.changeHandler}
                title={this.state.title}
                content={this.state.content}
                saveEdit={this.saveEdit}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
