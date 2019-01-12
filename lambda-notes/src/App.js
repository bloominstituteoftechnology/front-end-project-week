import React, { Component } from 'react';
import {Route} from "react-router-dom";

import SideBar from "./Components/SideBar"
import NoteList from "./Components/NoteList"
import CreateNoteForm from "./Components/CreateNoteForm"
import NoteView from "./Components/NoteView"
import EditNoteForm from "./Components/EditNoteForm"
import DeleteModal from './Components/DeleteModal'
import {AppContainer, DisplayContainer} from "./Styles/Styles"


class App extends Component {

  render() {
    return (
      <AppContainer>
        <SideBar />
         <DisplayContainer>
          <Route exact path="/" component={NoteList}/>
          <Route path="/create" component={CreateNoteForm}/>
          <Route path="/note/:id" render={(props) => {
              return(<NoteView {...props}/>)}}
          />
          <Route path="/edit/:id" render={(props) => {
              return(<EditNoteForm {...props}/>)}}
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