import React, { Component } from 'react';
import axios from "axios";
import NoteList from "./components/NoteList";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'tags': [],      
    };
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response.data);
        this.setState({
          tags: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        I am the App
        <NoteList />
      </div>
    );
  }
}

export default App;
