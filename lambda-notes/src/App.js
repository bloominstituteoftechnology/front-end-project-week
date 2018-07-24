import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={DisplayNotes} />
          <Route path="/:id" component={Note} />
          <Route path="/create" component={CreateNote} />
          <Route path="/edit" component={EditNote} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
