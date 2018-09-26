import React from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';

import NoteListView from './views/NoteListView';
import NoteFormView from './views/NoteFormView';
import NoteView from './views/NoteView';

import './App.css';



class App extends React.Component {
  
  render() {
    return (
      <div className='App'>
        <div>
          <h1>Lambda Notes</h1>
          
          <div>
            <NavLink exact to='/'>View Your Notes</NavLink>
          </div>

          <div>
            <NavLink to='/CreateNote'>+ Create New Note</NavLink>
          </div>
        </div>

        
      <Route exact path='/' component = {NoteListView} />
      <Route  path='/notes/:noteId' component={NoteView}/>
      <Route  path='/CreateNote' component={NoteFormView}/>
      </div>
    );
  }
}

export default withRouter(App); 