import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Note from './components/Note';
import Add from './components/Add';
import './App.css';




class App extends Component {
 state = {
      notes: [
        {
            id:0,
            title: "Cats",
            note:"Cats are so cute I mean seriously"
          },
          {
            id:1,
            title:"WWE Summer Smash",
            note:"So happy Ronda won the match!"
          },
          {
            id:2,
            title:"Food",
            note:"I like , pizza, icecream and sushi"
          },
          {
            id:3,
            title:"Justice League",
            note:"Wonder Woman, The Flash, Aquaman, Batman,Superman,Cyborg"
          },
          {
            id:4,
            title:"CS12",
            note:"CS12 rules, that is all"
          },
          {
            id:5,
            title:"Rachel",
            note:"My name is Rachel what's your's?"
          }
        ],
        title: '',
        note: ''
     };

    
  
  render() {
    return (
      <div className="App">
      <Add
          onChange={this.onChange} 
          onSubmit={this.onSubmit} 
          title={this.state.title} 
          note={this.state.note} 
        />
     <div>
          <h2>Your Notes:</h2>
          </div>
        </div>
    );
  }
}

export default App;
