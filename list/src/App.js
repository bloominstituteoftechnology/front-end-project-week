import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';


class App extends Component {

  state = {
    notes: [{id: 0, title:'Title1', content: 'testContent1'}, {id: 1, title: 'Title2', content: 'testContent2'}],
    newNote: {id: 0, title: '', content: ''}
  }

  componentDidMount() {
    this.setState();
  }

  handleChange = event => {
    console.log(this.state)
    this.setState({ [event.target.name]: event.target.value});
  }

  addNote = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        {this.state.notes.map(( note => {
          return(
            <div key={note.id} className="charCard">
              {note.id}{note.title}{note.content}
            </div>
          )
        }))}

        <form>
          <input onChange={this.handleChange} type="text" name="title" value={this.state.newNote.title} ></input>
          <input onChange={this.handleChange} type="text" name="content" value={this.state.newNote.content} ></input>
          <button onClick={this.addNote} ></button>

        </form>
      </div>
    );
  }
}

export default App;
