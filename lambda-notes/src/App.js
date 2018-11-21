import React from 'react';
import './App.css';
import { MainAppContainer, SideBar } from './components/styled-components';
import NewNoteForm from './components/newNoteForm';
import { Route, Link } from 'react-router-dom';

import NotesList from './components/notesList';
import SoloNote from './components/soloNote';
import UpdateForm from './components/updateForm'



const App = props =>{
    return (
      <MainAppContainer >
        <SideBar className='side-bar'>
            <h1>Lambda Notes</h1>
           <Link to='/'> <button>View Your Notes</button> </Link>
            <Link to='/new-note'><button>+ Create New Note</button> </Link>
        </SideBar>

          <Route exact path='/' component={NotesList} />
          <Route  path='/note/:id' render={ props => <SoloNote {...props} /> }/>
          <Route path='/new-note' render={props => <NewNoteForm {...props} /> }/>
          <Route path='/edit-note/:id' render={props => <UpdateForm {...props} /> } />
      </MainAppContainer>
    );
}

export default App;
