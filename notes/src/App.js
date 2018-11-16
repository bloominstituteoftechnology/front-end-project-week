import React, { Component } from 'react';
import {Route} from "react-router-dom";

import Header from "./Components/Header"
import NoteList from "./Components/NoteList"
import CreateNote from "./Components/CreateNoteForm"
import NoteView from "./Views/NoteView"
import EditNote from "./Components/EditNoteForm"
import DeleteConfirmation from './Components/DeleteConfirmation';
// import {AppContainer, DisplayContainer} from "./Styles/Styles"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <Header />
        <div className="routeContainer">
          <Route exact path="/" component={NoteList}/>
          <Route path="/create" component={CreateNote}/>
          <Route path="/note/:id" render={(props) => {
              return(<NoteView {...props}/>)}}
          />
          <Route path="/edit/:id" render={(props) => {
              return(<EditNote {...props}/>)}}
          />
        </div>
        <Route path="/note/:id/delete" render={(props) => {
            return(<NoteView {...props}/>, <DeleteConfirmation {...props}/>)}}
        />
      </div>
    );
  }
}

export default App;
