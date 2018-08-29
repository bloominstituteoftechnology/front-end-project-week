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
      .get('https://killer-notes.herokuapp.com')
        .then(response => {
          this.setState({ notesArray: response.data })
        })
        .catch(err => {
          console.log('Error', err)
        });
  }
  render() {
    return (
      <div className="appContainer">
        <SideBar />
        <MainContent />
      </div>
    );
  }
}

export default App;
