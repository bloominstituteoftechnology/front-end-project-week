import React, { Component } from 'react';
import './App.css';
import NotesList from './NotesList';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import Note from './Note';
import NoteView from './NoteView';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       notes: [],
  //       noteTitleInput: '',
  //       noteBodyInput: '',
  //   }
  // }

  componentDidMount() {
    this.props.dispatchGetNotes(); //this doesn't do anything until mapDispatchToProps is called
  }

  // getNotes = () => {
  //   axios
  //   .get('https://killer-notes.herokuapp.com/note/get/all')
  //   .then(response => {
  //       this.setState({ notes: response.data });
  //   })
  //   .catch(error => {
  //   console.error('Server Error', error);
  //   });
  // }

  // createNote = event => {
  //   event.preventDefault();
  //   const newNote = { 
  //     title: this.state.noteTitleInput, 
  //     textBody: this.state.noteBodyInput, 
  //   };
    
  //   axios
  //   .post(
  //     'https://killer-notes.herokuapp.com/note/create', 
  //     newNote
  //   )
  //   .then(response => {
  //     console.log('hey');
  //     console.log(`POST RESPONSE: `, response.data);
  //     this.getNotes();
  //   })
  //   .catch(error => {
  //     console.error('Server Error', error);
  //   });
  // };

  // handleInputChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };
 
  render() {
    return (
      <div className="App">
        <div className='nav-container'>
          <NavLink to='/notes'>View Your Notes</NavLink>
          <NavLink to='/note-form'>Create New Note</NavLink>
        </div>

        {/* <Route 
          exact 
          path='/notes' 
          render={props => (
            <NotesList {...props} notes={this.props.notes} />
          )}
        /> */}

        {/* <Route 
          path='/notes/:id' 
          render={() => (
            <NoteView {...props} notes={this.state.notes} getNotes={this.getNotes} />
          )}
        /> */}

        <Route
          exact
          path='/notes'
          render={() => (
            <NotesList />
          )}
        />
        <Route
          exact
          path='/note-form'
          render={() => (
            <NoteForm />
          )}
        />
        {/* <NoteForm /> */}
        {/* <NotesList /> */}

      </div>
    );
  }
}

// export default App;

const mapStateToProps = state => {
  return {
      notes: state.notes,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetNotes: () => dispatch(getNotes())
  }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

const ConnectedApp = connector(App);

export default ConnectedApp;

