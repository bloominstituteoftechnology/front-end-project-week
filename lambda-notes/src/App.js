import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import EditView from './components/NoteAppViews/EditView'
import './App.css';
import NoteAppContainer from './components/NoteAppContainer/NoteAppContainer'


class App extends Component {
  render() {
    return (
     <div className="App">
     <Route exact path="/" component={NoteAppContainer} />
     <Route exact path="/edit/" component={EditView}/>
     </div>
    );
  }
}

export default App;
