import React, { Component } from 'react';
import axios from 'axios';
import NotesContainer from './components/notes-container/NotesContainer';
import SidebarContainer from './components/sidebar/SideBarContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote:'',
      newTitle:'',
      editedNote:'',
      editedTitle:'',
       };
    };
  
  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
     
  }
  
  viewNoteHandler = event =>  {
    event.preventDefault();
   }

  newNoteTitleHandler= event =>  {
    event.preventDefault();
    this.setState ({newTitle: event.target.value});
  }

  newNoteBodyHandler= event =>  {
    event.preventDefault();
    this.setState ({newNote: event.target.value});
  }
 
  editedNoteTitleHandler= event =>  {
    event.preventDefault();
    this.setState ({editedTitle: event.target.value});
  }

  editedNoteBodyHandler= event =>  {
    event.preventDefault();
    this.setState ({editedNote: event.target.value});
  }

  saveNewNoteHandler = event => {
    event.preventDefault();
    axios     
    .post('https://fe-notes.herokuapp.com/note/create',  
    {
       title: this.state.newTitle,
       textBody: this.state.newNote,

    }
    )
    .then(response => {
       this.setState(() => ({ notes: response.data }));
    })
    .catch(error => {
      console.error('Server Error', error);
    });
    }
    
  editedNoteHandler = event => {
    event.preventDefault();
    axios     
    .put(`https://fe-notes.herokuapp.com/note/edit/id`,
    {
       title: this.state.editedTitle,
       textBody: this.state.editedNote,
    }
      )
    .then(response => {
       this.setState(() => ({ notes: response.data }));
      })
    .catch(error => {
      console.error('Server Error', error);
      });
   
      }

  render() {
    return (
      <div className="App">
      <SidebarContainer/>
      <NotesContainer 
      notes={this.state.notes} 
      viewNoteHandler={this.viewNoteHandler} 
      newNoteTitleHandler={this. newNoteTitleHandler} 
      newNoteBodyHandler={this.newNoteBodyHandler} 
      editedNoteTitleHandler={this.editedNoteTitleHandler}
      editedNoteBodyHandler={this.editedNoteBodyHandler}
      saveNewNoteHandler={this.saveNewNoteHandler}/>
      </div>

    );
  }
}

export default App;


  