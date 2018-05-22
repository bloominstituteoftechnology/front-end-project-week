import React, {Component} from "react";
import { Route } from "react-router-dom";

import NewNote from "./components/NewNote";
import SideBar from "./components/SideBar";
import NoteView from "./components/NoteView";
import Note from "./components/Note";
import NoteBody from "./components/NoteBody";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={SideBar} />
        <Route exact path="/" component={NoteBody} />
        <Route path="/note/new" component={NewNote} />
        <Route path="/note/:id" component={NoteView} />
      </div>
    );
  }
}
export default App;
