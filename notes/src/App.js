import React, { Component } from 'react';
import './App.css';
import AllNotes from './Components/AllNotes';
import AddNote from './Components/AddNote';
export default class App extends Component {
  state = {
    notes: [{
      note: '',
      data: '',
    }
    ],
    note: '',
    data: '',
  }
  render() {
    return (
      <div>
         <AllNotes notes={this.state.notes} />
         <AddNote handleInput={this.handleInput} handleSubmit={this.handleSubmit} namevalue={this.state.note} datavalue={this.state.data} />  </div>
        
      );
    }
    handleInput = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
      /*     this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this); */
      event.preventDefault();
      //const nextId = this.getNextId();
      let noteObj = {
        note: this.state.note,
        data: this.state.data,
  
      }
      this.setState({
        notes: [...this.state.notes, noteObj],
      });
  
      this.setState({
        name: '', data: '',
      });
    }
  }
  