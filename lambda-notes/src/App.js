import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {Route} from 'react-router-dom';


import Header from "./Components/Header";
import NoteList from "./Components/NoteList";
import CreateNote from "./Components/CreateNoteForm";
import {AppContainer, DisplayContainer} from "./Styles/Styles";

class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: []
    }
  }
  componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
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
        </DisplayContainer>
      </AppContainer>
    </div>
    );
  }
}

export default App;
