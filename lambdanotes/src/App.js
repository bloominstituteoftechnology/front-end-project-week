import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import NoteList from './components/NoteList'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
    }
  }

  componentDidMount(){
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response);
        this.setState({notes: response.data})
      })
  }

  render() {
    return (
      <div className="App">
        <NoteList notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
