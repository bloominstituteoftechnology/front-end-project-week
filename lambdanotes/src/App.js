import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import NotesList from './components/noteslist';
import { Route, Link } from "react-router-dom";
import Note from './components/note';
import NoteForm from './components/noteform';
import NoteFormEdit from './components/noteformedit';
import styled from 'styled-components';
import { runInThisContext } from 'vm';

const Container = styled.div`
  display: flex;
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],      
      note: '',
      title: '',
      id: null,
      edittoggle: false,
      Redirect: false
    }
  }

  handleNoteChange = event => {
    this.setState({[event.target.name]: event.target.value })
  };

  addHandler = event => {
    event.preventDefault();
    const arr = this.state.notes.slice();
    if (this.state.title && this.state.note) {
      arr.push(
        {
          title: this.state.title,
          note: this.state.note,
          id: Date.now(),
          edittoggle: this.state.edittoggle
        }
      );
      this.setState({ 
        notes: arr, 
        title: '',
        note: '',
        Redirect: true },() => {
        this.setState({Redirect: false})
      }
      )}
    }

    deleteHandler = (id) => {
      let notes = this.state.notes.filter(item => item.id != id)
      this.setState({ notes });
    }

   render() {
     console.log(this.state.notes)
    return (
      <Container className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" render={props => (
          <NotesList {...props} notes={this.state.notes} />
        )}/>
        <Route exact path="/note/:id" render={props => (
          <Note {...props} notes={this.state.notes} handleNoteChange={this.handleNoteChange} addHandler={this.addHandler} Redirect={this.state.Redirect} deleteHandler={this.deleteHandler}/>
        )}/>
        <Route path="/form" render={props => (
          <NoteForm {...props} notes={this.state.notes} handleNoteChange={this.handleNoteChange} addHandler={this.addHandler} Redirect={this.state.Redirect}/>
        )}/>
        <Route path="/note/:id/edit" render={props => (
          <NoteFormEdit {...props} notes={this.state.notes} handleNoteChange={this.handleNoteChange} addHandler={this.addHandler} Redirect={this.state.Redirect}/>
        )}/>
      </Container>
    );
  }
}

export default App;
