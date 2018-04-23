import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import NoteList from "./NoteList";
import "./App.css";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra dui eu erat vestibulum scelerisque. Pellentesque iaculis, enim at fringilla imperdiet, velit ligula ornare magna, eu cursus nulla justo a leo. Aenean condimentum porta dui. Nullam iaculis et sem nec viverra. Ut rhoncus metus mi, at malesuada mauris volutpat sed. Nullam vulputate, elit at interdum vestibulum, velit erat tincidunt mi, eu sodales felis ligula vel nulla. Quisque sed magna vel ante faucibus egestas. Fusce congue ligula mauris, et aliquet lorem tincidunt sed. In ultricies aliquet erat, sed iaculis leo.";
const defaultNotes = [
  { id: 1, title: "Test Note 1", content: lorem },
  { id: 2, title: "Test Note 2", content: lorem },
  { id: 3, title: "Test Note 3", content: lorem },
  { id: 4, title: "Test Note 4", content: lorem },
  { id: 5, title: "Test Note 5", content: lorem },
  { id: 6, title: "Test Note 6", content: lorem },
  { id: 7, title: "Test Note 7", content: lorem }
];

class App extends Component {
  state = {
    notes: defaultNotes
  };

  render() {
    return (
      <div className="App">
        <div className="App-sidebar">
          <Sidebar />
        </div>
        <div className="App-content">
          <Route
            path="/notes"
            render={() => <NoteList notes={this.state.notes} />}
          />
          <Route path="/create" render={() => <h1>Create Note Content</h1>} />
        </div>
      </div>
    );
  }
}

export default App;
