import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import {NotesList, CreateNote, Note} from './Components'


class App extends Component {
  constructor() {
    super();
    this.state = {
        notes: [],
        newNote: {
          title: '',
          textBody: ''
        }
    }
  }

  componentDidMount() {
    axios.get(`https://killer-notes.herokuapp.com/note/get/all`)
    .then(response => {
        this.setState({notes: response.data});
    })
    .catch(err => {
        console.log("error", err);
    });
  }

  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  addNote = () => {
    const newNote = 
    {title: this.state.title, textBody: this.state.textBody}
    axios.post  (`https://killer-notes.herokuapp.com/note/create`, newNote)
    .then (note => {
      this.setState({notes: note.data, 
        newNote: {
          title: '',
          textBody: ''
        }
      })
    })
    .catch(err => {
      console.log('could not add note', err);
    })
  }
 
 

  render(){
    return(
      <div className="App">
        <div className='nav-bar'>
              <h1>Lambda Notes</h1>
                  <ul >
                      <button>
                        <NavLink exact to='/'>View Your Notes</NavLink>
                      </button>
                      <button>
                          <NavLink exact to='/create'>Create New Note</NavLink>
                      </button>
                  </ul>
          </div>
      <Route 
        exact
        path='/' 
        render={props => (
        <NotesList {...props} 
        notes = {this.state.notes}
       />
        )}
      />

      <Route 
        exact
        path='/create' 
        render={props => (
          <CreateNote {...props}
          newNote = {this.state.newNote}
          handleInputChange = {this.handleInputChange}
          addNote = {this.addNote}
          />
        )}
      />

       <Route 
        exact
        path='/:id'
        component={Note}
      />
      </div>
    )
  }
}
     


export default App;
