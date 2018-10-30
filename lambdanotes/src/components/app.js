import React, { Component } from "react";
import { Route } from "react-router-dom";
import SideBar from "./SideBar";
import NoteListPage from "./NoteListPage";
import NotePage from "./NotePage";
import NewNotePage from "./NewNotePage";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path="/" component={NoteListPage} />
        <Route path={`/note/:id`} component={NotePage} />
        <Route path="/new" component={NewNotePage} />
      </div>
    );
  }
}

export default App;
