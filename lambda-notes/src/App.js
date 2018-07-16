import React, { Component } from 'react';
import './App.css';

import NotesList from "./components/NotesList";
import NoteForm from './components/NoteForm';
import {notes} from './data';
import Nav from './components/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      notes: [],
      title: '',
      content: '',
     }
  }

  componentDidMount() {
    this.setState({notes: notes});
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNote = (e) => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({title: this.state.title, content:this.state.content});
    this.setState({notes})
}



  render() { 
    return ( 
      <div className="App">
        <Nav />
        {/* <NoteForm
        value={this.state.title}
        handleAddNote={this.handleAddNote}
        handleInputChange={this.handleInputChange}

      /> */}
      <NotesList
      notes={this.state.notes} />
      </div>
     );
  }
}
 
export default App;