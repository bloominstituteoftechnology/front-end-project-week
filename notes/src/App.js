import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Menu from './Components/Menu/Menu';
import NoteList from './Components/Notes/NoteList';
import CreateNote from './Components/Notes/CreateNote';

/*
let dummyData = [{
  "tags": ["tag", "otherTag"],
  "title": "Note Title",
  "textBody": "Note Body",
}];
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: undefined,
      title: '',
      textBody: '',
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

  updateValue = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
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
          <Route exact path='/'
            render={(props) => <NoteList {...props} notes={this.state.notes}/>}
          />
          <Route path='/notes/create'
            render={(props) => <CreateNote {...props} title={this.state.title} textBody={this.state.textBody} updateValue={this.updateValue} />}
          />
        </main>
      </div>
    );
  }
}

export default App;
