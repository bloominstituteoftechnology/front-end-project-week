import React, { Component } from 'react';
import SideBar from './components/sidebar/';
import Notes from './components/notes';
import NewNote from './components/notes/newNote.js';
import SingleNotePage from './components/notes/singleNotePage.js';
import SignIn from './components/authenticate/signIn.js';
import SignUp from './components/authenticate/signUp.js';
import {Route} from 'react-router-dom';
import EditNoteForm from './components/notes/editNoteForm.js';
import {withRouter} from 'react-router-dom';
import './App.css';

class App extends Component {
  
  componentDidMount(){
    const jwt=localStorage.getItem('jwt');
    if (jwt===null && localStorage.getItem('location')!=='/signup') {
      this.props.history.push('/signin');
    } else if (localStorage.getItem('location')==='/signup') {
      this.props.history.push('/signup');
    } else {
      this.props.history.push(localStorage.getItem('location'));
    }
  }
  
  render() {
    if (localStorage.getItem('jwt')!==null) {
      return (
        <div className="App">
          <SideBar/>
            <Route exact path='/notes' component={Notes}/>
            <Route exact path='/create' component={NewNote}/>
            <Route exact path='/notes/:noteId' component={SingleNotePage} />
            <Route exact path='/notes/:noteId/edit' component={EditNoteForm}/>
        </div>
        );
       } else {
         return (
          <div className='App'>
            <Route exact path='/signin' component={SignIn}/>
            <Route exact path='/signup' component={SignUp}/>
          </div>
         )
        }
      } 
}

export default withRouter(App);
