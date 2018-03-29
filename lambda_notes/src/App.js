import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/SideBar'
import CreateNote from './components/CreateNote';
import List from './components/List';
import { getNotes } from './components/exampleNotes';
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
          <Route path="/list" render={state => <List notes={this.state.notes} exact />} />
          <Route path="/createnote" component={state => <CreateNote notes={this.state.notes} exact />} />
          <Route path='/delete/:id' component={List} exact />
          <Route path="/exampleNotes/:id" component={getNotes} toggleDeleteModal={this.toggleDeleteModal}
              processDelete={this.processDelete} />
        </div>
      </Router>
    );
  }
}

export default App;
