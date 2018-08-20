import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Notes from './components/notes';
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
            note:"My name is Rachel what's yours?"
          }
        ],
        title: '',
        note: ''
     };

    
  
  render() {
    return (
      <div className="App">
      <Route exact path="/" render={(props) => <Notes{...props} notes={this.state.notes}/>}/>
       </div>
    );
  }
}

export default App;
