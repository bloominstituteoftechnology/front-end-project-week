import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote: {
        tag: '',
        title: '',
        textBody: '',
      }
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(error => console.log('It\'s over! Turn back now!'))

  }

  render() {
    return (
      <div className='container'>
        <div className="App">
          <div className="side-bar">
            <div className='lambda-notes'>
              <h1>Lambda Notes</h1>
            </div>
            <button className='button'>View Your Notes</button>
            <button className='button'>+Create New Note</button>
          </div>

          <div className='main-view'>
            <div className='title-cont'>
              <h2>Your Notes: </h2>
            </div>
            <div className="cont-body">
              {this.state.notes.map(note => (
                <div className="note">

                  <div className='note-title'>
                    <h3>{note.title}</h3>
                  </div>

                  <div className="note-body">{note.textBody}</div>

                </div>

              )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
