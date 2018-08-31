import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SideNav from "./components/SideNav";
import ListView from "./components/ListView";
import CreateView from "./components/CreateView";
// import NoteView from "./components/NoteView";
// import EditView from './components/EditView';

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newNote: [{ title: "", content: "" }],
      notes: [{ note: "Test" }]
    };
  }

  noteHandler = e => {
    this.setState({ newNote: e.target.value });
  };

  submitNewNote = e => {
    e.preventDefault();
    const { notes } = this.state;
    const myNotes = { title: this.state.title, content: this.state.content };
    notes.push(myNotes);
    this.setState({ notes, myNotes: "" });
  };

  render() {
    return (
      // <Router>
      <div>
        <SideNav />
        <div>
          <CreateView onChange={this.noteHandler} />
          <ListView notes={this.state.notes} />
        </div>
      </div>
      // </Router>
    );
  }
}

//   render() {
//     return (
//       <Router>
//         {/* <React.Fragment className="App"> */}
//         {/* <SideNav> */}
//         <Route path="/" exact component={ListView} />
//         <Route path="/create" exact component={CreateView} />
//         {/* </SideNav> */}
//         {/* </React.Fragment> */}
//       </Router>
//     );
//   }
// }

export default App;
