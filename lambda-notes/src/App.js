import React, { Component } from 'react';
import './App.css';

import NotesList from "./components/NotesList";
import {notes} from './data';
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

  componentDidMount() {
    this.setState({notes: notes});
  }


  render() { 
    return ( 
      <div>
      <NotesList
      notes={this.state.notes} />
      </div>
     );
  }
}
 
export default App;