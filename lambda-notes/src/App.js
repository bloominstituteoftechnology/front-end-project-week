import React from 'react';
import './App.css';
import { MainAppContainer, SideBar, Content, Buttons } from './components/styled-components';
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
           <Link to='/'> <Buttons><p>View Your Notes</p></Buttons> </Link>
            <Link to='/new-note'><Buttons><p>+ Create New Note</p></Buttons> </Link>
        </SideBar>
        <Content>
          <Route exact path='/' component={NotesList} />
          <Route  path='/note/:id' render={ props => <SoloNote {...props} /> }/>
          <Route path='/new-note' render={props => <NewNoteForm {...props} /> }/>
          <Route path='/edit-note/:id' render={props => <UpdateForm {...props} /> } />
        </Content>
      </MainAppContainer>
    );
}

export default App;
