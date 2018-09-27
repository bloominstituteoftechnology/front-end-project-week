import React, { Component } from 'react';
import SideBar from './Components/NavBar/SideBar';
import MainContent from './Components/MainContent/MainContent';
import DeleteNote from './Components/DeleteNote/DeleteNote';
import './index.css';
import axios from 'axios';
const URL = 'http://localhost:3300/api/notes'
const CREATEURL = 'http://localhost:3300/api/addNote'
class App extends Component {
  constructor() {
    super();
    this.state = {
      notesArray: [],
      newNote: {
        id: 1,
        title: '',
        textBody: ''
      },
      displayModal: false
    }
  }

  showModal = () => {
    this.setState({ displayModal: !this.state.displayModal })
  }

  componentDidMount() {
    const id = this.state.newNote.id
    axios
      .get(`${URL}`)
        .then(response => {
          this.setState({ notesArray: response.data })
        })
        .catch(err => {
          console.log('Error', err);
        });
    axios
        .post(`${CREATEURL}`, {
          title: '',
          textBody: ''
        })
        .then(response => {
          this.setState({ newNote: response.data })
        })
        .catch(err => {
          console.log('Error', err);
        })
    axios
        .put(`${URL}/${id}`, {
          title: this.state.newNote.title,
          textBody: this.state.newNote.textBody
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    axios
        .delete(`${URL}/${id}`)
        .then(res => {
          this.setState(notesArray => {
            return {
              notesArray: this.state.notesArray.filter(n => n.id !== notesArray.id)
            };
          });
        })
        .catch(err => {
          console.log(err);
        });
  }
  render() {
    console.log(this.state.notesArray);
    return (
      <div className="appContainer">
        <SideBar />
        <MainContent notesArray={this.state.notesArray} toggle={this.state.displayModal} showModal={this.showModal} />
      </div>
    );
  }
}

export default App;
