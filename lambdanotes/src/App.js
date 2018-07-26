import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import YourNotes from './components/YourNotes/YourNotes.js';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import CreateNote from './components/CreateNote/CreateNote.js';
import ViewSingleNote from './components/ViewSingleNote/ViewSingleNote.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      notes:[{
          title:'Note Title',
          content:'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
          id:`${Date.now()}`
      }],
      title:'',
      content:''
    };
  }


  addNote= event => {
    // event.preventDefault();
    const notes= this.state.notes.slice();
    notes.push({title:this.state.title, id:Date.now(), content:this.state.content});
    this.setState({notes});
  };

  deleteNote=(id) => {
    const notes= this.state.notes.slice();
    notes.filter(note => {
      return note.id !==id;
    })
    this.setState({notes});
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-sidebar">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lambda Notes</h1>
          <Link to ='/'>
            <button className='sidebar-button'>View Your Notes</button>
          </Link>
          <Link to ='/create'>
            <button className='sidebar-button'>+ Create New Note</button>
          </Link>
        </header>
    
        <Route exact path='/' render={props => (
            <YourNotes {...props} 
              notes={this.state.notes} 
            />
          )} 
        />

        <Route exact path='/create' render={props => (
            <CreateNote {...props} 
              handleInputChange={this.handleInputChange} 
              title={this.state.title} 
              content={this.state.content} 
              addNote={this.addNote} 
            /> )} 
        />

        <Route path='/notes/' render={props => (
            <ViewSingleNote {...props} 
              deleteNote={this.deleteNote}
            />)} 
        />
        
      </div>
    );
  }
}

export default App;
