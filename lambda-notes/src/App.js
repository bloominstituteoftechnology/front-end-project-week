import React, { Component } from 'react';
import {Route} from "react-router-dom";

import Header from "./Components/Header"
import NoteList from "./Components/NoteList"
import CreateNote from "./Components/CreateNoteForm"
import NoteView from "./Components/NoteView"
import EditNote from "./Components/EditNoteForm"
import DeleteModal from './Components/DeleteModal';
import {AppContainer, DisplayContainer} from "./Styles/Styles"

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <DisplayContainer>
          <Route exact path="/" component={NoteList}/>
          <Route path="/create" component={CreateNote}/>
          <Route path="/note/:id" render={(props) => {
              return(<NoteView {...props}/>)}}
          />
          <Route path="/edit/:id" render={(props) => {
              return(<EditNote {...props}/>)}}
          />
        </DisplayContainer>
        <Route path="/note/:id/delete" render={(props) => {
            return(<NoteView {...props}/>, <DeleteModal {...props}/>)}}
        />
      </AppContainer>
    )
  }
}

export default App;