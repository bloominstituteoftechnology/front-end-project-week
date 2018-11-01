import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import axios from 'axios'
import Notes from './components/Notes';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import NoteForm from './components/NoteForm';
import NoteView from './components/NoteView';
import EditForm from './components/EditForm';
import Authenticate from './components/Authenticate'
import Login from './components/Login'

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
    this.fetchNotes();
  }

  fetchNotes = () => {
    axios 
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({notes: response.data});
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.props)
    return (
      <HomePage>
        <NavBar notes={this.state.notes} />
        <Route
          exact path='/'
          render={props => <Notes {...props} notes={this.state.notes} />}   
        />
        <Route
          path='/new'
          render={props => <NoteForm {...props} addNote={this.addNote} fetchNotes={this.fetchNotes} />}
        />
        <Route 
          path='/note/:id'
          render={props => <NoteView {...props} getNote={this.getNote} handleDeleteNote={this.handleDeleteNote} fetchNotes={this.fetchNotes} />}
        />
        <Route 
          path='/edit/:id'
          render={props => <EditForm {...props} updateNote={this.updateNote} fetchNotes={this.fetchNotes} />}
        />
      </HomePage>
    );
  }
}

export default Authenticate(App, Login);
