import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Notesview from "./components/Notesview";
import CreateNote from "./components/InputNote";
import SingleNote from "./components/SingleNote";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [{ title: "", body: "" }],
      nextID: 5,
      mode: "ADD"
    };
  }
  addNote = noteObj => {
    let prevNotes = this.state.notes.slice();
    const fullObj = {
      ...noteObj,
      id: this.state.nextID
    };
    prevNotes.push(fullObj);

    this.setState(
      prevState => ({
        nextID: prevState.nextID + 1,
        notes: prevNotes
      }),
      () => {}
    );
  };
  editNote = noteObj => {
    let prevNotes = this.state.notes.slice();
    const moddedArray = prevNotes.map(e => {
      if (e.id === noteObj.id) {
        e.title = noteObj.title;
        e.body = noteObj.body;
        return e;
      } else {
        return e;
      }
    });
    this.setState({
      notes: moddedArray
    });
  };
  deleteNote = noteID => {
    let prevNotes = this.state.notes.slice();
    const moddedArray = prevNotes.filter(e => {
      if (e.id !== noteID) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({
      notes: moddedArray
    });
  };
  componentDidMount = () => {
    this.setState({
      notes: [
        {
          title: "test",
          body: "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
          id: 0
        },
        {
          title: "test2",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          id: 1
        },
        {
          title: "test3",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          id: 2
        },
        {
          title: "test4",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          id: 3
        },
        {
          title: "test5",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          id: 4
        }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Switch className='switch'>
          <Route
            exact
            path="/input"
            render={props => (
              <CreateNote
                add={this.addNote}
                {...props}
                mode={this.state.mode}
              />
            )}
          />
          <Route
            exact
            path="/input/:id"
            render={props => (
              <CreateNote
                edit={this.editNote}
                {...props}
                notes={this.state.notes}
              />
            )}
          />
          <Route
            exact
            path="/:id"
            render={props => (
              <SingleNote
                {...props}
                notes={this.state.notes}
                delete={this.deleteNote}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={props => <Notesview {...props} notes={this.state.notes} />}
          />
          <Route
            path="/"
            render={props => <Notesview {...props} notes={this.state.notes} />}
          />
        </Switch>
       
      </div>
    );
  }
}

export default App;
