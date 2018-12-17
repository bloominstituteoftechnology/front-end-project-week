import React, { Component } from 'react';
import axios from "axios";
import NoteList from "./components/NoteList";
import './App.css';


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
        console.log(response.data);
        this.setState({
          notes: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        I am the App
        <NoteList notes={notes} />
        
      </div>
    );
  }
}

export default App;
