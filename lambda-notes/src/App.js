import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import NotesList from './components/NotesList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      title: '',
      textBody: '',
    }
  }

  componentDidMount(){
    this.getNotes();
  }

  getNotes = () => {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response)
        this.setState({ notes: response.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
          <p>
            Lambda Notes
          </p>
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
