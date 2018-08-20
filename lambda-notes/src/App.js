import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Note from "./components/Note";

import './App.css';

class App extends Component {
  state={
    notes: [
      {
        id: 0,
        title: 'Note Title',
        text: 'This is what I have to do',
      },
      {
        id: 1,
        title: 'Note Title',
        text: 'More of what I have to do',
      }
    ]
  };

  addNote = props => {
    this.setState(prevState => ({ note: [...prevState.notes, props] }));
  }


  render() {
    return (
      <div className='App'>
        <div className="nav-bar">
          <h1>Lambda Notes</h1>
          <Link to='/notes'>View your notes</Link>
          <Link to='/add'>+Create New Note</Link>
        </div>

        <Route exact path='/' render={() => ( 
          <div>Home Page</div> )}
        />
        <Route exact path='/add' render={() => ( 
          <div>Add a Note</div> )}
        />
        <Route exact path='/notes' render={() => ( 
          <Notes notes={this.state.notes} /> )}
        />
        <Route exact path='/notes/:id' render={props => (
          <Note match={props.match} notes={this.state.notes}/>)}
        />

      </div>
    );
  }
}

export default App;
