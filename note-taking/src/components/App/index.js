import React, { Component } from "react";
import "./App.css";
import CreateNotes from "../CreateNotes";
import Navigation from "../Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Notes from "../Notes";
import MainContent from "../MainContent";

class App extends Component {
  // const CreateNotes = () => {
  //   return (

  //   )
  // }

  render() {
    return (
      <div className="App">
        {/* <NotesSideBar /> */}
        <BrowserRouter>
          <div>
            <Navigation />
            <MainContent />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
