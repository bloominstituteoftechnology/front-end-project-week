import React, { Component } from 'react';
import SideBar from './components/sidebar/';
import Notes from './components/notes';
import NewNote from './components/notes/newNote.js';
import SingleNotePage from './components/notes/singleNotePage.js';
import {Route} from 'react-router-dom';
import EditNoteForm from './components/notes/editNoteForm.js';
import {withRouter} from 'react-router-dom';
import './App.css';

class App extends Component {
  
  componentDidMount(){
    if (this.props.match.url==='/'){
      this.props.history.push('/notes');
    } 
  }
  
  render() {
    
    return (
      <div className="App">
       <SideBar/>
       <Route exact path='/notes' component={Notes}/>
       <Route exact path='/create' component={NewNote}/>
       <Route exact path='/notes/:noteId' component={SingleNotePage} />
       <Route path='/notes/:noteId/edit' component={EditNoteForm}/>
      </div>
    );
  }
}

export default withRouter(App);
