import React, { Component } from 'react';
import axios from 'axios';
import All from './components/ViewAll/All'
import { NavLink, Route } from 'react-router-dom'
import CreateNew from './components/nav/CreateNew'
import NoteView  from './components/NoteView/NoteView'
import EditNoteForm from './components/NoteView/edit'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      expandedNote: {},
      value: '',
    }
  }

  componentDidMount () {
    axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      console.log(response);
      this.setState({notes: response.data})
    }) 
    .catch (error => {
      console.log('Error', error);
    })
  }

  addNewNote = data => {
    this.setState({notes: data})
  }

  deleteNoteButton = (ev) => {
    
    axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${this.state.notes._id}`)
    .then(response => {
      this.setState({
        notes: response.data
      });
    })
    .catch (error => console.log('Error: ', error ))
  }
 

editNote = (event) => {
  
const updatedNote={
  id: event.target.id,
  title: this.state.notes.title,
  textBody: this.state.notes.textBody,
}

  axios     
    .put(`https://fe-notes.herokuapp.com/note/edit/${this.state.notes._id}`,
    updatedNote
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
        <div className = 'navBar'>
          <nav>
            <h1> Lambda Notes </h1>
            <NavLink to = '/'> View Your Notes </NavLink>
            <NavLink
            to = '/create-new-note'> + Create New Note </NavLink>
          </nav>
        
          <Route 
            exact path='/' 
            render=
              {props =>
                <All
                 {...props} 
                notes = {this.state.notes}
                />
              }
           />

          <Route 
              exact path='/create-new-note' 
              render=
                {props =>
                  <CreateNew 
                    {...props}
                    addNewNote = {this.addNewNote}
                  />
                }
          />

          <Route 
                exact path='/note/:id' 
                render=
                {props =>
                    <NoteView
                    {...props}
                    note = {this.state.notes} 
                    updateButton= {this.updateButton}
                    expandedNote={this.state.expandedNote}
                    deleteNoteButton = {this.deleteNoteButton}
                     />
                }
                />

              <Route
                exact path='/note/edit/:id'
                render=
                  {props =>     
                    (<EditNoteForm 
                      {...props} 
                      editNote={this.editNote}notes = {this.notes} 
                      expandedNote={this.state.expandedNote} />)} />


        </div>          
      
      </div>
    );
  }
}

export default App;
