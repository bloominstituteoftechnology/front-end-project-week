import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Notesview from "./components/Notesview";
import CreateNote from "./components/InputNote";
import SingleNote from "./components/SingleNote";
import { Route, Switch } from "react-router-dom";
import fileDownload from "js-file-download";

class App extends Component {
  // what a note object looks like { title: string, body: string(maybe markdown formatted), id: num, checklist: [{checked: boolee, name:string}], tags: [string] }
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      nextID: 0,
      mode: "ADD"
    };
  }
  //these methods mainly excist to be passed down 
  addNote = noteObj => {
    let prevNotes = [...this.state.notes];
    const fullObj = {
      ...noteObj,
      id: this.state.nextID //this is tracked via ls so it will presist. IDs can be assumed to never have duplicates
    };
    prevNotes.push(fullObj);
    this.setState(
      prevState => ({
        nextID: prevState.nextID + 1,
        notes: prevNotes
      })
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
    let prevNote = this.state.notes.slice();
    let changedcheck = prevNote[itemID].checklist.map(element => {
      if (element.name === checkName) {
        element.checked = !element.checked;
        return element;
      } else {
        return element;
      }
    });
    prevNote[itemID].checklist = changedcheck;
    this.setState({
      notes: prevNote
    });
  };
  //this is to allow rearrangement via drag and drop of cards
  changeOrder = newOrderProp => {
    this.setState({
      notes: newOrderProp
    });
  };

  jsonToCSV = () => {
    //https://stackoverflow.com/questions/8847766/how-to-convert-json-to-csv-format-and-store-in-a-variable
    const items = this.state.notes;
    const replacer = (key, value) => (value === null ? "" : value); 
    const header = Object.keys(items[0]);
    let csv = items.map(row =>
      header
        .map(fieldName => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    csv.unshift(header.join(","));
    csv = csv.join("\r\n");
    fileDownload(csv, "data.csv");
  };
  //handles saving to LS. Runs everytime state changes. If it's not saving make sure state is updating
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.notes !== prevState.notes) {
      localStorage.setItem("notes", JSON.stringify(this.state.notes));
      localStorage.setItem("nextID", JSON.stringify(this.state.nextID));
    }
  };
  componentDidMount = () => {
    if (localStorage.getItem("nextID") !== null) {
      const lsID = JSON.parse(localStorage.getItem("nextID"));
      const lsNotes = JSON.parse(localStorage.getItem("notes"));
      this.setState({
        notes: lsNotes,
        nextID: lsID
      });
    } else {
      //this is so they don't get set to null
      localStorage.setItem("notes", "[]");
      localStorage.setItem("nextID", 0);
    }
  };
  render() {
    return (
      <div className="App">
        <Sidebar export={this.jsonToCSV} />
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
            path="/"
            render={props => (
              <Notesview
                {...props}
                notes={this.state.notes}
                changeStateOrder={this.changeOrder}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
