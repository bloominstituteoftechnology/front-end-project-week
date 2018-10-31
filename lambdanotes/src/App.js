import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Route from 'react-router-dom/Route';
import NoteList from './Components/NoteList';
import NoteView from './Components/NoteView';
import AddNote from './Components/AddNote';
import EditNote  from './Components/EditNote';
import axios from 'axios';
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      id: '',
      title: '',
      content: '',
      showModal: false
    }
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios
    .get('http://localhost:7000/api/notes')
    .then(response => this.setState({ ...this.state, notes: response.data }))
    .catch(error => console.log(error));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // addNewNote = event => {
  //   event.preventDefault();
  //   const notes = this.state.notes.slice();
  //   notes.push({ 
  //     id: Number(Date.now().toString().slice(-2)), 
  //     title: this.state.title, 
  //     content: this.state.content 
  //   });
  //   this.setState({ 
  //     notes, 
  //     id: '',
  //     title: '',
  //     content: '' 
  //   });
  // }


  addNewNote = (note) => {
    axios.post('http://localhost:7000/api/notes', note)
    .then(response => this.getNotes())
    .catch(error => console.log(error));
  }



editNoteSubmit = (id) => {
  const editedNote = {
      title: this.state.title,
      content: this.state.content
  }
  axios
  .put(`http://localhost:7000/api/notes/${id}`, editedNote)
  .then(response => {
      console.log('put response', response);
          this.setState({
              title: '',
              content: ''
          })
          this.props.resetState();
  })
  .catch(error => this.setState({editError: error.response.data})
  )
}


 deleteNote = (id) => {
  axios
  .delete(`http://localhost:7000/api/notes/${id}`)
  .then(response => {
      console.log(response)
      this.props.resetState();
  })
  .catch(err => console.log(err));
}

  // deleteNote = id => {
  //  let notes = this.state.notes.slice();
  //  notes = notes.filter(note => note.id !== id);
  //  this.setState({ notes, id: '', title: '', content: ''  });
  // }


  modalToggle = () => {
    this.setState(function(prevState) {
      return {showModal: !prevState.showModal}
      })
      this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <div className="Nav-bar">
          <h1 className="App-title">Lambda <br/> Notes</h1>
          <Link to="/notes" ><div className="nav-button" >View Your Notes</div ></Link>
          <Link to="/add" ><div className="nav-button" >+ Create New Note</div></Link>
        </div>
        <div className="display-right" >
          <Route exact path="/notes" render={props => 
            (<NoteList {...props} 
              notes={this.state.notes} />)} />
          <Route exact path="/notes/:id" render={props => 
            (<NoteView {...props} 
              notes={this.state.notes} 
              modalToggle={this.modalToggle} 
              showModal={this.state.showModal} 
              deleteNote={this.deleteNote} /> )} />
          <Route exact path="/add" render={props => 
            (<AddNote {...props} 
              notes={this.state.notes} 
              handleInputChange={this.handleInputChange} 
              inputTitle={this.state.title} 
              inputText={this.state.content} 
              addNewNote={this.addNewNote} /> ) } />
          <Route exact path="/notes/:id/edit" render={props => 
            (<EditNote {...props} 
              notes={this.state.notes} 
              editNoteSubmit={this.editNoteSubmit} />)}  />
        </div>
      </div>
    );
  }
}

export default App;