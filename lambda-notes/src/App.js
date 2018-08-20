import React, { Component } from 'react';
import SideNav from './Components/SideNav'; 
import { Route } from 'react-router-dom'; 
import NotesListView from './Components/NotesListView'; 
import CreateNoteView from './Components/CreateNoteView'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <Route exact path = "/" component = {NotesListView} />
        <Route path = "/new" component = {CreateNoteView} />
        
      </div>
    );
  }
}

export default App;
