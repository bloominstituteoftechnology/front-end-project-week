import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/sideBar";
import NoteList from "./components/noteList";
import { getNotes } from "./dummyNotes";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import SingleNote from "./components/singleNote";
import NoteForm from "./components/noteForm";

class App extends Component {
  state = {
    notes: getNotes()
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={SideBar} />
          <Route
            path="/notelist"
            render={state => <NoteList notes={this.state.notes} exact />}
          />
          {/*<Route path={`/note/${id}`} component={SingleNote} />*/}
          <Route path="/noteform" component={NoteForm} exact />
        </div>
      </Router>
    );
  }
}

export default App;
