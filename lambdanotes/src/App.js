import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import NotesList from './components/noteslist';
import { Route, Link } from "react-router-dom";
import Note from './components/note'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {title: '1st Note',
        note: 'See. We take the corner of the brush and let it play back-and-forth. It\'s a very cold picture, I may have to go get my coat. It’s about to freeze me to death. If you hypnotize it, it will go away.',
        id: '',
        edittoggle: false
      }
     ]      
    }
  }

  componentDidMount() {
    console.log(this.props)
    // const id = this.props.match.params.id;
  }

  handleTaskChange = event => {
    this.setState({ title: event.target.value })
  };

  addHandler = event => {
    event.preventDefault();
    const arr = this.state.notes.slice();

    arr.push(
      {
        title: this.state.title,
        note: this.state.note
      }
    );
    this.setState({ notes: arr })
  }

  deleteHandler = event => {
    event.preventDefault();
    let notes = this.state.slice();
    notes = notes.filter(item => !item.id)
    this.setState({ notes });
  }

  render() {
    console.log(this.state.notes)
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" render={props => (
          <NotesList {...props} notes={this.state.notes} />
        )}/>
        <Route exact path="/:id" render={props => (
          <Note {...props} notes={this.state.notes} />
        )}/>
      </div>
    );
  }
}

export default App;
