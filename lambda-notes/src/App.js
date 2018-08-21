import React, { Component } from 'react';
import './App.css';
import { Create, Delete, Edit, List, ListContainer, Navigation, Note } from './components';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={ListContainer} />
        <Route path="/Create" component={Create} />
        <Route path="/Note" component={Note} />
      </div>
    );
  }
}

export default App;