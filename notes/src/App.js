import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {Route} from "react-router-dom";

import Header from "./Components/Header"
import NoteList from "./Components/NoteList"
import CreateNote from "./Components/CreateNoteForm"
import {AppContainer, DisplayContainer} from "./Styles/Styles"

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <DisplayContainer>
          <Route exact path="/" component={NoteList}/>
          <Route path="/create" component={CreateNote}/>
        </DisplayContainer>
      </AppContainer>
    );
  }
}

export default App;
