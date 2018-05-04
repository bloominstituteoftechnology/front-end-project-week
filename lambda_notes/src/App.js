import React, { Component } from 'react';
import './App.css';
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sophie's react app</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/

import Navigation from './Components/Navigation';
import ListNotes from './Components/ListNotes';
import CreateNewNote from './Components/CreateNewNote';
import NoteView from './Components/NoteView';
import EditNote from './Components/EditNote';
import RegisterUser from './Components/RegisterUser';
import { Route } from 'react-router-dom';
 
class App extends Component {
  constructor() {
    super();
    this.state = {
       notes: [
       {
        title: 'Note 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        id: 0
       },
       {
        title: 'Note 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        id: 1
       },
       {
        title: 'Note 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        id: 2
       },
       {
        title: 'Note 4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        id: 3
       },
       {
        title: 'Note 5',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        id: 4
       },
       {
        title: 'Note 6',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        id: 5
       },
       {
        title: 'Note 7',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        id: 6
       },
       {
        title: 'Note 8',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        id: 7
       },
       {
        title: 'Note 9',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        id: 8
       }
    ]
  };
}
   render() {
    return (
       <div className="appContainer">
          <div className="navCol">
           <Navigation />
          </div>
           <div className="listCol">
             <Route
               exact
               path="/"
               render={() => <ListNotes notes={this.state.notes} />}
             />
             <Route exact path="/add" component={CreateNewNote} />
             <Route exact path="/notes/:id" component={NoteView} />
             <Route exact path="/notes/:id/EditNote" component={EditNote} />
             <Route exact path="/register" component={RegisterUser} />
           </div>
         </div>
    );
   }
  }
  
export default App;
