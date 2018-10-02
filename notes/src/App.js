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
            tags: ["tag", "otherTag"],
            title: "Note Title",
            textBody: "Note Body",
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
  render(){
    return(
      <div className="App">
        <div className='nav-bar'>
              <h1>Lambda Notes</h1>
                  <ul >
                      <button>
                        <NavLink to='/'>View Your Notes</NavLink>
                      </button>
                      <button>
                          <NavLink to='/create'>Create New Note</NavLink>
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
        path='/:id'
        render={props => (
          <Note
            {...props}
            notes = 
            {this.state.notes} />
        )}
      />

      <Route exact path='/create' component={CreateNote}
      /> 
      </div>
    )
  }
}
     


export default App;
