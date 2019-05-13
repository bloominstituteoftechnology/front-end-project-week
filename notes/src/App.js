import React from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';

import NoteListView from './views/NoteListView';
import NoteFormView from './views/NoteFormView';
import NoteView from './views/NoteView';
// import ModalView from './views/ModalView';

import './App.css';



class App extends React.Component {

  
  render() {
    return (
      <div className='App'>
        <div className='sideBar'>
          <h1 className='LambdaNotes'>Labs 12</h1>
          
          <div className='buttonViewDiv'>
            <NavLink className='buttonView' exact to='/'>View Your Notes</NavLink>
          </div>

          <div className='buttonViewDiv'>
            <NavLink className='buttonView' to='/CreateNote'>+ Create New Note</NavLink>
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