import React, { Component } from 'react';
import './App.css';
import NotesList from './NotesList';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: [],
        noteTitleInput: '',
        noteBodyInput: '',
    }
  }

  componentDidMount() {
    axios
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then(response => {
        this.setState(() => ({ notes: response.data }));
    })
    .catch(error => {
    console.error('Server Error', error);
    });
  }

  createNote = () => {
    const newNote = { title: this.state.noteTitleInput, textBody: this.state.noteBodyInput };
    
    axios
    .post(
      'https://killer-notes.herokuapp.com/note/create', 
      newNote
    )
    .then(response => {
      console.log('hey');
      this.setState(() => ({ notes: response.data }));
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

 
  render() {
    return (
      <div className="App">
     
      <form onSubmit={() => this.createNote()}>

          <input 
              name='noteTitleInput'
              type='text'
              placeholder='Note Title'
              value={this.state.noteTitleInput}
              onChange={this.handleInputChange}
          />

          <input 
              name='noteBodyInput'
              type='text'
              placeholder='Note Body'
              value={this.state.noteBodyInput}
              onChange={this.handleInputChange}
          />

          <button type='submit'>
              Create Note
          </button>
        </form>
       <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   // const { notesReducer } = state;
//   return {
//       notes: state.notes,
//   };
// }

// export default connect(
//     mapStateToProps,
//     { getNotes }
// )(App);

export default App;