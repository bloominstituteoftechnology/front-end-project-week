import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SideBar from './SideBar';
import NoteView from './NoteView';
import CreateNew from './CreateNew';
import Notes from './Notes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="note-view">
        <Router> 
        <Switch> 
          <Route path='/viewcards' render={props => (
            <NoteView {...props} NoteView={Notes}
            />
          )}
          />
          <Route path='/createcards' 
          component={CreateNew}
          />
        </Switch>
        </Router>
          
        </div>
      </div>
    );
  }
}

export default App;
