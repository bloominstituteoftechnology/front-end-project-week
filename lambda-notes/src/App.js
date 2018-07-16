import React, { Component } from 'react';
import './App.css';

import NotesList from "./components/NotesList";
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      notes: [],
      title: '',
      content: '',
     }
  }


  render() { 
    return ( 
      <div>
      <NotesList />
      </div>
     );
  }
}
 
export default App;