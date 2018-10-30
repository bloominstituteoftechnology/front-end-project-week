import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import axios from 'axios'
import Notes from './components/Notes';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import NoteForm from './components/NoteForm';
import NoteView from './components/NoteView';
import EditForm from './components/EditForm';

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

  addNote = note => {
    axios
      .post('https://fe-notes.herokuapp.com/note/create', note)
      .then(response => {
        this.setState({
          notes: response.data
        },
        this.fetchNotes()
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
        <Route 
          path='/note/:id'
          render={props => <NoteView {...props} getNote={this.getNote} />}
        />
        <Route 
          path='/edit/:id'
          render={props => <EditForm {...props} updateNote={this.updateNote} fetchNotes={this.fetchNotes}/>}
        />
      </HomePage>
    );
  }
}

export default withRouter(App);
