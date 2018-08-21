import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Notesview from "./components/Notesview";
import CreateNote from "./components/InputNote";
import SingleNote from "./components/SingleNote";
import { Route, Switch } from "react-router-dom";
import fileDownload from "js-file-download"

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
        e.tags = noteObj.tags;
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
  invertCheck = (itemID, checkName) => {
    let prevNote = this.state.notes[itemID];
    prevNote.checklist.forEach(element => {
      if (element.name === checkName) {
        element.checked = !element.checked;
      }
    });
  };
  
  jsonToCSV = () => {
    //https://stackoverflow.com/questions/8847766/how-to-convert-json-to-csv-format-and-store-in-a-variable
    const items = this.state.notes;
    const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
    const header = Object.keys(items[0]);
    let csv = items.map(row =>
      header
        .map(fieldName => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    csv.unshift(header.join(","));
    csv = csv.join("\r\n");

    fileDownload(csv, 'data.csv')
  };
  componentDidMount = () => {
    this.setState({
      notes: [
        {
          title: "test",
          body:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
          id: 0,
          tags: [],
          checklist: [{ checked: false, name: "AAAA" }]
        },
        {
          title: "test2",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          id: 1,
          tags: [],
          checklist: []
        },
        {
          title: "test3",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          id: 2,
          tags: [],
          checklist: []
        },
        {
          title: "test4",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          id: 3,
          tags: [],
          checklist: []
        },
        {
          title: "test5",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          id: 4,
          tags: [],
          checklist: []
        }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <Sidebar export ={this.jsonToCSV}/>
        <Switch className="switch">
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
                invert={this.invertCheck}
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
