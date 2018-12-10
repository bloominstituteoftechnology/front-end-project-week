import React, { Component } from 'react';
import './styles/reset.css';
import './styles/App.css';
import { Route, NavLink } from 'react-router-dom';
// import {  } from './actions';

import NotesList from './components/NotesList';
import CreateNoteForm from './components/CreateNoteForm';
import ViewNote from './components/ViewNote';
import EditNoteForm from './components/EditNoteForm';

class App extends Component {
  constructor() {
    super();
    this.state ={ 
      // url: '',
      searchText: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.searchText);
  }

  render() {
    return (
      <div className="App">
        {/* <h3>Lambda Notes Under Construction - Nedim Omerovic</h3> */}
        <div className='app-container'>

          <div className='left-nav-container'>
            <h2 className='nav-title'>Lambda Notes</h2>
            <div>
              <NavLink exact to='/'><button className='navBtn'>View Your Notes</button></NavLink>
              <NavLink to='/create new note'><button className='navBtn'>+ Create New Note</button></NavLink>
              <input 
                onChange={this.handleChange}
                type="text"
                name='searchText'
                value={this.state.searchText}
                className='searchInput'
                placeholder='Search for ...'
              />
            </div>
          </div> 

          <div className='main-notes-container'>

            <div className='notes-container'>
              <Route exact path='/' 
                render={props => 
                  <NotesList 
                    {...props} 
                    search={this.state.searchText}
                  /> 
                }
              />
            </div>

            <div className='create-note-container'>
              <Route exact path='/create new note' 
                render={props => 
                  <CreateNoteForm 
                    {...props} 
                  />
                }
              />
            </div>

            <div className="view-note-container">
              <Route exact path="/view/:noteId"
                render={props => 
                  <ViewNote
                    {...props}
                  />
                } 
              />
            </div>

            <div className='create-note-container'>
              <Route exact path='/edit/:noteId'
                render={props =>
                  <EditNoteForm
                    {...props}
                  />
                }
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
