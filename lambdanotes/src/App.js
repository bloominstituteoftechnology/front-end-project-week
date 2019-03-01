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

// ========== GET notes ========== //
  componentDidMount() {
    axios
    .get('http://localhost:7000/api/notes')
    .then(response => {
      this.setState(() => ({ notes: response.data }));
    })
    .catch(error => console.log(error));
  }


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  // ========== POST a note ========== //
  addNewNote = () => {
    axios
      .post("http://localhost:7000/api/notes", {
        title: this.state.title,
        content: this.state.content
      }).then(()=>{
        axios.get("http://localhost:7000/api/notes")
        .then(response => {
          console.log(response.data);
          this.setState(()=> ({notes: response.data }))
        })
      })
      .catch(error => {
        console.error("Server Error", error)
      });
    };



editHandler = id => {
  console.log(this.state)
  let notecopy = this.state.notes.slice();
  let editnote = notecopy.find(note => note.id === id);
  this.setState({ edittitle: editnote.title, editcontent: editnote.content });
  console.log(this.state)
};


// ========== UPDATE a note ========== //
  editNoteSubmit = id => {
      axios
        .put(`http://localhost:7000/api/notes/${id}`, {
          title: this.state.edittitle,
          content: this.state.editcontent})
        .then(() => {
      axios
        .get("http://localhost:7000/api/notes")
        .then(response => {
            this.setState({ notes: response.data })
          })
        })
      .catch(error => this.setState({editError: error.response.data})
      )
    }



// ========== DELETE a note ========== //
 deleteNote = (id) => {
  axios
  .delete(`http://localhost:7000/api/notes/${id}`)
  .then(() => {
    axios
      .get("http://localhost:7000/api/notes")
      .then(response => {
          this.setState({ notes: response.data })
        })
      })
  .catch(err => console.log(err));
}


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
              handleInputChange={this.handleInputChange}
              notes={this.state.notes} 
              edittext={this.state.edittext}
              edittitle={this.state.edittitle}
              editNoteSubmit={this.editNoteSubmit} />)}  />
        </div>
      </div>
    );
  }
}

export default App;