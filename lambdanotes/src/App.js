import React, { Component } from 'react';
import SideBar from './Components/NavBar/SideBar';
import MainContent from './Components/MainContent/MainContent';
import './index.css';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.state = {
      notesArray: [],
      newNote: {
        id: 1,
        title: '',
        textBody: ''
      }
    }
  }
  componentDidMount() {
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
        .then(response => {
          this.setState({ notesArray: response.data })
        })
        .catch(err => {
          console.log('Error', err);
        });
  }
  render() {
    console.log(this.state.notesArray);
    return (
      <div className="appContainer">
        <SideBar />
        <MainContent notesArray={this.state.notesArray} />
      </div>
    );
  }
}

export default App;
