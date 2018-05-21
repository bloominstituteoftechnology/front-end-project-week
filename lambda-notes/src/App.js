import React, { Component } from 'react';
import './App.css';

import Home from './component/Home';
import { Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {id: 1, title: "Hello there I'm a note", text: "Hello, I'm the note's text. I am a note you took about something at one point in time"},
        {id: 2, title: "Hello there I'm a note", text: "Hello, I'm the note's text. I am a note you took about something at one point in time"},
        {id: 3, title: "Hello there I'm a note", text: "Hello, I'm the note's text. I am a note you took about something at one point in time"},
        {id: 4, title: "Hello there I'm a note", text: "Hello, I'm the note's text. I am a note you took about something at one point in time"},
        {id: 5, title: "Hello there I'm a note", text: "Hello, I'm the note's text. I am a note you took about something at one point in time"},
        {id: 6, title: "Hello there I'm a note", text: "Hello, I'm the note's text. I am a note you took about something at one point in time"},
        {id: 7, title: "Hello there I'm a note", text: "Hello, I'm the note's text. I am a note you took about something at one point in time"},
        {id: 8, title: "Hello there I'm a note", text: "Hello, I'm the note's text. I am a note you took about something at one point in time"},
        {id: 9, title: "Hello there I'm a note", text: "Hello, I'm the note's text. I am a note you took about something at one point in time"},
        {id: 10, title: "Hello there I'm a note", text: "Hello, I'm the note's text. I am a note you took about something at one point in time"},
    ]
    };
  }
  render() {
    let teal = '#2eb8b8';
    return (
      <div className="App">
        <div className="sidebar">
        <Route path="/" render={props => <Home notes={this.state.notes} {...props} />}  /> 
          <h1 className="title">Lambda Notes</h1>
          <button className='button' style={{backgroundColor: teal}}><strong>View Your Notes</strong></button>
          <button className='button' style={{backgroundColor: teal}}><strong>+ Create New Note</strong></button>
        </div>

          <div className="container">
            <div className="topBar">
              <h2>Your Notes:</h2>
            </div>
            <div className="note-container">
              {
                [0,1,2,3,4,5,6,7,8,9].map((note, i) => {
                  return (
                    <CreateNote key={i} />
                  );
                })
              }
            </div>
            {/* <div className="noteContainer1">
              <CreateNote />
              <CreateNote />
              <CreateNote />
            </div>
            <div className="noteContainer2">
              <CreateNote />
              <CreateNote />
              <CreateNote />
            </div>
            <div className="noteContainer3">
              <CreateNote />
              <CreateNote />
              <CreateNote />
            </div> */}
          </div>
        </div>
   
   

    );
  }
}

export default App;
