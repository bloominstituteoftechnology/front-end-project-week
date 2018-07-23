import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      noteEntries: [
        {
          title: "bleep",
          textBody: "do this and that",
          tags: ["one", "two", "three"]
        },

        {
          title: "bloop",
          textBody: "do that and this tomorrow",
          tags: ["four", "five", "six"]
        }
      ],
      noteEntry: {
        title: "", 
        textBody: "", 
        tags: []
      }
    }
  }

  
  render() {
    return (
      <div>
        Lambda Notes App
      </div>
    );
  }
}

export default App;
