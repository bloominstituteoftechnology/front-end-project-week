import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Banner from './Banner';
import ListView from './ListView';
import CreateNote from './CreateNote';
import ViewNote from './ViewNote';
import EditNote from './EditNote';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { title: 'Note Title 1', content: 'Note Content 1'},
        { title: 'Note Title 2', content: 'Note Content 2'},
        { title: 'Note Title 3', content: 'Note Content 3'},
        { title: 'Note Title 4', content: 'Note Content 4'},
        { title: 'Note Title 5', content: 'Note Content 5'},
        { title: 'Note Title 6', content: 'Note Content 6'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Banner />
        <Route exact path='/' render={() => <ListView notes={this.state.notes} />} />
        <Route exact path='/create' component={CreateNote} />
        <Route exact path='/view' component={ViewNote} />
        <Route exact path='/edit' component={EditNote} />
      </div>  
    );
  }
}

export default App;
