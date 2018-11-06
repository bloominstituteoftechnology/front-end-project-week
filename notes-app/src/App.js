import React, { Component } from 'react';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import NoteCard from './components/NoteCard';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      textBody: '',
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }))
      })
      .catch(error => {
        console.log('Server Error', error)
      })
  }

  render() {
    return (
      <div className="App">
        <NoteForm />
        <br></br>
        <NotesList notes={this.state.notes} />
        <Route path="https://fe-notes.herokuapp.com/note/get/:id" 
          render={props => <NoteCard {...props} />} 
        />
      </div>
    );
  }
}

export default App;
//