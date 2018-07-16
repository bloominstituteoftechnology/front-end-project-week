import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import NotesList from "./components/NotesList";
import NoteForm from './components/NoteForm';
import Nav from './components/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      notes : [{
        title: 'Note 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. '
    },
    {
        title: 'Note 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. '
    },
    {
        title: 'Note 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. '
    },
    {
        title: 'Note 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. '
    }],
      title: '',
      content: '',
     }
  }

  componentDidMount() {
    this.setState({notes: this.state.notes});
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
      <Route exact path='/' render={(props) => <NotesList {...props}notes={this.state.notes} /> } />  
  <Route path='/form' render={(props) => <NoteForm {...props} value={this.state.title} handleAddNote={this.handleAddNote} handleInputChange={this.handleInputChange} /> } />
      </div>
     );
  }
}
 
export default App;