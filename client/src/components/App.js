import React, { Component } from 'react';
import { Route } from 'react-router';

// components
import Sidebar from './sidebar/Sidebar';
import NoteView from './noteview/NoteView';
import NewNote from './newnote/NewNote';

// presentational
import './App.css';
import logo from '../logo.svg';

import data from '../data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      noteList: [],
    };
  }

  // setInputVal
  setInputVal = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // adds new note to `this.state.noteList`
  addNewNote = () => {
    const newNote = {
      id: this.state.noteList.length,
      title: this.state.title,
      content: this.state.content,
    };

    this.setState({ noteList: [ newNote, ...this.state.noteList ] });
  }

  // adds data to `this.state.noteList`
  // data currently comes from `/src/data.json`
  componentDidMount() {
    this.setState({ noteList: data });
  }
  
  // render
  render() {
    return (
      <div className="App">
        <Sidebar/>

        {/* NoteView */}
        <Route
          exact path='/'
          render={ props => {
            return <NoteView { ...props } noteList={ this.state.noteList }/>
            }
          }
        />
        
        {/* NewNote */}
        <Route
          path='/note/new'
          render={ props => {
            return (
              <NewNote
                { ...props }
                setInputVal={ this.setInputVal }
                title={ this.state.title }
                content={ this.state.content }
                buttonOnClick={ this.addNewNote }
              />
            )}
          }
        />
      </div>
    );
  }
}

export default App;
