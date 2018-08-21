import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Menu from './Menu';
import Notes from './Notes';
import AddNote from './AddNote';
import Note from './Note';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      text: '',
      id: 4
    }
  }

  componentDidMount() {
    const notes = [
      {
        title: 'test 1',
        text: 'test content 1',
        id: 0
      },
      {
        title: 'test 2',
        text: 'test content 2',
        id: 1
      },
      {
        title: 'test 3',
        text: 'test content 3',
        id: 2
      },
      {
        title: 'test 4',
        text: 'test content 4',
        id: 3
      }
    ];

    this.setState({ notes: notes });
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitHandler = (event) => {
    event.preventDefault();
    const newNote = {
      title: this.state.title,
      text: this.state.text,
      id: this.state.id
    };
    const notes = this.state.notes.slice();
    notes.push(newNote);
    let id = newNote.id + 1;
    this.setState({
      notes: notes,
      title: '',
      text: '',
      id: id
    });
  }

  render() {
    return (
      <div className="App">
        <div className='body'>
          <Route path='/' component={ Menu } />
          <Route exact path='/' render={props => <Notes {...props} notes={this.state.notes} />} />
          <Route path='/add' render={props => <AddNote {...props} state={this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler} />} />
          <Route path='/view/:id' render={props => <Note {...props} notes={this.state.notes} />} />
        </div>
      </div>
    );
  }
}

export default App;
