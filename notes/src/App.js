import React from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Notes from './Notes';
import NewNote from './NewNote';
import SingleNote from './SingleNote';

const URL = 'http://localhost:5200/api/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNote: null,
      notes: [],
      note: {
        title: '',
        content: ''
      },
      isEditing: false,
      editingId: null
    };
  }



componentDidMount() {
  axios
    .get(`${URL}notes`)
    .then(response => {
       console.log(response.data)
       this.setState({ notes: response.data })})
    .catch(error => {
      console.error('Error collecting notes!', error)
    });
}

// refresh() {
//   let newArray = this.state.notes.filter( note => {
//     return note.id !== this.state.activeNote.id
//   })
//   this.setState({
//     notes: newArray
//   })
// }


getNoteById = id => {
  axios
    .get(`${URL}notes/${id}`)
    .then(res => {
      console.log(res.data)
      this.setState({ activeNote: res.data })})
    .catch(err => console.log(err));
};

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
        content: ''
       }
    })})
    .catch(error => {
      console.error('Posting Error!', error)
    })
}

deleteNote = (ev, id) => {
  console.log(ev, id)
  ev.preventDefault();
  // const foundNote = this.state.notes.find(note => note.id === id)
  //   console.log(foundNote)
  const newNotesArray = this.state.notes.filter(note => note.id !== id)
  axios.delete(`${URL}edit/${id}`)
    .then(response => {
      console.log(response)
      this.setState({
        notes: newNotesArray
      })
    })
}

editNote = () => {
  console.log(this.state)
  const myId = this.state.activeNote[0].id;
  axios
    .put(
      `${URL}edit/${myId}`, 
      this.state.note
    )
    .then(response => {
      // const oldNote = this.state.notes.find(note => note._id === this.state.editingId)
      // console.log(oldNote)
      const newNotesArray = this.state.notes.filter(note => note.id !== myId)
      newNotesArray.push(this.state.note)
      console.log(newNotesArray)
      this.setState({
        
        notes: newNotesArray,
        editingId: null,
        isEditing: false,
        note: {
          title: '',
          content: ''
        }
      });
    })
    .catch(error => console.log(error))
}

handleInputChange = event => {
  this.setState({
    note: {
      ...this.state.note,
      [event.target.name]: event.target.value
    }
  });
};

prepareUpdateForm = ( event, note) => {
  event.preventDefault();
  this.setState({
    note,
    isEditing: true,
    editingId: note.id
  })
}

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <div className='navbarText'>
            <h1>
              Lambda Notes
            </h1>
            <Link 
              to='/notes/'
              style={{ textDecoration: 'none' }}>
              <h2 className="navLinks view">View Your Notes</h2>
            </Link>
            <Link 
              to='/new_note'
              style={{ textDecoration: 'none' }}>
              <h2 className="navLinks create">+ Create New Note</h2>
            </Link>
          </div>
        </div>
        <div className='routesContainer'>
          <Route
            exact path='/notes'
            render={props => (
              <Notes
                {...props}
                getNoteById={this.getNoteById}
                activeNoteHandler={this.activeNoteHandler}
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
            path='/notes/:id'
            render={props => (
              <SingleNote 
                {...props}
                deleteNote={this.deleteNote}
                activeNote={this.state.activeNote}
                editNote={this.prepareUpdateForm}
                note={this.state.activeNote}
                notes={this.state.notes}
                refresh={this.refresh}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
