import React, { Component } from 'react';
import { Route } from 'react-router';

import './App.css';
import { NotesDisplay } from './components/NotesDisplay/NotesDisplay';
import NewNote from './components/NewNote/NewNote';
import { Notes } from './components/Notes/Notes';
import Edit from './components/Edit/Edit';  

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],

    }
  }
  
  componentDidMount() {
    const note = ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut deserunt consequuntur autem, deleniti perspiciatis placeat commodi inventore ducimus'];

    this.setState ({ note });
}

  render() {
    return (
      <div>
        <Route exact path = '/' render={(props) => (
          <NotesDisplay {...props} 
          note={this.state.note} 
          /> 
          )}/>

        <Route path = '/newNote' component={ NewNote } />
          
        <Route path = '/noteView' render={(props) => (
          <Notes {...props} 
          note={this.state.note} 
          /> )}/>

        <Route path = '/edit' component= { Edit } />
      </div>
    );
  }
}

export default App;
