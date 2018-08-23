import React, { Component } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import NoteList from "./components/Notes/NoteList";
import CreateNote from "./components/Notes/CreateNote";
import NoteNav from "./components/Notes/NoteNav";

class ButtonNav extends Component {
  render() {
    return (
      <div className="App__Top-div">
        <button className="App__Top-buttons">Login</button>
        <button className="App__Top-buttons">Register</button>
        <button className="App__Top-buttons">Logout</button>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      port: 0
    };
  }

  render() {
    {
      document.title = "TombStone";
    }
    return (
      <div className="App">
        <div className="App__container">
          <div className="App__left">
            {" "}
            {/* start of left side div */}
            <ButtonNav />
            <h1>TombStone Notes</h1>
            <Link to="/viewnotes">
              <div className="App__left-buttons">
                <span>View Your Notes</span>
              </div>
            </Link>
            <Link to="/NewNote">
              <div className="App__left-buttons">
                <span>+ Create New Note</span>
              </div>
            </Link>
          </div>{" "}
          {/* end of left side div */}
          <div className="App__right">
            {" "}
            {/* start of right side div */}
            <NoteNav />
            <Route exact path="/NewNote" component={CreateNote} />
            <Route exact path="/viewnotes" component={NoteList} />
          </div>{" "}
          {/* end of right side div */}
        </div>{" "}
        {/* container div end */}
      </div>
    );
  }
}

export default App;
