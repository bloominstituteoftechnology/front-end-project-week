import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {Route} from 'react-router-dom';


import Header from "./Components/Header";
import NoteList from "./Components/NoteList";
import CreateNote from "./Components/CreateNoteForm";
import NoteView from "./Views/NoteView";
import EditNote from "./Components/EditNoteForm";
import {AppContainer, DisplayContainer} from "./Styles/Styles";
import DeleteConfirmation from "./Components/DeleteConfirmation";

class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: []
    }
  }
  componentDidMount() {
    axios.get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => {
      this.setState({notes: response.data})
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
    <div className="App">
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
            return(<NoteView {...props}/>, <DeleteConfirmation {...props}/>)}}
        />
      </AppContainer>
    </div>
    );
  }
}

export default App;
