import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Menu from './Components/Menu/Menu';
import NoteList from './Components/Notes/NoteList';

let dummyData = [{
  "tags": ["tag", "otherTag"],
  "title": "Note Title",
  "textBody": "Note Body",
}];

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: undefined,
    }
  }

  componentDidMount() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      this.setState({
        notes: response.data,
      })
    })
    .catch(response => {
      console.log(response);
    });
  }


  render() {
    if (this.state.notes === undefined) {
      return (
        <div className="App">
          <nav className='menu'>
            <h1>Lambda Notes</h1>
            <Menu />
          </nav>
          <main className='notes'>
            <h2>Loading note data....</h2>
          </main>
        </div>
      )
    }
    return (
      <div className="App">
        <nav className='menu'>
          <h1>Lambda Notes</h1>
          <Menu />
        </nav>
        <main className='notes'>
          <NoteList notes={this.state.notes}/>
        </main>
      </div>
    );
  }
}

export default App;
