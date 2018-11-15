import React, { Component } from 'react';
import { instance } from './utils.js';

import './App.css';
import NotesList from './components/Notes/NotesList';

class App extends Component {
  constructor() {
    super();
      this.state = {
        notes: [
          {
            title: 'pizza',
            textBody: 'please eat some good pizza kid'
          },
          {
            title: 'cows',
            textBody: 'good for beef tacos!!'
          }
        ]
      }
  }

  componentDidMount() {
    instance.get('/get/all')
      .then(response => {
        console.log(response);
        this.setState(() => ({ notes: response.data }));
      })
      .catch(err => {
        console.log(err, 'Whoops');
      });
  }

  render() {
    return (
      <div className="App">
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
