import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import NewNote from './components/newnote/NewNote';
import NoteView from './components/noteview/NoteView';
import EditNote from './components/editnote/EditNote';
import DeleteNote from './components/deletenote/DeleteNote';
import fire from './components/newnote/fire.js';

class App extends Component {

  constructor(props){

    super(props);
    this.state = {
        notes: []
    };
  }

  handleSubmit = notes => {
    this.setState({
      notes: [...this.state.notes, notes]
    })
  };

  render() {
    console.log(this.state.notes);
    return (
      <div className="App">
        <Route exact path="/" 
          render={props => <Dashboard {...props} 
          notes={this.state.notes}/>}
        />
        <Route
          path="/create"
          render={props => <NewNote {...props} 
          handleSubmit={this.handleSubmit}
          />}
        />
        <Route path="/note/:id" component={ NoteView }/>
        <Route path="/edit/:id" component={ EditNote }/>
        <Route path="/delete" component={ DeleteNote }/>
      </div>
    );
  }
}

export default App;
