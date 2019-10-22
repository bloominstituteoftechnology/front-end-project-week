import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import NavBar from './Components/NavBar';
import Notes from './Components/Notes';
import NoteForm from './Components/NoteForm';
import NoteView from './Components/NoteView';
import EditForm from './Components/EditForm';

import { Auth0Lock } from 'auth0-lock';

const Form = styled.div`
  border: 2px solid blue;
  margin: 200px auto;
  // margin: auto;
  width: 400px;
  height: 200px;
  background: lightskyblue;
  opacity: 0.6;
`;

const FormHeading = styled.h3`
  margin: 20px auto;
  border-bottom: 1px solid white;
  width: 240px;
  color: white;
  font-size: 22px;
`;

const LoginBtn = styled.button`
  border-radius: 5px;
  border: 1px solid dodgerblue;
  width: 100px;
  height: 30px;
  color: blue;
  font-weight: bold;
  font-size: 12px;
  margin: 40px 150px;

  &:hover {
    cursor: pointer;
  }
`;

var lock = new Auth0Lock(
  process.env.REACT_APP_CLIENT_ID,
  process.env.REACT_APP_DOMAIN_URL
);

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
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = () => {
    axios 
      .get('http://localhost:5000/api/notes')
      .then(response => {
        this.setState({notes: response.data});
      })
      .catch(error => (
        console.log('Server Error', error)
      ));
  }

  render() {
    console.log('PROCESS:', process.env);
    if (this.isAuthenticated()) {
      return (
        <div className="App">
          <NavBar notes={this.state.notes}/>
          <Route 
            exact path='/' 
            render={props => (
              <Notes 
                {...props} 
                notes={this.state.notes} 
              />
            )}
          />
          <Route
            path='/new'
            render={props => (
              <NoteForm 
                {...props} 
                addNote={this.addNote} 
                fetchNotes={this.fetchNotes}
              />
            )}
          />
          <Route 
            path='/note/:id'
            render={props => (
              <NoteView 
                {...props} 
                getNote={this.getNote} 
                handleDeleteNote={this.handleDeleteNote}
                fetchNotes={this.fetchNotes}
              />
            )}
          />
          <Route
            path='/edit/:id'
            render={props => (
              <EditForm 
                {...props} 
                updateNote={this.updateNote}
                fetchNotes={this.fetchNotes}
              />
            )}
          />
        </div>
      );
    } else {
      return (
        <Form>
          <FormHeading>Login to Your Account</FormHeading>
          <LoginBtn 
            id='btn-login'
            onClick={function() {
              lock.show();
            }}
          >
            LOG IN
          </LoginBtn>
        </Form>
      );
    }
  }
  isAuthenticated() {
    // check whether the current time is past the access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}

export default App;
