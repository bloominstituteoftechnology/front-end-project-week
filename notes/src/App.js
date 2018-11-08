import React from 'react';
import './App.css';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import Notes from './Notes';
import NewNote from './NewNote';
import SingleNote from './SingleNote';

const URL = 'https://fe-notes.herokuapp.com/note/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        tags: ["example one", "example two"],
        title: '',
        textBody: ''
      },
      isEditing: false,
      editingId: null
    };
  }



componentDidMount() {
  axios
    .get(`${URL}get/all`)
    .then(response => this.setState({ notes: response.data }))
    .catch(error => {
      console.error('Error collecting notes!', error)
    });
}

addNote = () => {
  axios
    .post(`${URL}create`, this.state.note)
    .then(response => {
      console.log(response)
      this.setState({
       notes: [
         ...this.state.notes,
         this.state.note
       ],
       note: {
        title: '',
        textBody: ''
       }
    })})
    .catch(error => {
      console.error('Posting Error!', error)
    })
}

deleteNote = (ev, _id) => {
  console.log(ev, _id)
  ev.preventDefault();
  const foundNote = this.state.notes.find(note => note._id === _id)
    console.log(foundNote)
  const newNotesArray = this.state.notes.filter(note => note._id !== _id)
  axios.delete(`${URL}delete/${_id}`)
    .then(response => {
      console.log(response)
      this.setState({
        notes: newNotesArray
      })
    })
}

editNote = () => {
  axios
    .put(`https://fe-notes.herokuapp.com/note/edit/:${this.state.editingId}`, this.state.item)
    .then(response => {
      console.log(response)
      // this.setState({
      //   notes: newNotesArray
      // })
    })
}

handleInputChange = event => {
  this.setState({
    note: {
      ...this.state.note,
      [event.target.name]: event.target.value
    }
  });
};

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h1 className="navbarHeader">
            Lambda Notes
          </h1>
          <NavLink exact to='/notes/'>
            <h2 className="navLinks">View Your Notes</h2>
          </NavLink>
          <NavLink exact to='/new_note'>
            <h2 className="navLinks">+ Create New Note</h2>
          </NavLink>
        </div>
        <Route
          exact path='/notes/'
          render={props => (
            <Notes
              {...props}
              notes={this.state.notes} />
           )}
         />
         <Route 
          exact path='/new_note'
          render={props => (
            <NewNote 
              {...props}
              note={this.state.note}
              handleInputChange={this.handleInputChange}
              editNote={this.editNote}
              addNote={this.addNote}
              isEditing={this.state.isEditing} />
          )}
        />
        <Route
          path='/notes/:_id'
          render={props => (
            <SingleNote 
              {...props}
              deleteNote={this.deleteNote}
              editNote={this.editNote}
              notes={this.state.notes}
            />
          )}
        />
        
      </div>
    );
  }
}

export default App;
