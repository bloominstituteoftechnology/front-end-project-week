import React, { Component } from 'react';
import SideNav from './Components/SideNav'; 
import { Route } from 'react-router-dom'; 
import NotesListView from './Components/NotesListView'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <Route path = "/" component = {NotesListView} />
      </div>
    );
  }
}

export default App;
