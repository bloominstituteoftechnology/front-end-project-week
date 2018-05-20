import React, { Component } from "react";
import SideBar from "./components/SideBar/SideBar";
import ListView from "./components/ListView/ListView";
import "./App.css";
import Route from "react-router-dom/Route";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { id: 2, title: "Note Title", text: "lorem ipsum", completed: false },
        { id: 1, title: "Note Title", text: "lorem ipsum", completed: false },
        { id: 3, title: "Note Title", text: "lorem ipsum", completed: false },
        { id: 4, title: "Note Title", text: "lorem ipsum", completed: false },
        { id: 5, title: "Note Title", text: "lorem ipsum", completed: false },
        { id: 6, title: "Note Title", text: "lorem ipsum", completed: false },
        { id: 7, title: "Note Title", text: "lorem ipsum", completed: false },
        { id: 8, title: "Note Title", text: "lorem ipsum", completed: false },
        { id: 9, title: "Note Title", text: "lorem ipsum", completed: false }
      ]
    };
  }

  render = () => {
    return (
      <div className="App">
        <SideBar />
        <Route
          exact
          path="/"
          render={props => <ListView notes={this.state.notes} />}
        />
      </div>
    );
  };
}

export default App;
