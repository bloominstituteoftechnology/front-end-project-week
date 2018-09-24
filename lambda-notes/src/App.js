import React, { Component } from 'react';
import './App.css';
import ListView from './components/ListView';
import ActionPanel from './components/ActionPanel';
import {Route} from 'react-router-dom';
import NewNoteForm from './components/newNoteForm';
import GotOne from './components/GotOne';;



class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row m-3">
          <div className="col-md-3 p-5 border-left action-container">
            <ActionPanel />
          </div>
          <div className={`col-md-9 p-5 border right-side ${
            window.location.href.length > 22 ? 'vh-100' : null
          }`}>
            <Route exact path="/" component={ListView} />
            <Route exact path="/newNote" component={NewNoteForm} />
            <Route path="/:title/:id" component={GotOne} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
