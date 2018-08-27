import React, { Component } from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import  Notes from "./components/Notes";
import Note from "./components/Note"
import Modal from './components/Modal'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes:[
      {
        id: 1,
        title: "note2",
        body: "Test Test Test Test"
      },
      {
        id: 2,
        title: "note1",
        body: "Test Test Test Test"
      },
      {
        id: 3,
        title: "note3",
        body: "Test Test Test Test"
      },
      {
        id: 4,
        title: "note4",
        body: "Test Test Test Test"
      }
    ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="sidenav">
          <Link className="li" to ="/notes" href="#about">View Your Notes</Link>
          <Link className="li" to = "/new" ref="#services">Create New Note</Link>
        </div>
        <Route exact path ="/" render={() =>
          <div>Welcome young master</div>} />
        <Route exact path = '/new' component ={Modal} />
        <Route exact path = '/notes' render = {() =>
          <div><Notes notes={this.state.notes}/></div>} />
        <Route path = "notes/:id" render ={(props) =>{
          return(<Note {...props}/>) }} />
      </div>
    );
  }
}

export default App;
