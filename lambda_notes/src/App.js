import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/SideBar'
import CreateNote from './components/CreateNote';
import List from './components/List';
import { getNotes } from './exampleNotes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
class App extends Component {

  state = {
    notes: getNotes()
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Sidebar} />
          <Route
            path="/list"
            render={state => <List notes={this.state.notes} exact />}
          />
          <Route
            path="/createnote"
            component={state => <CreateNote notes={this.state.notes} exact />}
          />
        
        
        </div>
      </Router> 
    );
  }
}

export default App;
