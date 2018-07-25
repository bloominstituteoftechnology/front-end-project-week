import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DisplayNotes from './components/DisplayNotes';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';

class App extends Component {
  render() {
    console.log('log 1', this.props);
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={DisplayNotes} />
            <Route path="/create" component={CreateNote} />
            <Route path="/note/:id" component={Note} />
            <Route path="/edit/:id" component={EditNote} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
