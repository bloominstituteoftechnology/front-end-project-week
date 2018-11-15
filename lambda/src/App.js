import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import axios from 'axios';

import NotesList from './sub-components/notesList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    }
  }
  componentDidMount = () => {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response)
        this.setState({
          notes: response.data,
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="App">
        <NotesList notesList={this.state.notes} />
      </div>
    );
  }
}

export default App;
