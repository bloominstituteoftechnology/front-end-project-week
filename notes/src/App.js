import React from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link, withRouter } from 'react-router-dom';
import Notes from './Notes';
import NewNote from './NewNote';
import SingleNote from './SingleNote';
import Login from './Auth/Login';
import Register from './Auth/Register';

const URL = 'http://localhost:5200/api/';
const token = localStorage.getItem('jwt');
const reqOptions = {
  headers: {
    Authorization: token,
  },
};

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
    .get(`${URL}notes`, reqOptions)
    .then(response => {
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
    .get(`${URL}notes/${id}`, reqOptions)
    .then(res => {
      this.setState({ activeNote: res.data })})
    .catch(err => console.log('Error getting that note!', err));
};

addNote = () => {
  axios
    .post(`${URL}create`, this.state.note, reqOptions)
    .then(response => {
      this.setState({
       notes: [
         ...this.state.notes,
         {
           ...this.state.note,
          id: response.data[0].id
          }
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
  ev.preventDefault();
  // const foundNote = this.state.notes.find(note => note.id === id)
  //   console.log(foundNote)
  const newNotesArray = this.state.notes.filter(note => note.id !== id);
  axios
    .delete(`${URL}edit/${id}`, reqOptions)
    .then(response => {
      this.setState({
        notes: newNotesArray
      })
    })
    .catch(error =>{
      console.error('Deleting error', error)
    })
}

editNote = () => {
  const myId = this.state.activeNote[0].id;
  console.log(myId, this.state.note, reqOptions)
  axios
    .put(`${URL}edit/${myId}`, this.state.note, reqOptions)
    .then(response => {
      // const oldNote = this.state.notes.find(note => note._id === this.state.editingId)
      // console.log(oldNote)
      const newNotesArray = this.state.notes.filter(note => note.id !== myId)
      // newNotesArray.push(this.state.note)
      // console.log(newNotesArray)
      console.log(newNotesArray)
      this.setState({
        
        notes: [
          ...newNotesArray,
          {
            ...this.state.note,
            id: myId
          }
        ],
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
            <Link 
              to='/login'
              style={{ textDecoration: 'none' }}>
              <h2 className="navLinks view">Login</h2>
            </Link>
            <Link 
              to='/register'
              style={{ textDecoration: 'none' }}>
              <h2 className="navLinks create">Register</h2>
            </Link>
            <button className='logout'onClick={this.logout}>Logout</button>

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
          <Route 
            exact path='/login'
            render = {props => (
              <Login 
              {...props}
              />
            )}  
          />
          <Route 
            exact path='/register'
            render = {props => (
              <Register 
              {...props}
              />
            )}  
          />
        </div>
      </div>
    );
  }
  logout = event => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login')
 }
}

export default withRouter(App);
