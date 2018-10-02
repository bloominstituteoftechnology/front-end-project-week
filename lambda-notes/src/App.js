import React, { Component } from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import AddNote from './components/AddNote';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 0,
          title: 'This is my first note!',
          text: 'This is a first note in lambda-notes project!'
        },
        {
          id: 1,
          title: 'This is my second note!',
          text: 'This is a second note in lambda-notes project!'
        },
        {
          id: 2,
          title: 'This is my third note!',
          text: 'This is a third note in lambda-notes project!'
        }
      ],
      id: '',
      title: '',
      text: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNote = (event) => {
    event.preventDefault();
    const notes = [...this.state.notes];
    notes.push({ 
      id: Math.random(), 
      title: this.state.title, 
      text: this.state.text 
    });
    this.setState({
      notes: notes,  
      id: '',
      title: '',
      text: '' 
    });
  }

  

  render() {
    return (
      <div className='App'>
        <Nav/>
       
        <Route exact path='/' render={props => (<List {...props} notes={this.state.notes} />)} />
        <Route 
          exact path='/add-note'
          render={(props) => (<AddNote {...props} 
          title={this.state.title} 
          text={this.state.text} 
          handleInputChange={this.handleInputChange} 
          addNote={this.addNote} />)}/>
      </div>
    );
  }
}

export default App;
