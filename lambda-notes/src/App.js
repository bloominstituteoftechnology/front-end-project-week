import React, { Component } from 'react';
import {Route} from "react-router-dom";

import Header from "./Components/Header"
import NoteList from "./Components/NoteList"
import CreateNoteForm from "./Components/CreateNoteForm"
import NoteView from "./Components/NoteView"
import EditNoteForm from "./Components/EditNoteForm"
import DeleteModal from './Components/DeleteModal';
import {AppContainer, DisplayContainer} from "./Styles/Styles"


class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <DisplayContainer>
        <Route exact path="/create" component={CreateNoteForm} />
        <Route exact path="/note/:id" component={NoteView} />
        <Route exact path="/" component={NoteList} />
        <Route exact path="/note/edit/:id" component={EditNoteForm} />
        <Route exact path="/note/delete/:id" component={DeleteModal} />
        </DisplayContainer>
      </AppContainer>
    )
  }
}

export default App;