import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import axios from 'axios'
import Notes from './components/Notes';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import NoteForm from './components/NoteForm';


const HomePage = styled.div`
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        id: '',
        title: '',
        textBody: ''
      }
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({notes: response.data});
      })
      .catch(error => console.log(error));
  }

  addNote = note => {
    axios
      .post('https://fe-notes.herokuapp.com/note/create', note)
      .then(response => {
        this.setState(
          {notes: response.data},
          this.props.history.push('/')
        )
      })
      .catch(error => console.log(error));
  }


  render() {
    return (
      <HomePage>
        <NavBar />
        <Route
          exact path='/'
          render={props => <Notes {...props} notes={this.state.notes} />}   
        />
        <Route
          path='/new'
          render={props => <NoteForm {...props} addNote={this.addNote} />}
        />
      </HomePage>
    );
  }
}

export default App;
