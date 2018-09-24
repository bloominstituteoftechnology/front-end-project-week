import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SideBar from './SideBar';
import NoteView from './NoteView';
import CreateNew from './CreateNew';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="note-view">
        <Switch>
          <Route exact path='/viewcards' 
          component={NoteView} />
          <Route path='/createcards' 
          component={CreateNew}
          />
        </Switch>
          
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
