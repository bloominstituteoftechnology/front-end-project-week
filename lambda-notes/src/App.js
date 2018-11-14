import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],

    };
  }
  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response)
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.error('Server Error', error);

      });
  }
  addNewNote = note => {


    axios.post('https://fe-notes.herokuapp.com/note/create', note)
      .then((response) => {
        console.log(response);
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.log(error);
      });

    console.log(this.state)
  }
  updateNote = (id, note) => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
      .then((response) => {
        console.log(response);
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteNote = (id) => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

  }

  render() {
    return (
      <div className="App">
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
